function validateSignUp() {
    const form = document.querySelector('.login-form');

    var errors = [];

    const addError = (label, input, span) => {
        label.classList.add('label-error');
        input.classList.add('input-error');
        span.classList.remove('hidden');
    }

    const removeError = (label, input, span) => {
        label.classList.remove('label-error');
        input.classList.remove('input-error');
        span.classList.add('hidden');
        span.innerText = '';
    }

    function validateInputs (inputBlured) {
        let inputGroup = inputBlured.parentElement;
        let label = inputGroup.querySelector('.form-label');
        let input = inputGroup.querySelector('.input');
        let span = inputGroup.querySelector('span');

        if(input.getAttribute('id') === 'login-email'){
            input.addEventListener('focus', () => {
                removeError(label, input, span);
                errors[0] = '';
            });

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Email is required';
                errors[0] = 'Email is required';
                return false;
            }

            var emailExpression = new RegExp('^[^@]+@[^@]+.[a-zA-Z]{2,}$');
            if(!emailExpression.test(input.value)) {
                addError(label, input, span);
                span.innerText = 'Invalid Email';
                errors[0] = 'Invalid Email';
                return false;
            }
        }

        if(input.getAttribute('id') === 'login-pass') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
                errors[1] = '';
            });

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Password is required';
                errors[1] = 'Password is required';
                return false;
            }

            var hasUppercase = false;
            for (let i = 0; i < input.value.length; i++) {
                let char = input.value.charCodeAt(i);
                if ((char >= 65 && char <= 90) && input.value) {
                    hasUppercase = true;
                }
            }
            if(!hasUppercase) {
                addError(label, input, span);
                span.innerText = 'Password must have one uppercase';
                errors[1] = 'Password must have one uppercase';
                return false;
            }

            var hasNumber = false;
            for (let i = 0; i < input.value.length; i++) {
                let char = input.value.charCodeAt(i);
                if ((char >=48 && char <= 57) && input.value) {
                    hasNumber = true;
                }
            }
            if(!hasNumber) {
                addError(label, input, span);
                span.innerText = 'Password must have a number';
                errors[1] = 'Password must have a number';
                return false;
            }

            if(input.value.length < 8 && input.value) {
                addError(label, input, span);
                span.innerText = 'Password too short';
                errors[1] = 'Password too short';
                return false;
            }
        }

        return true;
    }

    Array.from(form.elements).forEach(element => {
        element.addEventListener('blur', event => {
            validateInputs(event.target);
        })
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let message = '';
        let inputValue = '';
        let inputGroup = Array.from(form.querySelectorAll('.input'));
        for (input of inputGroup) {
           validateInputs(input);
        }

        errors.forEach(error => {
            if (error.length !== 0){
                message += error + '\n';
            }
        });

        if(message.length !== 0) {
            alert(message);
        } else {
            inputGroup.forEach(input => {
                let label = input.parentElement.querySelector('.form-label').textContent;
                inputValue += label.trim() + ': ' + input.value + '\n';
            });
            alert(inputValue);
        }
    });

}

validateSignUp();