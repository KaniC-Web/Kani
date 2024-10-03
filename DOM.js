document.getElementById('submitButton').addEventListener('click', function() {
    // Get the input field value
    const inputValue = document.getElementById('inputField').value;

    // Update the result div with the input value
    document.getElementById('result').innerText = `You entered: ${inputValue}`;

    // Hide the input field and button
    document.getElementById('inputField').style.display = 'none';
    document.getElementById('submitButton').style.display = 'none';
});
