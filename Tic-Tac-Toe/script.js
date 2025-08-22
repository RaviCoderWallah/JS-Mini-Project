const containerEl = document.querySelector(".container");
const resetBtn = document.querySelector("#reset-btn");


let winCase = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];


let click = true;
let userCardClick = [];

containerEl.addEventListener("click", (e) => {
    if(e.target.id !== "container"){
        if(click){
            e.target.innerHTML = "X"
            click = false;
            
            if(userCardClick.length < 3){
                userCardClick.push(parseInt(e.target.id));
            }

        }else{
            e.target.innerHTML = "O"
            click = true;
            if(userCardClick.length < 3){
                userCardClick.push(parseInt(e.target.id));
            }
        }
    }
});

resetBtn.addEventListener("click", () => {
    location.reload();
})
 
