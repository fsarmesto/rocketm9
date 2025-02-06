document.addEventListener('DOMContentLoaded',f_main);

function f_main(){
    let container = document.querySelector('section');

    const VH = window.innerHeight;
    const VW = window.innerWidth;

    for(let i = 0; i < 20; i++){
        let randNumb = (Math.floor(Math.random() * VW))-20;
        let star = document.createElement('div');
        star.classList.add('star');
        star.innerText = "★";
        star.setAttribute('style','margin-left:'+randNumb+"px");
        container.append(star);
    }

    let copy = container.cloneNode(true);
    setTimeout(() => {
        container.before(copy);
    },4000);
    let copy2 = container.cloneNode(true);
    setTimeout(() => {
        copy.before(copy2);
    },6000);
}