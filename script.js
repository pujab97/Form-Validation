document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registrationForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordMismatchFeedback = document.querySelector('.password-mismatch-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
        } else {
            if (password.value !== confirmPassword.value) {
                passwordMismatchFeedback.style.display = 'block';
                confirmPassword.setCustomValidity('Passwords do not match');
                form.classList.add('was-validated');
            } else {
                passwordMismatchFeedback.style.display = 'none';
                confirmPassword.setCustomValidity('');
                alert('Form submitted successfully!');
                form.reset();
                form.classList.remove('was-validated');
            }
        }
    }, false);

    confirmPassword.addEventListener('input', function() {
        if (password.value !== confirmPassword.value) {
            passwordMismatchFeedback.style.display = 'block';
            confirmPassword.setCustomValidity('Passwords do not match');
        } else {
            passwordMismatchFeedback.style.display = 'none';
            confirmPassword.setCustomValidity('');
        }
    });
});
