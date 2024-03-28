const btnPrecedent = document.querySelector('.slider__btn--previous');//Je déclare que la variable btnPrecedent recherche un élément dans le document HTML ayant la classe .slider__btn--previous et le répertorie.
const btnSuivant = document.querySelector('.slider__btn--next');//Je déclare que la variable btnSuivant recherche un élément dans le document HTML ayant la classe .slider__btn--next et le répertorie.
const slides = document.querySelectorAll('.artiste');//Je déclare que la variable slides recherche tous les éléments dans le document HTML ayant la classe .artiste et les répertorie.

let currentSlideIndex = 0;//Je déclare que la variable currentSlideIndex est initialement à 0.

function updateBtnState(){//Je déclare que la fonction updateBtnState() mettra à jour l'état de btnPrecedent et de btnSuivant selon la position en cours de .artiste.
    btnPrecedent.disabled = currentSlideIndex === 0;//Désactive le btnPrecedent si la position en cours de .artiste est égal à 0, soit la 1re position.
    btnSuivant.disabled = currentSlideIndex === slides.length -1;//Désactive le btnSuivant si la position en cours de .artiste est égal au nombre total de .artiste moins 1, soit la dernière position.

    if (btnPrecedent.disabled) {//Si btnPrecedent est désactivé, ajoute la classe .slider__btn--disabled à btnPrecedent pour le griser.
        btnPrecedent.classList.add('slider__btn--disabled');
    } else {//Sinon, supprime la classe .slider__btn--disabled.
        btnPrecedent.classList.remove('slider__btn--disabled');
    }
    
    if (btnSuivant.disabled) {//Si btnSuivant est désactivé, ajoute la classe .slider__btn--disabled à btnSuivant pour le griser.
        btnSuivant.classList.add('slider__btn--disabled');
    } else {//Sinon, supprime la classe .slider__btn--disabled.
        btnSuivant.classList.remove('slider__btn--disabled');
    }
}

updateBtnState();//Appel de la fonction updateBtnState() pour mettre à jour l'état initial de btnPrecedent et de btnSuivant au chargement de la page.

//Les gestionnaires d'événements pour les clics sur les boutons précédent et suivant sont définis dans les lignes suivantes. Lorsque l'un de ces boutons est cliqué, la fonction correspondante est exécutée pour mettre à jour l'index de la diapositive actuelle et mettre à jour l'état des boutons.

btnPrecedent.addEventListener('click', () => {//Sur l'écoute du clic de btnPrecedent, l'index de currentSlideIndex se met à jour en se décrémentant de 1 jusqu'à atteindre la première .slides. La méthode scrollIntoView() utilisée ici permet de faire défiler la .slides actuelle dans la zone visible du navigateur. Ensuite, la fonction updateBtnState() est appelée et mettre à jour l'état de btnPrecedent et de btnSuivant selon la position en cours de .artiste.
    currentSlideIndex = Math.max(0, currentSlideIndex - 1);
    slides[currentSlideIndex].scrollIntoView();
    updateBtnState();
});

btnSuivant.addEventListener('click', () => {//Sur l'écoute du clic de btnSuivant, l'index de currentSlideIndex se met à jour en se s'incrémentant de 1 jusqu'à atteindre la dernière .slides. La méthode scrollIntoView() utilisée ici permet de faire défiler la .slides actuelle dans la zone visible du navigateur. Ensuite, la fonction updateBtnState() est appelée et mettre à jour l'état de btnPrecedent et de btnSuivant selon la position en cours de .artiste.
    currentSlideIndex = Math.min(slides.length - 1, currentSlideIndex + 1);
    slides[currentSlideIndex].scrollIntoView();
    updateBtnState();
});