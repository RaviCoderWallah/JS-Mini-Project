const inputField = document.querySelector("#input-field");

const createChips = (value) => {
    const chipsContainer = document.querySelector(".chips-container");

    //create chip element 
    let createChipEl = document.createElement("div");
    createChipEl.classList.add("chips");
    
    let chipPara = document.createElement("p");
    chipPara.innerText = value;

    let removeChips = document.createElement("p");
    removeChips.classList.add("close");
    removeChips.innerHTML = `X`;

    removeChips.addEventListener("click", () => {
        createChipEl.remove();
    })

    //append childs 
    createChipEl.append(chipPara);
    createChipEl.append(removeChips);
    chipsContainer.appendChild(createChipEl);

}

inputField.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        let inputValue = inputField.value.trim();

        if(inputValue !== ""){
            createChips(inputValue);
        }else{
            alert("Enter chips!!")
        }

        inputField.value = "";
    }
});
