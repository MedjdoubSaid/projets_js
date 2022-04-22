// console.log('connecté!');

/* document.getElementById('titre').style.color = "green";

document.getElementById('titre')
const titre = document.getElementById('titre');
console.log('titre')
titre.style.color = "green" */;

/* let titre = document.getElementById('titre');
titre.style.color = "green";

titre = 2;
console.log(titre); // renvoie 2


let score = 0; // je stocke un nombre
console.log(score, "initialisation"); // je vérifie

score = score + 1 ;
console.log(score,"apré addition"); // je vérifie

const cours = "javascript"; // je stocke unen chaine de caractères
console.log(cours,"cours")
 */
// je concatène
/* const mot1 = "hello";
const mot2 = "word!";
const phrase = mot1 + " " + mot2; // concaténation
console.log(phrase,"phrase");     // je vérifie */

/* // je sélectionne et je stocke
const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');

// le bouton pour rejouer
const replay = document.getElementById('replay'); 
console.log(replay);  */


//console.log(btnRed,"bouton rouge");
//console.log(btnBlue);

// je soumets le cercle rouge à une action
// let compteur = 0;

// console.log(compteur,"compteur au démarrage");

//btnRed.addEventListener('click', function(){

        // console.log('cliqué');
        // ici l'action
        // incrémenter le compteur de 1
        // compteur = compteur + 1 ;
        // console.log(compteur,"compteur aprés l'incrémentation")

// });
// je soumets le cercle bleu à une action
// compteur = 0 ;
// console.log(compteur,"compteur au démarrage")
// btnRed.addEventListener('click', function(){
        // compteur = compteur + 1 ;
        // console.log('cercle bleu cliqué');
        // console.log(compteur,"compteur aprés l'incrémentation")

// });

/* function meteo(temps){
        console.log('le temps est' + ' ' + temps);
}
meteo("beau");
console.log('le temps est' + ' ' + temps); */




// let titre = document.getElementById('titre');
/* // je soumets le cercle rouge à une action
btnRed.addEventListener('click', function(){
        //console.log('cercle bleu cliqué');
        add();
});
// je soumets le cercle bleu à une action
btnBlue.addEventListener('click', function(){
        //console.log('cercle bleu cliqué');
        add();
}) */
/* function add(){
        compteur = compteur + 1;
        console.log(compteur,"compteur aprés l'incrémentation");
        titre.innerText = compteur;
};
setTimeout(function(){
        // action à réaliser
        // à la fin du délai
        console.log('fin du chrono!')
        // je suprime les cercles
        btnRed.remove();
        btnBlue.remove();
},10000) ; */
/* const globale = " ceci est une variable globale";
function scope(){
        const locale = "Ceci est une variable locale";
        console.log(locale,"depuis fonction");// accès
        console.log(globale,"depuis fonction");// accès
}
// appel de la fonction 
scope();
        console.log(globale,"en dehors de la fonction");// accès
        console.log(locale,"en dehors de la fonction");// undefined
 */

/* replay.addEventListener('click', function(){
        console.log('cliqué'); 
        location.reload();
}); */

console.log('connecté !'); 
//let titre = document.getElementById('titre');
titre.style.color = "green"; 

// le bouton pour rejouer
const replay = document.getElementById('replay'); 
console.log(replay); 

// Je sélectionne et je stocke
const btnRed = document.getElementById('btn-red'); 
// console.log(btnRed, "bouton rouge"); 
const btnBlue = document.getElementById('btn-blue');
// console.log(btnBlue); 
let compteur = 0;
// console.log(compteur, "compteur au démarrage"); 

// Je soumets le cercle rouge à une action
btnRed.addEventListener('click', function(){
    // console.log('cliqué'); 
add(); 
}); 

// Je soumets le cercle bleu à une action
btnBlue.addEventListener('click', function(){
    //console.log('cercle bleu cliqué'); 
add(); 
}); 

function add(){
compteur = compteur + 1; 
console.log(compteur, "compteur après incrémentation"); 
titre.innerText = compteur; 
}; 


setTimeout(function(){
    // Je supprime les cercles
btnRed.remove(); 
btnBlue.remove(); 
}, 10000); 


replay.addEventListener('click', function(){
console.log('cliqué'); 
location.reload();
});
