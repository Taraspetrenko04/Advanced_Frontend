let btn =  document.getElementById('burger')
let menu = document.getElementById('menu-buttons');

let cross = document.getElementById('cross-features');
let hambrg = document.getElementById('burger-features');

    btn.addEventListener('click',() =>{
        menu.classList.toggle('d-none');
        cross.classList.toggle('d-none');
        hambrg.classList.toggle('active');
})
