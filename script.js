// Holographic Interaction
document.querySelectorAll('.tech-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.transform = `perspective(1000px) rotateX(${(y - rect.height/2)/10}deg) rotateY(${-(x - rect.width/2)/10}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Advanced Form Validation
const techForm = document.getElementById('techForm');
const jsonInput = document.getElementById('techProject');

function validateJSON(input) {
    try {
        JSON.parse(input);
        return true;
    } catch {
        return false;
    }
}

techForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitButton = techForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    let isValid = true;

    // Enterprise Email Validation
    if (!/^.+@enterprise\.com$/.test(techEmail.value)) {
        document.getElementById('emailError').textContent = 'Enterprise email required';
        isValid = false;
    }

    // JSON Validation
    if (!validateJSON(jsonInput.value)) {
        document.getElementById('jsonError').textContent = 'Invalid JSON format';
        isValid = false;
    }

    if (isValid) {
        // Simulate API call
        setTimeout(() => {
            aiResponse.innerHTML = '<div class="ai-message">PROCESSING BLUEPRINT... INNOVATION DEPLOYED!</div>';
            techForm.reset();
            submitButton.disabled = false;
            submitButton.textContent = 'Submit';
        }, 2000);
    } else {
        submitButton.disabled = false;
        submitButton.textContent = 'Submit';
    }
});

// Real-time validation for the contact form
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Helper function to show or hide error messages
function validateInput(input, errorElement, isValid, message) {
    if (isValid) {
        errorElement.style.display = 'none';
    } else {
        errorElement.style.display = 'block';
        errorElement.textContent = message;
    }
}

// Real-time validation for name
nameInput.addEventListener('input', () => {
    const isValid = nameInput.value.trim() !== '';
    validateInput(nameInput, nameError, isValid, 'Name is required.');
});

// Real-time validation for email
emailInput.addEventListener('input', () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    validateInput(emailInput, emailError, isValid, 'Please enter a valid email address.');
});

// Real-time validation for password
passwordInput.addEventListener('input', () => {
    const isValid = passwordInput.value.length >= 8;
    validateInput(passwordInput, passwordError, isValid, 'Password must be at least 8 characters long.');
});

// Add a confirmation message after successful form submission
const confirmationMessage = document.createElement('p');
confirmationMessage.id = 'confirmationMessage';
confirmationMessage.style.color = 'green';
confirmationMessage.style.display = 'none';
confirmationMessage.textContent = 'Your message has been sent successfully!';
contactForm.appendChild(confirmationMessage);

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    const isNameValid = nameInput.value.trim() !== '';
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    const isPasswordValid = passwordInput.value.length >= 8;

    validateInput(nameInput, nameError, isNameValid, 'Name is required.');
    validateInput(emailInput, emailError, isEmailValid, 'Please enter a valid email address.');
    validateInput(passwordInput, passwordError, isPasswordValid, 'Password must be at least 8 characters long.');

    if (isNameValid && isEmailValid && isPasswordValid) {
        setTimeout(() => {
            confirmationMessage.style.display = 'block'; // Show confirmation message
            contactForm.reset();
            submitButton.disabled = false;
            submitButton.textContent = 'Submit';
        }, 2000);
    } else {
        submitButton.disabled = false;
        submitButton.textContent = 'Submit';
    }
});