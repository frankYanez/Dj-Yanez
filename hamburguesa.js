const hamburguesa = document.getElementById('hamburguesa')

hamburguesa.addEventListener('click', ()=>{
    console.log(hamburguesa);
    const navbar = document.querySelector('#links')
    navbar.classList.toggle('active')
})