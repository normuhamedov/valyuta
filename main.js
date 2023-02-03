let elForm = document.querySelector(".form");
let elInputName = document.querySelector(".username");
let elResult = document.querySelector(".result");
let elCurency = document.querySelector(".curency");


let elForm2 = document.querySelector(".form2");
let elInputName2 = document.querySelector(".username2");
let elResult2 = document.querySelector(".result2");
let elCurency2 = document.querySelector(".curency2");

elResult.textContent = elCurency.value


elForm.addEventListener("input", function() {
    

    let inputName = elInputName.value
    
    elResult.textContent = inputName * elCurency.value
})



elResult2.textContent = "UZS . . . . . . . . . to. . . . . ."

elForm2.addEventListener("input", function() {
    

    let inputName2 = elInputName2.value

    elResult2.textContent =(inputName2 / elCurency2.value).toFixed(2)
})

