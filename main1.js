function randomRgb() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

let par1 = document.querySelector(`#par1`);
let par2 = document.querySelector(`#par2`);
let par3 = document.querySelector(`#par3`);
let p = document.querySelectorAll('p');

let changeColor = document.querySelector(`#changeColor`);
changeColor.addEventListener('click', () => { 
    par1.style.color = randomRgb();
    par2.style.color = randomRgb();
    par3.style.color = randomRgb();
});

let changeWeight = document.querySelector(`#changeWeight`);
changeWeight.addEventListener('click', () => { 
    p.forEach((paragrafo) => paragrafo.classList.toggle('grassetto'));
});

let remove = document.querySelector(`#remove`);
remove.addEventListener('click', () => { 
    p.forEach((paragrafo) => {
        paragrafo.classList.toggle('nascondi');
    });
});
