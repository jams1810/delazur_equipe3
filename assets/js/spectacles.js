const likeNumber = document.querySelector('.like-number');
const heartIcons = document.querySelectorAll('.fa-regular');


/**
 * @description Code permettant de cliquer sur l'icône de coeur et le colorer, puis d'ajouter +1 au total (et vice versa).
 */

likeNumber.innerHTML = 0; // Ajoute 0 par défaut au compteur .

heartIcons.forEach((heartIcon) => { // Effectue une boucle pour chaque élément (icônes de coeur).
    heartIcon.addEventListener('click', () => { // Ajoute l'élément click à chaque élément (icônes de coeur).
        heartIcon.classList.toggle('fa-solid'); // Bascule la classe par défaut (fa-regular) par celle du coeur plein (fa-solid).
        let count = document.querySelectorAll('.fa-solid').length; // Compte le nombre d'éléments du tableau des icônes de coeur plein.
        likeNumber.innerHTML = count; // Définit le total (length) du tableau des icônes de coeur plein.
        });
});  
