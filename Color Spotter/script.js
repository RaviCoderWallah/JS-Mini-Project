const gridContainerElement = document.querySelector(".grid-container");
const scoreElement = document.querySelector(".score");
let columnCount = 3;
let resetCount = 3;

let score = 0;
scoreElement.innerHTML = score;

//generate rgba color value 
const makeRGBValue = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let finalColor = `rgba(${r}, ${g}, ${b})`;

    return finalColor;
}

//create a whole grid and makes one different cards 
const gridFun = (columnCount) => {

    let gridCardsNum = columnCount * columnCount;
    gridContainerElement.style.gridTemplateColumns = `repeat(${columnCount}, 1fr)`;

    let cardColor = makeRGBValue();
    let arrayOfCards = [];

    for (let i = 0; i < gridCardsNum; i++) {
        let createCard = document.createElement("div");
        createCard.classList.add("color-card");
        gridContainerElement.appendChild(createCard);

        createCard.style.backgroundColor = `${cardColor}`;
        arrayOfCards.push(createCard);
    }

    let randomCardIndex = Math.floor(Math.random() * gridCardsNum);
    let cardSelected = arrayOfCards[randomCardIndex];
    cardSelected.style.backgroundColor = cardColor;
    cardSelected.style.opacity = "0.75"

    //what's happen when clicked user diffrent cards 
    arrayOfCards.forEach((card) => {
        card.addEventListener("click", (e) => {
            if (e.target === cardSelected) {
                gridContainerElement.innerHTML = " ";
                columnCount++;
                score++;
                scoreElement.innerHTML = score;
                gridFun(columnCount);
            } else {
                gridContainerElement.innerHTML = " ";
                if (score > 0) {
                    score--;
                    scoreElement.innerHTML = score;
                }
                gridFun(resetCount);
            }
        });
    });

}


gridFun(columnCount);