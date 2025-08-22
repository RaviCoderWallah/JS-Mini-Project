const inputField = document.querySelector("#input-field");
const colorMeBtn = document.querySelector("#color-me-btn");
let gridCard = document.querySelectorAll(".grid-card");

colorMeBtn.addEventListener("click", () => {
    gridCard.forEach((card) => {
        card.classList.remove("active");
    });
    
    let userNumber = inputField.value.trim();
    if(userNumber <= 9 && userNumber > 0 ){
        let seletedCard = gridCard[userNumber - 1];
        seletedCard.classList.add("active");
    }else{
        alert("Number Must be 0 to 10")
    }
    inputField.value = "";
});