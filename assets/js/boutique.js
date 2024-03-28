const btns = document.querySelectorAll('.btn-ajouter'); // Pour selectionner tous les boutons dans le HTML.
const overlay = document.querySelector('.overlay'); // Pour selectionner le pop-up.
const btnClose = document.querySelector('.overlay__btn--close'); // Pour selectionner le bouton de fermer du pop-up.
const modal = document.querySelector('.modal'); // pour selectionner la section d'afichage du nom de l'article.

for(let btn of btns){ // Boucle parce qu'il y a plusieurs boutons. 
    btn.addEventListener('click', () =>{ 
        const articleName = btn.dataset.articleName; 
        const modalTitle = modal.querySelector('.title');
        
        overlay.classList.add('overlay--show'); // Ajoute la classe qui fait afficher le pop-up.
        
        modalTitle.textContent = articleName; // ajoute le nom de l'article à l'emplcement selectionné. 
    });
}

btnClose.addEventListener('click', () =>{ // Fait fonctionner le bouton fermer du pop-up. 
    overlay.classList.remove('overlay--show');
});

