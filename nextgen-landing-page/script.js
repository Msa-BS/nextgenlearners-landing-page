console.log("Script loaded");

// ================= HAMBURGER MENU =================

const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}

// ================= APPLICATION FORM =================

const form = document.getElementById("applicationForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isDomainValid = validateDomain();
    const isUniversityValid = validateUniversity();
    const isStatementValid = validateStatement();

    const isFormValid =
        isNameValid &&
        isEmailValid &&
        isPhoneValid &&
        isDomainValid &&
        isUniversityValid &&
        isStatementValid;

    if (!isFormValid) return;

    const submission = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        domain: document.getElementById("domain").value,
        university: document.getElementById("university").value.trim(),
        statement: document.getElementById("statement").value.trim()
    };

    const thankYou = document.getElementById("thankYouMessage");

    let submissions =
        JSON.parse(localStorage.getItem("submissions")) || [];

    // Check if email already exists
    const existingIndex = submissions.findIndex(function (item) {
        return item.email.toLowerCase() === submission.email.toLowerCase();
    });

    if (existingIndex !== -1) {

        submissions[existingIndex] = submission;

        thankYou.textContent =
            `Your application has been updated successfully, ${submission.name}!`;

    } else {

        submissions.push(submission);

        thankYou.textContent =
            `Thank you, ${submission.name}! Your application for ${submission.domain} has been received.`;

    }

    localStorage.setItem("submissions", JSON.stringify(submissions));

    thankYou.classList.remove("hidden");
    setTimeout(function () {

    thankYou.classList.add("hidden");

}, 5000);

    thankYou.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    form.reset();
    document.querySelectorAll(".invalid").forEach(function (field) {
    field.classList.remove("invalid");
});

document.querySelectorAll(".error-message").forEach(function (error) {
    error.classList.remove("show");
});

    renderSubmissions();

});

// ================= VALIDATION =================

function validateName() {

    const input = document.getElementById("name");
    const error = document.getElementById("nameError");

    if (input.value.trim() === "") {
        error.textContent = "Name is required.";
        error.classList.add("show");
        input.classList.add("invalid");
        return false;
    }

    error.classList.remove("show");
    input.classList.remove("invalid");
    return true;
}

function validateEmail() {

    const input = document.getElementById("email");
    const error = document.getElementById("emailError");

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(input.value.trim())) {
        error.textContent = "Please enter a valid email.";
        error.classList.add("show");
        input.classList.add("invalid");
        return false;
    }

    error.classList.remove("show");
    input.classList.remove("invalid");
    return true;
}

function validatePhone() {

    const input = document.getElementById("phone");
    const error = document.getElementById("phoneError");

    const pattern = /^\+?[0-9]{10,13}$/;

    if (!pattern.test(input.value.trim())) {
        error.textContent = "Please enter a valid phone number.";
        error.classList.add("show");
        input.classList.add("invalid");
        return false;
    }

    error.classList.remove("show");
    input.classList.remove("invalid");
    return true;
}

function validateDomain() {

    const input = document.getElementById("domain");
    const error = document.getElementById("domainError");

    if (input.value === "") {
        error.textContent = "Please select a domain.";
        error.classList.add("show");
        input.classList.add("invalid");
        return false;
    }

    error.classList.remove("show");
    input.classList.remove("invalid");
    return true;
}

function validateUniversity() {

    const input = document.getElementById("university");
    const error = document.getElementById("universityError");

    if (input.value.trim() === "") {
        error.textContent = "University is required.";
        error.classList.add("show");
        input.classList.add("invalid");
        return false;
    }

    error.classList.remove("show");
    input.classList.remove("invalid");
    return true;
}

function validateStatement() {

    const input = document.getElementById("statement");
    const error = document.getElementById("statementError");

    if (input.value.trim().length < 10) {
        error.textContent = "Statement must be at least 10 characters.";
        error.classList.add("show");
        input.classList.add("invalid");
        return false;
    }

    error.classList.remove("show");
    input.classList.remove("invalid");
    return true;
}

// ================= RENDER SUBMISSIONS =================

function renderSubmissions() {

    const list = document.getElementById("submissionsList");

    const submissions =
        JSON.parse(localStorage.getItem("submissions")) || [];

    list.innerHTML = "";
    if (submissions.length === 0) {

    list.innerHTML = "<li>No applications submitted yet.</li>";

    return;
}

    submissions.forEach(function (sub) {

        const li = document.createElement("li");

       li.innerHTML = `
<strong>${sub.name}</strong><br>
${sub.email}<br>
${sub.phone}<br>
${sub.domain}<br>
${sub.university}
`;

        list.appendChild(li);

    });

}

renderSubmissions();
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);
document.getElementById("domain").addEventListener("blur", validateDomain);
document.getElementById("university").addEventListener("blur", validateUniversity);
document.getElementById("statement").addEventListener("blur", validateStatement);