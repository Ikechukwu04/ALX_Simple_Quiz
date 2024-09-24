document.addEventListener('DOMContentLoaded', function() {
    // Function to check the answer
    function checkAnswer() {
        const selectedOption = document.querySelector('input[name="quiz"]:checked');
        const feedback = document.getElementById('feedback');

        if (selectedOption) {
            const answer = selectedOption.value;
            if (answer === '4') {
                feedback.textContent = 'Correct!';
                feedback.style.color = 'green';
            } else {
                feedback.textContent = 'Incorrect. Please try again.';
                feedback.style.color = 'red';
            }
        } else {
            feedback.textContent = 'Please select an answer.';
            feedback.style.color = 'orange';
        }
    }

    // Add event listener to the submit button
    const submitButton = document.getElementById('submit-answer');
    submitButton.addEventListener('click', checkAnswer);
});
