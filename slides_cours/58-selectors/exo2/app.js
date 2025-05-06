// Récupérer le bouton
const bouton = document.getElementById('btn');

// Ajouter un événement
bouton.addEventListener('click', function() {
    alert('Vous avez cliqué sur le bouton!');
});

// Ajouter un nouveau paragraphe sans réécrire le body
const p = document.createElement('p');
p.textContent = 'Nouveau texte ajouté';
document.body.appendChild(p);