function validateSignUp() {
    const form = document.querySelector('.sign-up-form');

    var button = document.querySelector('.sign-up-button');
    var nameError = '';
    var surnameError = '';
    var dniError = '';
    var birthError = '';
    var phoneError = '';
    var addressError = '';
    var cityError = '';
    var postalCodeError = '';
    var emailError = '';
    var membershipError = '';
    var passwordError = '';
    var repeatPassError = '';

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
            })

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Name is required';
                nameError = 'Name is required';
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
                nameError = 'Name contains invalid characters';
                return false;
            }

            if (input.value.length <= 3 && input.value) {
                addError(label, input, span);
                span.innerText = 'Name too short';
                nameError = 'Name too short';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-surname') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
            })

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Surname is required';
                surnameError = 'Surname is required';
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
                surnameError = 'Surname contains invalid characters';
                return false;
            }

            if (input.value.length <= 3 && input.value) {
                addError(label, input, span);
                span.innerText = 'Surname too short';
                surnameError = 'Surname too short';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-dni') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
            })

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'DNI is required';
                dniError = 'DNI is required';
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
                dniError = 'DNI contains invalid characters';
                return false;
            }

            if (input.value.length < 7 || input.value.length > 8 && input.value) {
                addError(label, input, span);
                span.innerText = 'Invalid DNI';
                dniError = 'Invalid DNI';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-birth') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
            })

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Birth date is required';
                birthError = 'Birth date is required';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-phone') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
            })

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Phone is required';
                phoneError = 'Phone is required';
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
                phoneError = 'Phone contains invalid characters';
                return false;
            }

            if (input.value[0] == 0) {
                addError(label, input, span);
                span.innerText = `Phone can't start with 0`;
                phoneError = `Phone can't start with 0`;
                return false;
            }

            if (input.value.length !== 10 && input.value) {
                addError(label, input, span);
                span.innerText = 'Invalid phone';
                phoneError = 'Invalid phone';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-address') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
            })

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Address is required';
                addressError = 'Address is required';
                return false;
            }

            if(input.value) {
                if(input.value.indexOf(' ') === -1) {
                    addError(label, input, span);
                    span.innerText = 'Invalid Address';
                    addressError = 'Invalid Address';
                    return false;
                }

                var gap = input.value.lastIndexOf(' ');
                var addressStreet = input.value.substring(0,gap);
                var addressNumber = input.value.substring(gap+1);

                if (addressStreet.length < 5) {
                    addError(label, input, span);
                    span.innerText = 'Street name too short';
                    addressError = 'Street name too short';
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
                    span.innerText = 'Address number missing';
                    addressError = 'Address number missing';
                    return false;
                }

                if (addressNumber.length > 4 || addressNumber.length == 0) {
                    addError(label, input, span);
                    span.innerText = 'Invalid address number';
                    addressError = 'Invalid address number';
                    return false;
                }
            }
        }

        if(input.getAttribute('id') === 'sign-up-city') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
            })

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'City is required';
                cityError = 'City is required';
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
                cityError = 'City contains invalid characters';
                return false;
            }

            if(input.value.length <= 3 && input.value) {
                addError(label, input, span);
                span.innerText = 'City name too short';
                cityError = 'City name too short';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-code') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
            })

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Postal Code is required';
                postalCodeError = 'Postal Code is required';
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
                postalCodeError = 'Postal Code contains invalid characters';
                return false;
            }

            if(input.value.length < 4 || input.value.length > 5 && input.value) {
                addError(label, input, span);
                span.innerText = 'Invalid Postal Code';
                postalCodeError = 'Invalid Postal Code';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-email') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
            })

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Email is required';
                emailError = 'Email is required';
                return false;
            }

            var emailExpression = new RegExp('^[^@]+@[^@]+.[a-zA-Z]{2,}$');
            if(!emailExpression.test(input.value)) {
                addError(label, input, span);
                span.innerText = 'Invalid Email';
                emailError = 'Invalid Email';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-membership') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
            })

            if(input.value === 'choose-membership') {
                addError(label, input, span);
                span.innerText = 'Please select an option';
                membershipError = 'Please select an option';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-pass') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
            })

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Password is required';
                passwordError = 'Password is required';
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
                passwordError = 'Password must have one uppercase';
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
                passwordError = 'Password must have a number';
                return false;
            }

            if(input.value.length < 8 && input.value) {
                addError(label, input, span);
                span.innerText = 'Password too short';
                passwordError = 'Password too short';
                return false;
            }
        }

        if(input.getAttribute('id') === 'sign-up-repeatpass') {
            input.addEventListener('focus', () => {
                removeError(label, input, span);
            })

            if (!input.value) {
                addError(label, input, span);
                span.innerText = 'Repeat Password is required';
                repeatPassError = 'Repeat Password is required';
                return false;
            }

            let password = form.querySelector('#sign-up-pass').value;
            if (input.value !== password) {
                addError(label, input, span);
                span.innerText = `Password doesn't match`;
                repeatPassError = `Password doesn't match`;
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
        var valid = true;
        let inputGroup = Array.from(form.querySelectorAll('.input'));
        for (input of inputGroup) {
            validateInputs(input);
        }
        if(!valid) {
            alert(nameError + '\n' + surnameError + '\n' + dniError + '\n' + birthError + '\n' + phoneError + '\n' +
            addressError + '\n' + cityError + '\n' + postalCodeError + '\n' + emailError + '\n' + membershipError
            + '\n' + passwordError + '\n' + repeatPassError);
        }
    });

}

validateSignUp();