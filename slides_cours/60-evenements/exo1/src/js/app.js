//object declaration
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.getElementById("box3");

const button_img = document.getElementById("btn3");

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


function fonction_add_img(relative_path) {
    const img = document.createElement("img");
    img.src = relative_path; // URL de l'image
    img.style.width = "auto";
    img.style.height = "150px";
    box3.appendChild(img);
}

//Add event Listeners
box1.addEventListener("click",function() {
    fonction_box(box1, "#008800","click_event");});


box2.addEventListener("mouseover",function() {
    fonction_box(box2, "#778800","mouse_over_event");});
    
box2.addEventListener("mouseleave",function() {
        reset_box(box2);});

button_img.addEventListener("dblclick",function(){fonction_add_img("./src/images/ville.jpg");})



