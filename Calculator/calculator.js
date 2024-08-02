document.addEventListener('DOMContentLoaded', function() {
    // Get references to the input fields and result span
    const number1 = document.getElementById('number1');
    const number2 = document.getElementById('number2');
    const calculationResult = document.getElementById('calculation-result');

    // Functions for arithmetic operations
    function add() {
        const result = parseFloat(number1.value) + parseFloat(number2.value);
        calculationResult.textContent = result;
    }

    function subtract() {
        const result = parseFloat(number1.value) - parseFloat(number2.value);
        calculationResult.textContent = result;
    }

    function multiply() {
        const result = parseFloat(number1.value) * parseFloat(number2.value);
        calculationResult.textContent = result;
    }

    function divide() {
        if (parseFloat(number2.value) === 0) {
            calculationResult.textContent = 'Error: Division by zero';
        } else {
            const result = parseFloat(number1.value) / parseFloat(number2.value);
            calculationResult.textContent = result;
        }
    }

    // Attach event listeners to buttons
    document.getElementById('add').addEventListener('click', add);
    document.getElementById('subtract').addEventListener('click', subtract);
    document.getElementById('multiply').addEventListener('click', multiply);
    document.getElementById('divide').addEventListener('click', divide);
});
