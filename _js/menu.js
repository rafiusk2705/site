const btn2 = document.querySelector('#btn2');

function fechadiv(){
    const nav = document.getElementById('nav');
        nav.classList.toggle('_active');
         
        
    }

btn2.addEventListener('click',fechadiv());