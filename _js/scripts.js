var btn = document.querySelector('#btn');
var container = document.querySelector('.container');
const nav= document.getElementById('nav');
const seta= document.getElementById('seta');


function item1(){
    if(nav.style.display === 'block'){
        nav.style.display='none';
        nav.classList.remove('_active');
        seta.classList.remove('_active');

    }else{
        nav.style.display = 'block';
        nav.classList.toggle('_active');
        seta.classList.toggle('_active');
    }
}
