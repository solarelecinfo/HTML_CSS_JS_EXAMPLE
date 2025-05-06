// Récupérer le bouton
const bouton = document.querySelector('#btn');

// Ajouter un événement
bouton.addEventListener('click', function() {
    alert('Vous avez cliqué sur le bouton!');
});

// Ajouter un nouveau paragraphe sans réécrire le body
const p = document.createElement('p');
p.textContent = 'Nouveau texte ajouté';
document.body.appendChild(p);


//afficher List
const titre = document.getElementById("titre1")
console.log(titre.textContent)


const fruits =document.querySelectorAll(".list_ul li")
var index=0;

fruits.forEach(function(element) {
    index++;
    var p_element = document.createElement("p")  // Ajoute un <p> à la fin du body
    p_element.textContent =  element.textContent +"-"+index;  
    document.body.appendChild(p_element)
});
