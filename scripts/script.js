document.addEventListener('DOMContentLoaded',f_main);

function f_main(){
    let container = document.querySelector('section');

    const VH = window.innerHeight;
    const VW = window.innerWidth;


    for(let i = 0; i < 12; i++){
        let randNumb = (Math.floor(Math.random() * VW))-20;
        let star = document.createElement('div');
        star.style.margin = randNumb;
        star.classList.add('star');
        console.info(star);
        container.append(star);
    }
}