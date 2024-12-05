const formRegister = document.forms.register;
const nameInput = formRegister.elements.name;
const emailInput = formRegister.elements.email;
const ageInput = formRegister.elements.age;
const genderInput = formRegister.elements.gender;
const passwordInput = formRegister.elements.password;

// const {name, email, age, gender, password, btn} = formRegister.elements;

formRegister.addEventListener("submit", (e)=>{
    e.preventDefaunt();
    validateName(input);
})
function validateName(input) {
    const correctInputValue = input.value.trim();
    const namePattern = /^[A-Za-zА-Яа-яЁёs]+$/;
    if (correctInputValue.lenth < 2 ) {
        openElementError (input, "Имя не может состоять из одного символа");
        return;
    }
    if (correctInputValue.lenth > 20 ) {
        openElementError (input, "Имя не может состоять из более чем 20 символов");
        return;
    }
    if (namePattern.test(correctInputValue) === false) {
        openElementError (input, "Имя может состоять только из букв и пробелов");
        return;
    }
    closeElementError(input);
}

function openElementError(input, message) {
    const parentElement = input.parentElement;
    const errorElement = parentElement.querySelector('.err');
    errorElement.textContent = message;
    errorElement.classList.remove('none');
}
