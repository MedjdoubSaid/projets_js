/* // je sélectionne et je stocke 
// la DIV Switch

const switchBox = document.querySelector('.switch');
console.log(switchBox);
// je soumets la div switch à une action au clic
switchBox.addEventListener('click',function(){
    console.log('DIV cliquée!');
// la Div switch change couleur de fond
    switchBox.classList.toggle('switch-change');
    
    
// je déplace le cercle
    btn.getElementsByClassName.left = "60px" ;
// je déplace le cercle 
// j'utilise .classList.toggle
    btn.classList.toggle('btn-change') ;  
});
// la DIV btn le (cercle)
const btn = document.querySelector('.btn');
    console.log(btn);


// l'icone
const icone = document.querySelector('i');
    console.log(icone);
// je déplace l'icone
    icone.classList.toggle('icone-change');
// je change l'icone
    icone.classList.toggle('fa-sun');


// la DIV container
const container = document.querySelector('.container');
    console.log(container);
// La DIV container change de couleur de fond 
//container.classList.toggle('container-change');

// le titre
const titre = document.querySelector('h1');
console.log(titre);
// le modifie le texte de titre
titre.innerText = "LIGHT MODE";
if(titre.innerText === "DARK MODE"){
    titre.innerText = "LIGHT MODE";
}else{
    titre.innerText = "DARK MODE";
} */

console.log('connecté'); 

// Je sélectionne et je stocke
// la DIV switch
const switchBox = document.querySelector('.switch'); 
console.log(switchBox); 
// la DIV btn (le cercle)
const btn = document.querySelector('.btn'); 
console.log(btn)
// l'icône
const icone = document.querySelector('i'); 
console.log(icone); 
// la DIV container
const container = document.querySelector('.container'); 
console.log(container); 
// le titre
const titre = document.querySelector('h1'); 
console.log(titre); 


// Je soumets la DIV switch à une action au clic
switchBox.addEventListener('click', function(){
    console.log('DIV cliquée !'); 

    // Je déplace le cercle
    //btn.style.left = "60px";


    // J'utilise .classList.toggle
    btn.classList.toggle('btn-change'); 
    // Je déplace l'icône
    icone.classList.toggle('icone-change'); 
    // Je change l'icône
    icone.classList.toggle('fa-sun'); 
    // La DIV switch change de couleur de fond
    switchBox.classList.toggle('switch-change');
    // La DIV container change de couleur de fond
    container.classList.toggle('container-change'); 

    // Je modifie le texte du titre
    if(titre.innerText === "DARK MODE"){
        titre.innerText = "LIGHT MODE"; 
    }else{
        titre.innerText = "DARK MODE"; 
    }

});