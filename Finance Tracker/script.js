const amountEl = document.querySelector(".amount");
const descriptionInputEl = document.querySelector("#description");
const amountInputEl = document.querySelector("#amount");
const transactionTypeInputEl = document.querySelector("#transaction-type");
const transactionBtn = document.querySelector("#add-transaction");
const resultContainerEl = document.querySelector(".result-container");


let totalAmount = 0;
amountEl.innerText = `$${totalAmount}`;

transactionBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const descriptionValue = descriptionInputEl.value.trim();
    const amountValue = amountInputEl.value.trim();
    const transactionTypeValue = transactionTypeInputEl.value;

    if(descriptionValue !== "" && amountValue !== ""){

        const resultEl = document.createElement("div");
        resultEl.classList.add("result");
    
        if(transactionTypeValue === "Income"){
            resultEl.classList.add("income");

            totalAmount += parseInt(amountValue);
            amountEl.innerText = `$${totalAmount}`;
        }else{
            resultEl.classList.add("expense");

            totalAmount -= parseInt(amountValue);
            amountEl.innerText = `$${totalAmount}`;
        }
    
        const resultDescription = document.createElement("p");
        resultDescription.innerText = descriptionValue;
    
        const resultAmount = document.createElement("p");
        resultAmount.innerText = `$${amountValue}`;
    
        resultEl.append(resultDescription);
        resultEl.append(resultAmount);
        resultContainerEl.appendChild(resultEl);
    }else{
        alert("Enter a description and amount");
    }


    descriptionInputEl.value = "";
    amountInputEl.value = "";
});