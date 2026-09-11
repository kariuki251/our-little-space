// ================================
// OUR LITTLE SPACE
// JavaScript
// ================================

const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const letterModal = document.getElementById("letterModal");


// Open the letter
openLetter.addEventListener("click", () => {
    letterModal.classList.add("active");
});


// Close the letter
closeLetter.addEventListener("click", () => {
    letterModal.classList.remove("active");
});


// Close when clicking outside the letter
letterModal.addEventListener("click", (event) => {

    if (event.target === letterModal) {
        letterModal.classList.remove("active");
    }

});


// Close with Escape key
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        letterModal.classList.remove("active");
    }

});


console.log("Our Little Space ❤️ is running!");


// ================================
// MUSIC PLAYER
// ================================

const musicButton = document.getElementById("musicButton");
const ourSong = document.getElementById("ourSong");

let musicPlaying = false;

musicButton.addEventListener("click", () => {

    if (musicPlaying) {

        ourSong.pause();

        musicButton.textContent = "▶";

        musicPlaying = false;

    } else {

        ourSong.play();

        musicButton.textContent = "❚❚";

        musicPlaying = true;
    }

});


// Reset button when song finishes

ourSong.addEventListener("ended", () => {

    musicButton.textContent = "▶";

    musicPlaying = false;

});