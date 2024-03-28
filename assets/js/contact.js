const eMail = document.querySelector('#eMail');
const errorEmail = document.querySelector('.error-email');
const form = document.querySelector('form.contact');


/**
 * @description Code validant si l'adresse courriel indiquée dans le champ (ou input) Adresse courriel contient yahoo. Le formulaire ne sera pas envoyé si oui et indiquera un message d'erreur. Si non, il sera envoyé.
 */
form.addEventListener('submit', (e) => { // Ajoute l'événement du clic sur le bouton Soumettre (son action étant par défaut 'submit').
    if (eMail.value.includes('@yahoo')) { // Si le champ de l'adresse courriel contient //@yahoo//.
        e.preventDefault(); // Prévient l'action (événement) du bouton Soumettre si yahoo est inscrit dans le champ.
        errorEmail.textContent = "Yahoo n'est pas supporté par le formulaire."; // Affiche le message d'erreur sous le champ Adresse courriel.
        eMail.focus(); // Dirige l'utilisateur vers le champ fautif, soit le champ Adresse courriel, afin qu'il puisse corriger son adresse.
    } else {
    errorEmail.textContent = ''; // Vide le message d'erreur, spécialement dans le cas où il a été affiché (par défaut, il n'est pas affiché).
    }
});
