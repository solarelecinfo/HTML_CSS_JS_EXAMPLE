const titre = document.getElementById("titre1")
console.log(titre.textContent)


const fruits =document.querySelectorAll(".list_ul li")
var index=0;
fruits.forEach(function(element) {
    index++;
    document.body.innerHTML += "<p>" + element.textContent +"-"+index+ "</p>";  // Ajoute un <p> à la fin du body
});
