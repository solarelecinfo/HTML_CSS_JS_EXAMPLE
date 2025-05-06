//object declaration
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const container = document.getElementById(".box3");


// Récupérer le bouton
function fonction_button(){
    var message="Click button";
    alert(message);
    console.log(message);
}


function fonction_box(element,color,text_value){
    element.textContent = text_value;
    element.style.textAlign = "center";
    element.style.backgroundColor = color;
}


function reset_box(element) {
    element.removeAttribute("style");
    element.textContent = "";
}


function fonction_add_img(element,relative_path) {
    const img = document.createElement("img");
    img.src = relative_path; // URL de l'image
    img.style.alignContent = "center"
}

//Add event Listeners
box1.addEventListener("click",function() {
    fonction_box(box1, "#008800","click_event");});


box2.addEventListener("mouseover",function() {
    fonction_box(box2, "#778800","mouse_over_event");});
    
box2.addEventListener("mouseleave",function() {
        reset_box(box2);});



