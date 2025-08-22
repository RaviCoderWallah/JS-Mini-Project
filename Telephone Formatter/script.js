const inputEl = document.querySelector("#input");

let previousValue = "";
let firstThreeValue = "";

inputEl.addEventListener("input", (event) => {
  let inputValue = event.target.value.replace(/[^\d]/g, "");
  firstThreeValue = inputValue.substring(0, 3);
  if(inputValue.length === 4 && previousValue.length < inputValue.length){
    let formatValue = `+(${firstThreeValue}) - `
    inputEl.value = formatValue;
  }else if(inputValue.length === 3 && previousValue.length > inputValue.length){
    inputEl.value = firstThreeValue;
  }
  previousValue = inputValue;
});

