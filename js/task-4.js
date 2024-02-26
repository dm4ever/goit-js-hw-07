const form = document.querySelector(".login-form");
const inputEmail = document.querySelector(".login-form input[type='email']");
const inputPassword = document.querySelector(".login-form input[type='password']");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    if (inputEmail.value.trim() === "" || inputPassword.value.trim() === "") {
        alert('All form fields must be filled in');
    } else{
        const elements = event.currentTarget.elements;

    const info = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim(),
    }
    console.log(info);
    }
   
    event.currentTarget.reset(); 
}