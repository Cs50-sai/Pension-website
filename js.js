const validCredentials = [
    { id: 'Saidivit', password: '240406', money: '5000' },
    { id: 'JohnDoe', password: '123456', money: '10000' },
    { id: 'Max', password: '198765', money: '1000' },
    { id: 'Doe', password: '123456', money: '9000' },
    { id: 'Adam', password: 'Adam', money: '2500' },
];

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');
    const resultDiv = document.getElementById('result');
    
    submitButton.addEventListener('click', () => {
        const enteredId = document.getElementById('id').value;
        const enteredPassword = document.getElementById('password').value;
    
        const foundCredentials = validCredentials.find(credentials => 
            credentials.id === enteredId && credentials.password === enteredPassword
        );
    
        if (foundCredentials) {
            resultDiv.textContent = `Login successful! Your amount of money: $${foundCredentials.money}`;
            resultDiv.style.color = 'green';
        } else {
            resultDiv.textContent = 'Login failed. Invalid ID or password.';
            resultDiv.style.color = 'red';
        }
    
        resultDiv.classList.remove('hidden');
    });
})
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en', // Replace with your default language code
      includedLanguages: 'en,es,fr,hi,de,ta,te,ja', // List of supported languages
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE // Choose layout style
    }, 'language-selector');
}
