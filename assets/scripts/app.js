const formRegister = document.forms.register;
const nameInput = formRegister.elements.name;
const emailInput = formRegister.elements.email;
const ageInput = formRegister.elements.age;
const genderInput = formRegister.elements.gender;
const passwordInput = formRegister.elements.password;

// const {name, email, age, gender, password} = formRegister.elements;

formRegister.addEventListener("submit", (e)=>{
    e.preventDefaunt();
})
function vali