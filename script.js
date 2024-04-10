let firstNumber = document.querySelector("#first-number");
let secondNumber = document.querySelector("#second-number");
let total = document.querySelector("#total");
let btnCalculate = document.querySelector("#calculate");
let operation = document.querySelectorAll('input[name="operation"]');

btnCalculate.addEventListener("click", function(){
    let fn = parseFloat(firstNumber.value);
    let sn = parseFloat(secondNumber.value);
    let result;

    // Determine the selected operation
    operation.forEach(function(op) {
        if (op.checked) {
            switch (op.value) {
                case "addition":
                    result = fn + sn;
                    break;
                case "subtraction":
                    result = fn - sn;
                    break;
                case "multiplication":
                    result = fn * sn;
                    break;
                case "division":
                    if (sn !== 0) {
                        result = fn / sn;
                    } else {
                        result = "Cannot divide by zero";
                    }
                    break;
            }
        }
    });

    total.value = result;
});