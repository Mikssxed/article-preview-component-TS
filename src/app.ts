let button: HTMLButtonElement = document.querySelector('button');
let arrow: HTMLElement = document.querySelector('button img');
let pop: HTMLElement = document.querySelector('#action');
let bottom: HTMLElement = document.querySelector('#bottom');
let body: HTMLBodyElement = document.querySelector('body');

function share() {

    if(button.style.background == 'var(--color1)') {
        button.style.background = 'var(--color4)';
        arrow.style.filter = 'none';
        pop.style.animation = 'fadeOut 0.5s'
        pop.style.opacity= '0';
        if (window.innerWidth < 790) {
            bottom.style.background = 'white';
            pop.style.animation = 'none'
        }
    }
    else {
        button.style.background = 'var(--color1)';
        arrow.style.filter = 'brightness(0) invert(1)';
        pop.style.animation = 'fadeIn 0.5s'
        pop.style.opacity = '1';
        if (window.innerWidth < 790) {
            bottom.style.background = 'var(--color1)';
            pop.style.animation = 'none'
        }
    }
}

button.addEventListener('click', share)