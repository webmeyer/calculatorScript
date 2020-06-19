 var calculate = function (firstNumber, secondNumber, operator) {
   var result;
    if (operator === '+') {
    result = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
    } else if (operator === '-') {
       result = parseInt(firstNumber, 10) - parseInt(secondNumber, 10);
       } else if (operator === '*') {
        result = parseInt(firstNumber, 10) * parseInt(secondNumber, 10);
        } else if (operator === '/') {
           result = parseInt(firstNumber, 10) / parseInt(secondNumber, 10);
           }
     return result;
   }
