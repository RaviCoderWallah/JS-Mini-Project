const container = document.querySelector(".container");
const cardContent = ["🐶", "🐱", "🐘", "🏠", "🏢", "🍕", "🍎", "🍣"];

let cards = [...cardContent, ...cardContent];
cards = cards.sort(() => 0.5 - Math.random());

let firstCard = null;
let secondCard = null;
let lockBoard = false;

cards.forEach((emoji) => {
    const createCard = document.createElement("div");
    createCard.classList.add("card");

    const p = document.createElement("p");
    p.innerHTML = emoji;

    createCard.appendChild(p);
    container.append(createCard);

    createCard.addEventListener("click", (e) => {
        const clickedCard = e.currentTarget;

        if (lockBoard || clickedCard === firstCard || clickedCard.classList.contains("matched")) {
            return; // prevent double click or clicking during comparison
        }

        clickedCard.classList.add("active");

        if (!firstCard) {
            firstCard = clickedCard;
        } else {
            secondCard = clickedCard;
            lockBoard = true;

            const emoji1 = firstCard.querySelector("p").innerHTML;
            const emoji2 = secondCard.querySelector("p").innerHTML;

            if (emoji1 === emoji2) {
                // Optional: add a "matched" class
                firstCard.classList.add("matched");
                secondCard.classList.add("matched");
                resetBoard();
            } else {
                // Hide cards again after a short delay
                setTimeout(() => {
                    firstCard.classList.remove("active");
                    secondCard.classList.remove("active");
                    resetBoard();
                }, 1000);
            }
        }
    });
});

function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}
