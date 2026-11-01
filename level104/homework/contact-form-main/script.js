const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstNameValue = e.target["first-name"].value;
    const lastNameValue = e.target["last-name"].value;
    const emailValue = e.target.email.value;
    const queryValue = e.target.query.value;
    const messageValue = e.target.message.value;
    const consentChecked = e.target.consent.checked;

    if (firstNameValue === "") {
        const firstNameError = document.getElementById("firstNameError");
        firstNameError.textContent = "This field is required";
        e.target["first-name"].style.borderColor = "red";
        return;
    } else {
        const firstNameError = document.getElementById("firstNameError");
        e.target["first-name"].style.borderColor = "#ccc";
        firstNameError.textContent = "";
    }

    if (lastNameValue === "") {
        const lastNameError = document.getElementById("lastNameError");
        lastNameError.textContent = "This field is required";
        e.target["last-name"].style.borderColor = "red";
        return;
    } else {
        const lastNameError = document.getElementById("lastNameError");
        e.target["last-name"].style.borderColor = "#ccc";
        lastNameError.textContent = "";
    }

    if (emailValue === "" || !emailValue.includes("@")) {
        const emailError = document.getElementById("emailError");
        emailError.textContent = "please enter a valid email address";
        e.target.email.style.borderColor = "red";
        return;
    } else {
        const emailError = document.getElementById("emailError");
        e.target.email.style.borderColor = "#ccc";
        emailError.textContent = "";
    }

    if (queryValue === "") {
        const queryError = document.getElementById("queryError");
        queryError.textContent = "please select a query type";
        return;
    } else {
        const queryError = document.getElementById("queryError");
        queryError.textContent = "";
    }

    if (messageValue === "") {
        const messageError = document.getElementById("messageError");
        messageError.textContent = "this field is required";
        e.target.message.style.borderColor = "red";
        return;
    } else {
        const messageError = document.getElementById("messageError");
        e.target.message.style.borderColor = "#ccc";
        messageError.textContent = "";
    }

    if (!consentChecked) {
        const consentError = document.getElementById("consentError");
        consentError.textContent = "To submit this form, please consent to being contacted";
        return;
    } else {
        const consentError = document.getElementById("consentError");
        consentError.textContent = "";
    }

    const toast = document.getElementById("toast");
    toast.classList.add("show");

    myForm.reset();

    setTimeout(() => {
        toast.classList.remove("show");
    }, 4000);
});