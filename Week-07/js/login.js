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

    function validateInputs(inputBlured) {
        let inputGroup = inputBlured.parentElement;
        let label = inputGroup.querySelector('.form-label');
        let input = inputGroup.querySelector('input');
        let span = inputGroup.querySelector('span');

        if (input.getAttribute('id') === 'login-email') {
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
            if (!emailExpression.test(input.value)) {
                addError(label, input, span);
                span.innerText = 'Invalid Email';
                errors[0] = 'Invalid Email';
                return false;
            }
        }

        if (input.getAttribute('id') === 'login-pass') {
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

            var haveInvalidChar = false;
            for (let i = 0; i < input.value.length; i++) {
                let char = input.value.charCodeAt(i);
                if (!(char >= 65 && char <= 90) && !(char >= 97 && char <= 122) && !(char >=48 && char <= 57)) {
                  haveInvalidChar = true;
                }
            }
            if (haveInvalidChar) {
                addError(label, input, span);
                span.innerText = 'Password contains invalid characters';
                errors[1] = 'Password contains invalid characters';
                return false;
            }

            var hasNumber = false;
            for (let i = 0; i < input.value.length; i++) {
                let char = input.value.charCodeAt(i);
                if ((char >= 48 && char <= 57) && input.value) {
                    hasNumber = true;
                }
            }
            if (!hasNumber) {
                addError(label, input, span);
                span.innerText = 'Password must have a number';
                errors[1] = 'Password must have a number';
                return false;
            }

            if (input.value.length < 8 && input.value) {
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
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let message = '';
        let inputValue = '';
        let inputGroup = Array.from(form.querySelectorAll('.input'));
        for (input of inputGroup) {
            validateInputs(input);
        }

        errors.forEach(error => {
            if (error.length !== 0) {
                message += error + '\n';
            }
        });

        if (message.length !== 0) {
            alert(message);
        } else {
            inputGroup.forEach(input => {
                let label = input.parentElement.querySelector('.form-label').textContent;
                inputValue += label.trim() + ': ' + input.value + '\n';
            });

            let emailValue = form.querySelector('#login-email').value;
            let passwordValue = form.querySelector('#login-pass').value;

            fetch('https://api-rest-server.vercel.app/login?email=' + emailValue + '&password=' + passwordValue)
            .then ((response) => {
                return response.json();
            })
            .then ((data) => {
                if(data.success) {
                    alert(data.msg + '\n' + inputValue);
                } else {
                    throw new Error(data.msg)
                }
            })
            .catch ((error) => {
                alert(error);
            })
        }
    });

}

validateSignUp();