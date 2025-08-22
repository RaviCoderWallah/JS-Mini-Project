const leftListElement = document.querySelector(".left");
const rightListElement = document.querySelector(".right");

//all btns access
const transferAllLeftBtn = document.querySelector(".transfer-all-left");
const transferAllRightBtn = document.querySelector(".transfer-all-right");
const transferLeftBtn = document.querySelector(".transfer-left");
const transferRightBtn = document.querySelector(".transfer-right");

//when click left all btns 
let leftListItems = Array.from(leftListElement.children);
transferAllRightBtn.addEventListener("click", () => {
    leftListItems.forEach((items) => {
        rightListElement.append(items);
    }); 
});

//when click right all btns 
let rightListItems = Array.from(rightListElement.children);
transferAllLeftBtn.addEventListener("click", () => {
    rightListItems.forEach((items) => {
        leftListElement.append(items);
    }); 
});

leftListItems.forEach((list) => {
    list.addEventListener("click", () => {
        if(list.children[0].checked){
            transferRightBtn.addEventListener("click", () => {
                rightListElement.append(list);
            });
        }
    })
})

rightListItems.forEach((list) => {
    list.addEventListener("click", () => {
        if(list.children[0].checked){
            transferLeftBtn.addEventListener("click", () => {
                leftListElement.append(list);
            });
        }
    })
})