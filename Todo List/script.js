const todoListContainerElement = document.querySelector(".todo-list-container");
const addBtn = document.querySelector("#add-btn");
const inputField = document.querySelector("#goal-input");


todoListContainerElement.innerHTML = localStorage.getItem("goal");

//delete functionality 
todoListContainerElement.addEventListener("click", (e) => {
    if(e.target && e.target.id == "delete-btn"){
        e.target.parentElement.parentElement.remove();
        saveData();
    }
});


//create a goal item, after clicking on add btn 
const createGoal = (goal) => {

    let goalElement = document.createElement("div");
    goalElement.classList.add("goal");

    let p = document.createElement("p");
    p.innerText = goal;

    let iconsElement = document.createElement("div");
    iconsElement.classList.add("icons");
    iconsElement.innerHTML = `<ion-icon name="trash" id="delete-btn"></ion-icon>`;

    goalElement.insertAdjacentElement("afterbegin", p);
    goalElement.insertAdjacentElement("beforeend", iconsElement);
    todoListContainerElement.appendChild(goalElement);

    saveData();
}

//what's happern when click on Add Button
addBtn.addEventListener("click", () => {
    let userGoal = inputField.value.trim();
    if (userGoal !== "") {
        createGoal(userGoal);
        saveData();
    } else {
        alert("First, Enter Your Goal.");
    }
    inputField.value = "";
});

function saveData() {
    localStorage.setItem("goal", todoListContainerElement.innerHTML);
}

saveData();
