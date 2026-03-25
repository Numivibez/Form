// Form validation script
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const inputs = form.querySelectorAll('input[required]');
    
    // Real-time validation
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearError);
    });
    
    // Password confirmation
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    password.addEventListener('input', checkPasswordMatch);
    confirmPassword.addEventListener('input', checkPasswordMatch);
    
    form.addEventListener('submit', handleSubmit);
    
    function validateField(e) {
        const field = e.target;
        const fieldGroup = field.closest('.input-group');
        clearError(field);
        
        let isValid = true;
        let errorMsg = '';
        
        switch(field.id) {
            case 'email':
                const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    errorMsg = 'Please enter a valid email address';
                    isValid = false;
                }
                break;
            case 'phone':
                const phoneRegex = /^[+]?[\\d\\s-]{10,15}[\\d]$/;
                if (!phoneRegex.test(field.value.replace(/\\D/g, '')) || field.value.replace(/\\D/g, '').length < 10) {
                    errorMsg = 'Please enter a valid phone number (10+ digits)';
                    isValid = false;
                }
                break;
            case 'password':
                if (field.value.length < 8) {
                    errorMsg = 'Password must be at least 8 characters';
                    isValid = false;
                }
                break;
            case 'fname':
            case 'lname':
                if (field.value.length < 2) {
                    errorMsg = 'Name must be at least 2 characters';
                    isValid = false;
                }
                break;
        }
        
        if (!isValid) {
            showError(fieldGroup, errorMsg);
        }
    }
    
    function checkPasswordMatch() {
        const fieldGroup = confirmPassword.closest('.input-group');
        clearError(confirmPassword);
        
        if (confirmPassword.value && confirmPassword.value !== password.value) {
            showError(fieldGroup, 'Passwords do not match');
        }
    }
    
    function showError(container, message) {
        let error = container.querySelector('.error-message');
        if (!error) {
            error = document.createElement('div');
            error.className = 'error-message';
            error.style.cssText = 'color: #e74c3c; font-size: 14px; margin-top: 5px;';
            container.appendChild(error);
        }
        error.textContent = message;
        container.classList.add('error');
    }
    
    function clearError(field) {
        const fieldGroup = field.closest('.input-group');
        const error = fieldGroup.querySelector('.error-message');
        if (error) error.remove();
        fieldGroup.classList.remove('error');
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        
        let isFormValid = true;
        inputs.forEach(input => {
            validateField({ target: input });
            if (input.closest('.input-group').querySelector('.error-message')) {
                isFormValid = false;
            }
        });
        checkPasswordMatch();
        
        if (confirmPassword.value && confirmPassword.value !== password.value) {
            isFormValid = false;
        }
        
        if (isFormValid) {
            const formData = new FormData(form);
            console.log('Form submitted:', Object.fromEntries(formData));
            alert('Sign up successful! Check console for data.');
            form.reset();
        } else {
            alert('Please fix errors before submitting.');
        }
    }
});
