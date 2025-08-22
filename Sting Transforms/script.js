const input = document.querySelector("#input");
const lowercase = document.querySelector("#lowercase");
const camelcase = document.querySelector("#camelcase");
const uppercase = document.querySelector("#uppercase");
const pascalcase = document.querySelector("#pascalcase");
const snakecase = document.querySelector("#snakecase");
const kebabcase = document.querySelector("#kebabcase");
const trim = document.querySelector("#trim");


input.addEventListener("input", () => {
 const inputValue = input.value.trim();

 //lowercase
 const transformLowerCase = inputValue.toLowerCase();
 lowercase.innerHTML = transformLowerCase;

 //uppercase
 const transformUpperCase = inputValue.toUpperCase();
 uppercase.innerHTML = transformUpperCase;

 //camelcase
 function toCamelCase(sentence) {
    return sentence
      .toLowerCase()
      .split(' ')
      .map((word, index) => {
        if (index === 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('');
  }
  
   camelcase.innerHTML = toCamelCase(inputValue);;
  

 //pascalcase 
 function toPascalCase(sentence){
    return sentence.toLowerCase().split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join("");
 }

 pascalcase.innerHTML = toPascalCase(inputValue);

 //snake case 
 function toSnakeCase(sentence){
   return sentence.toLowerCase().split(" ").join("_");
 }

 snakecase.innerHTML = toSnakeCase(inputValue);

 //kebab case 
 function toKababCase(sentence){
    return sentence.toLowerCase().split(' ').join("-");
 }

 kebabcase.innerHTML = toKababCase(inputValue);

 //trim
 function toTrim(sentence){
    return sentence.trim().split(" ").join("");
 }

 trim.innerHTML = toTrim(inputValue);
 
});