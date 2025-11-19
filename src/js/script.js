// *** CAROUSEL ***
const carousel=document.querySelector(".carousel__container")
const nextButton = document.querySelector(".carousel__button--next")
const prevButton = document.querySelector(".carousel__button--prev")

// Largeur de défilement d’un item
if (carousel) {
    // Scroll au clic sur le bouton précédent
    prevButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -260, behavior: "smooth" });;
    });

    // Scroll au clic sur le bouton suivant
    nextButton.addEventListener("click", () => {
        carousel.scrollBy({ left: +260, behavior: "smooth" });;
    });
}
// TODO
