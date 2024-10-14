document.getElementById('submitButton').addEventListener('click', function() {
   
    const inputValue = document.getElementById('inputField').value;

    document.getElementById('result').innerText = `You entered: ${inputValue}`;

    document.getElementById('inputField').style.display = 'none';
    document.getElementById('submitButton').style.display = 'none';
});
