let lista = document.querySelector("#lista");
let wrapper = document.querySelector("#wrapper");
let registro = document.querySelector("#registro");
// buttons
let modifica = document.querySelector("#modifica");
let elenco = document.querySelector("#elenco");
let aggiungi = document.querySelector("#aggiungi");
// input
let nomeInput = document.querySelector("#nomeInput");
let numeroInput = document.querySelector("#numeroInput");
let Nome = document.querySelector("#Nome");
let Numero = document.querySelector("#Numero");


let rubrica = {
    listaContatti:[
        {nomeContatto : 'Giada', numero : '3333333333'},
        {nomeContatto : 'Pedro', numero : '4444444444'},
        {nomeContatto : 'Sonia', numero : '5555555555'},
        {nomeContatto : 'Diego', numero : '6666666666'},
    ],
    showContacts : function() {
        wrapper.innerHTML= '';
        this.listaContatti.forEach((contatto)=>{
            let div = document.createElement('div');
            div.classList.add('cardBody');
            div.innerHTML =`
                <p>${contatto.nomeContatto}</p>
                <p>${contatto.numero}</p>
                <button id = "elimina"><i class="fa-solid fa-trash icon"></i></button>
        `;
            wrapper.appendChild(div);
            
        }) 
        let icone = document.querySelectorAll('.icon');
        icone.forEach((icona, index)=>{
            icona.addEventListener('click', ()=>{
                this.listaContatti.splice(index, 1);
                this.showContacts();
            });
        })
    },
    addContact : function(newNome, newNumero){
        if (newNome && newNumero) {
            this.listaContatti.push({nomeContatto : newNome, numero : newNumero}),
            this.showContacts();
            if (check == false) {
                check = true;
                registro.innerHTML = "Nascondi i Contatti";
            }}},
            removeContact : function(rimuoviNome) {
                let nomi = this.listaContatti.map((contatto)=> contatto.nomeContatto)
                let i = nomi.indexOf(rimuoviNome);
                if (i >= 0) {
                    this.listaContatti.splice(i, 1);
                    this.listaContatti();
                    if (check == false) {
                        check = true;
                        registro.innerHTML = "Nascondi i Contatti";
                    }
                }},
                modifica_contatto : function (name, newcellulare) {
                    this.listaContatti.forEach(contatto =>{
                        if(contatto.nomeContatto == name){
                            contatto.numero = newcellulare;
                            this.showContacts();
                        }
                    })
                    
                }}
                
                let check = false;
                elenco.addEventListener('click',()=>{
                    if (check == false) {
                        rubrica.showContacts();
                        check = true;
                        registro.innerHTML = "Nascondi i Contatti";
                    } else {
                        wrapper.innerHTML = '';
                        check = false;
                        registro.innerHTML = "Mostra i Contatti";   
                    }
                });
                
                
                aggiungi.addEventListener('click', ()=>{
                    rubrica.addContact(nomeInput.value, numeroInput.value);
                    nomeInput.value='';
                    numeroInput.value='';
                });
                
                modifica.addEventListener('click', ()=>{
                    
                    if (Nome.value.trim() !== ''){ 
                        rubrica.modifica_contatto(Nome.value, Numero.value);
                        Nome.value = '';
                        Numero.value = '';
                    }})
                    
                    