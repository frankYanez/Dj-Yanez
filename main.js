

const imgCaptcha = document.getElementById('captcha-img')
const inputCaptcha = document.querySelector('#input-captcha')
const sendForm = document.querySelector('#button-send')
let imgCheck = document.querySelector('#img-check')
const form = document.querySelector('#form')
const table = document.querySelector('#table-dates')
const empty = document.getElementById('empty')
const eventPerMonth = document.getElementById("content-events")
const buttonx3 = document.getElementById("button-3")
const nombre = document.querySelector('#name')
const email = document.querySelector('#email')
const text = document.querySelector('#text')

let eventos = [{
    nombre: "Carlos",
    email: "Carlos@yahoo.com",
    text: "Cumple de 15"
}];

const generateCaptcha = ()=> {
    const value = Math.round( Math.random() * 1000000)
    imgCaptcha.innerHTML = value
    return value
}

const showTable = () => {
    
    
    
    eventPerMonth.innerHTML =''
    eventos.forEach( ele => {
        const row = document.createElement('tr')
        const columnName = document.createElement('td')
        const columnEmail = document.createElement('td')
        const columnEvent = document.createElement('td')

        columnName.innerText = ele.nombre
        columnEmail.innerText = ele.email
        columnEvent.innerText = ele.text
        
        

        row.appendChild(columnName)
        row.appendChild(columnEmail)
        row.appendChild(columnEvent)
        eventPerMonth.appendChild(row)
        row.classList.add('event')
        
       
    })
}

let valueCaptcha = generateCaptcha()


const validatorCaptcha = () => {
    
   let validador;

    if ( valueCaptcha == inputCaptcha.value) {
        imgCheck.src = '../images/cheque.png'
                return validador = true
    }else if(validador == ''){
        imgCheck.src = ''
        return validador = ''
    }else{
        imgCheck.src = '../images/cancelar.png'
                return validador = false
    }
                
    }
    
const emptyTable = ()=>{
    eventPerMonth.innerHTML = ''
    eventos = []
}

const addUser = () => {
   

    const user = {nombre: nombre.value, email: email.value, text: text.value}
    eventos.push(user)
    showTable()

    
  
    
}

function cleanField() {
    nombre.value = ''
    email.value = ''
    text.value = ''
    inputCaptcha.value = ''
}

const addx3 = ()=>{
    
    for (let index = 1; index < 3; index++) {
        addUser()
        
    }
    showTable()
}



inputCaptcha.addEventListener( 'blur', () => { validatorCaptcha()  } )


const submit = (validador) => {
   
    
    if (validador) {
        addUser()
        
        alert('Formulario Enviado')
    } else{

        alert('Hubo un error')
    }
    valueCaptcha=  generateCaptcha()
    imgCheck.src = ''
}



form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const validate = validatorCaptcha()
    submit(validate)
    cleanField()
    
})

empty.addEventListener('click', ()=>{
    emptyTable()
})

showTable()