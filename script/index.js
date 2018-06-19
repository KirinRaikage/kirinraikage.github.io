// Chargement de fullpage.js
$(document).ready(function () {
    $('#fullpage').fullpage();
});

var images = document.querySelectorAll(".containerIcones i");
var boutonLearn = document.querySelector("#knowMore");
function survolImages(listeImages) {
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener("mouseover", function () {
            
            this.classList.toggle("colored");
        });
        images[i].addEventListener("mouseout", function () {
            this.classList.toggle("colored");
        });


    }
}
boutonLearn.addEventListener("click", function () {
    window.location.href = "#containerCompetences"; //Redirige vers le div correspondant
});
survolImages(images);