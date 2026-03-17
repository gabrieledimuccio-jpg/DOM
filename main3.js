// Buttons
let avvia = document.querySelector(`#avvia`);
let pausa = document.querySelector(`#pausa`);
let reset = document.querySelector(`#reset`);

// // inputs
let input = document.querySelector(`input`);

// variabili
let countdown = document.querySelector(`#countdown`);
let timer;
let counter;
let tempo_rimanente = 0;

// button Avvia/Riprendi
avvia.addEventListener('click', ()=>{
    clearInterval(timer);
    counter = input.value;
    if (tempo_rimanente !== 0) {
        counter = tempo_rimanente;
    }
    timer = setInterval(() => {
        if (counter < 0) {
            alert(`Inserisci un numero positivo`);
            clearInterval(timer);
            countdown.innerHTML = "Tempo scaduto!";
            // }else if(countdown.innerHTML != tempo_rimanente) {
            //     countdown.innerHTML--;
        } else {
            countdown.innerHTML = counter;
            counter--;
        }
    }, 1000);
    
});

// button Pausa
pausa.addEventListener('click', ()=>{
    clearInterval(timer);
    tempo_rimanente = counter;
});

// button Reset
reset.addEventListener('click', ()=>{
    input.value = ''
    clearInterval(timer);
    countdown.innerHTML = ''
})
