function validateSignUp() {
    const form = document.querySelector('.sign-up-form');

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

        if(input.getAttribute('id') === 'sign-up-name'){
            input.addEventListener('focus', () => {
                removeError(label, input, span);
                errors[0] = '';
            });

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Name is required';
                errors[0] = 'Name is required';
                return false;
            }

            var haveNumbers = false;
            for (let i = 0; i < input.value.length; i++) {
                let char = input.value.charCodeAt(i);
                if (!(char >= 65 && char <= 90) && !(char >= 97 && char <= 122)) {
                  haveNumbers = true;
                }
            }
            if (haveNumbers) {
                addError(label, input, span);
                span.innerText = 'Name contains invalid characters';
                errors[0] = 'Name contains invalid characters';
                return false;
            }

            if (input.value.length <= 3 && input.value) {
                addError(label, input, span);
                span.innerText = 'Name too short';
                errors[0] = 'Name too short';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-surname') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
                errors[1] = '';
            });

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Surname is required';
                errors[1] = 'Surname is required';
                return false;
            }

            var haveNumbers = false;
            for (let i = 0; i < input.value.length; i++) {
                let char = input.value.charCodeAt(i);
                if (!(char >= 65 && char <= 90) && !(char >= 97 && char <= 122)) {
                haveNumbers = true;
                }
            }
            if (haveNumbers) {
                addError(label, input, span);
                span.innerText = 'Surname contains invalid characters';
                errors[1] = 'Surname contains invalid characters';
                return false;
            }

            if (input.value.length <= 3 && input.value) {
                addError(label, input, span);
                span.innerText = 'Surname too short';
                errors[1] = 'Surname too short';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-dni') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
                errors[2] = '';
            });

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'DNI is required';
                errors[2] = 'DNI is required';
                return false;
            }

            var haveLetters = false;
            for (var i = 0; i < input.value.length; i++) {
                if (isNaN(parseInt(input.value[i]))) {
                haveLetters = true;
                }
            }
            if (haveLetters) {
                addError(label, input, span);
                span.innerText = 'DNI contains invalid characters';
                errors[2] = 'DNI contains invalid characters';
                return false;
            }

            if (input.value.length < 7 || input.value.length > 8 && input.value) {
                addError(label, input, span);
                span.innerText = 'Invalid DNI';
                errors[2] = 'Invalid DNI';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-birth') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
                errors[3] = '';
            });

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Birth date is required';
                errors[3] = 'Birth date is required';
                return false;
            }
            let date = input.value;
            let dateSplit = date.split('-');

            if ((parseInt(dateSplit[0]) < 1950) || (parseInt(dateSplit[0]) > 2005)) {
                addError(label, input, span);
                span.innerText = 'Invalid year';
                errors[3] = 'Invalid year';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-phone') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
                errors[4] = '';
            });

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Phone is required';
                errors[4] = 'Phone is required';
                return false;
            }

            var haveLetters = false;
            for (var i = 0; i < input.value.length; i++) {
                if (isNaN(parseInt(input.value[i]))) {
                  haveLetters = true;
                }
            }
            if (haveLetters) {
                addError(label, input, span);
                span.innerText = 'Phone contains invalid characters';
                errors[4] = 'Phone contains invalid characters';
                return false;
            }

            if (input.value[0] == 0) {
                addError(label, input, span);
                span.innerText = `Phone can't start with 0`;
                errors[4] = `Phone can't start with 0`;
                return false;
            }

            if (input.value.length !== 10 && input.value) {
                addError(label, input, span);
                span.innerText = 'Invalid phone';
                errors[4] = 'Invalid phone';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-address') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
                errors[5] = '';
            });

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Address is required';
                errors[5] = 'Address is required';
                return false;
            }

            if(input.value) {
                if(input.value.indexOf(' ') === -1) {
                    addError(label, input, span);
                    span.innerText = 'Invalid Address';
                    errors[5] = 'Invalid Address';
                    return false;
                }

                var gap = input.value.lastIndexOf(' ');
                var addressStreet = input.value.substring(0,gap);
                var addressNumber = input.value.substring(gap+1);

                if (addressStreet.length < 5) {
                    addError(label, input, span);
                    span.innerText = 'Street name too short';
                    errors[5] = 'Street name too short';
                    return false;
                }

                var haveLetters = false;
                for (var i = 0; i < addressNumber.length; i++) {
                    if (isNaN(parseInt(addressNumber[i]))) {
                      haveLetters = true;
                    }
                  }
                if (haveLetters) {
                    addError(label, input, span);
                    span.innerText = 'Invalid address number';
                    errors[5] = 'Invalid address number';
                    return false;
                }

                if (addressNumber.length > 4 || addressNumber.length == 0) {
                    addError(label, input, span);
                    span.innerText = 'Invalid address number';
                    errors[5] = 'Invalid address number';
                    return false;
                }

                var haveInvalidChar = false;
                for (let i = 0; i < input.value.length; i++) {
                    let char = input.value.charCodeAt(i);
                    if (!(char >= 65 && char <= 90) && !(char >= 97 && char <= 122) && !(char >=48 && char <= 57) && !(char == 32)) {
                      haveInvalidChar = true;
                    }
                }
                if (haveInvalidChar) {
                    addError(label, input, span);
                    span.innerText = 'Address contains invalid characters';
                    errors[5] = 'Address contains invalid characters';
                    return false;
                }
            }
        }

        if(input.getAttribute('id') === 'sign-up-city') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
                errors[6] = '';
            });

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'City is required';
                errors[6] = 'City is required';
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
                span.innerText = 'City contains invalid characters';
                errors[6] = 'City contains invalid characters';
                return false;
            }

            if(input.value.length <= 3 && input.value) {
                addError(label, input, span);
                span.innerText = 'City name too short';
                errors[6] = 'City name too short';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-code') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
                errors[7] = '';
            });

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Postal Code is required';
                errors[7] = 'Postal Code is required';
                return false;
            }

            var haveLetters = false;
            for (var i = 0; i < input.value.length; i++) {
                if (isNaN(parseInt(input.value[i]))) {
                  haveLetters = true;
                }
              }
            if (haveLetters) {
                addError(label, input, span);
                span.innerText = 'Postal Code contains invalid characters';
                errors[7] = 'Postal Code contains invalid characters';
                return false;
            }

            if(input.value.length < 4 || input.value.length > 5 && input.value) {
                addError(label, input, span);
                span.innerText = 'Invalid Postal Code';
                errors[7] = 'Invalid Postal Code';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-email') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
                errors[8] = '';
            });

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Email is required';
                errors[8] = 'Email is required';
                return false;
            }

            var emailExpression = new RegExp('^[^@]+@[^@]+.[a-zA-Z]{2,}$');
            if(!emailExpression.test(input.value)) {
                addError(label, input, span);
                span.innerText = 'Invalid Email';
                errors[8] = 'Invalid Email';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-membership') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
                errors[9] = '';
            });

            if(input.value === 'choose-membership') {
                addError(label, input, span);
                span.innerText = 'Please select an option';
                errors[9] = 'Please select an option';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-pass') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
                errors[10] = '';
            });

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Password is required';
                errors[10] = 'Password is required';
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
                if ((char >=48 && char <= 57) && input.value) {
                    hasNumber = true;
                }
            }
            if(!hasNumber) {
                addError(label, input, span);
                span.innerText = 'Password must have a number';
                errors[10] = 'Password must have a number';
                return false;
            }

            if(input.value.length < 8 && input.value) {
                addError(label, input, span);
                span.innerText = 'Password too short';
                errors[10] = 'Password too short';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-repeatpass') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
                errors[11] = '';
            });

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Repeat Password is required';
                errors[11] = 'Repeat Password is required';
                return false;
            }

            let password = form.querySelector('#sign-up-pass').value;
            if (input.value !== password) {
                addError(label, input, span);
                span.innerText = `Password doesn't match`;
                errors[11] = `Password doesn't match`;
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
            if (error.length !== 0){
                message += error + '\n';
            }
        });

        if(message.length !== 0) {
            alert(message);
        } else {
            inputGroup.forEach(input => {
                let label = input.parentElement.querySelector('.form-label').textContent;
                if (input.getAttribute('id') === 'sign-up-birth') {
                    let date = input.value;
                    let dateSplit = date.split('-');
                    let dateFormat = dateSplit[2] + '/' + dateSplit[1] + '/' + dateSplit[0];
                    inputValue += label.trim() + ': ' + dateFormat + '\n';
                } else {
                    inputValue += label.trim() + ': ' + input.value + '\n';
                }
            });
        }
    });
}

validateSignUp();