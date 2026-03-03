
 let newarticle = document.querySelector('#newarticle');

 newarticle.addEventListener('click', () => { 
     let title = document.querySelector('#title').value;
     let paragrafo = document.querySelector('#paragrafo').value;
     if (title == "" || paragrafo == "") {
        alert("Attenzione: devono essere inseriti sia un titolo che un paragrafo!")
     } else {
         let date = new Date();
    let formatDate = date.toLocaleDateString()
    let container = document.querySelector('.container')
    let Article = document.createElement('p');
    Article.innerHTML = `<h1>${title}</h1> <p>${paragrafo}</p> <p> Pubblicato in data: ${formatDate}</p>`;
    container.appendChild(Article);

     }
    document.querySelector('#title').value = "";
    document.querySelector('#paragrafo').value = "";
 });
