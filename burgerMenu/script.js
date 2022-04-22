// je sélectionne et je stocke
// l'icone Burger
const icone = document.querySelector('.navbar-mobile i');
    console.log(icone);

// La DIV MODAL
const modal = document.querySelector('.modal');
    console.log(modal);
// je soumets l'icone à une action au clic
icone.addEventListener('click',function(){
    console.log("icone cliquée");
    modal.classList.toggle('change-modal');
    icone.classList.toggle('fa-times')
});
