
const form = document.querySelector('.sign-up-form');

let errors = [];

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

const validateInputs = (inputBlured) => {
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

        let haveNumbers = false;
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

        let haveNumbers = false;
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

        let haveLetters = false;
        for (let i = 0; i < input.value.length; i++) {
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

        if (new Date(input.value) >= new Date()) {
            addError(label, input, span);
            span.innerText = 'Date of birth must be before today';
            errors[3] = 'Date of birth must be before today';
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

        let haveLetters = false;
        for (let i = 0; i < input.value.length; i++) {
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

            let gap = input.value.lastIndexOf(' ');
            let addressStreet = input.value.substring(0,gap);
            let addressNumber = input.value.substring(gap+1);

            if (addressStreet.length < 4) {
                addError(label, input, span);
                span.innerText = 'Street name too short';
                errors[5] = 'Street name too short';
                return false;
            }

            let haveLetters = false;
            for (let i = 0; i < addressNumber.length; i++) {
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

            if (addressNumber.length == 0) {
                addError(label, input, span);
                span.innerText = 'Invalid address number';
                errors[5] = 'Invalid address number';
                return false;
            }

            let haveInvalidChar = false;
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

        let haveInvalidChar = false;
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

        let haveLetters = false;
        for (let i = 0; i < input.value.length; i++) {
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

        let emailExpression = new RegExp('^[^@]+@[^@]+.[a-zA-Z]{2,}$');
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

        let haveInvalidChar = false;
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

        let hasNumber = false;
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
    let inputGroup = Array.from(form.querySelectorAll('.input'));
    for (input of inputGroup) {
        validateInputs(input);
    }

    let nameValue = form.querySelector('#sign-up-name').value;
    let surnameValue = form.querySelector('#sign-up-surname').value;
    let dniValue = form.querySelector('#sign-up-dni').value;
    let birthValue = form.querySelector('#sign-up-birth').value;
    let birthValueSplitted = birthValue.split('-');
    let birthValueFormatted = birthValueSplitted[1] + '/' + birthValueSplitted[2] + '/' + birthValueSplitted[0];
    let phoneValue = form.querySelector('#sign-up-phone').value;
    let addressValue = form.querySelector('#sign-up-address').value;
    let cityValue = form.querySelector('#sign-up-city').value;
    let pcValue = form.querySelector('#sign-up-code').value;
    let emailValue = form.querySelector('#sign-up-email').value;
    let passwordValue = form.querySelector('#sign-up-pass').value;

    fetch('https://api-rest-server.vercel.app/signup?'
    + 'name=' + nameValue
    + '&lastName=' + surnameValue
    + '&dni=' + dniValue
    + '&dob=' + birthValueFormatted
    + '&phone=' + phoneValue
    + '&address=' + addressValue
    + '&city=' + cityValue
    + '&zip=' + pcValue
    + '&email=' + emailValue
    + '&password=' + passwordValue)
    .then ((response) => {
        return response.json();
    })
    .then ((data) => {
        if(data.success) {
            let inputValues = '';
            for(const property in data.data) {
                inputValues += property.toUpperCase() + ': ' + data.data[property] + '\n';
            }

            localStorage.setItem('name', nameValue);
            localStorage.setItem('surname', surnameValue);
            localStorage.setItem('dni', dniValue);
            localStorage.setItem('dob', birthValue);
            localStorage.setItem('phone', phoneValue);
            localStorage.setItem('address', addressValue);
            localStorage.setItem('city', cityValue);
            localStorage.setItem('zip', pcValue);
            localStorage.setItem('email', emailValue);
            localStorage.setItem('password', passwordValue);

            successModal.style.display = 'flex';
            document.querySelector('.success-content').innerText = data.msg + '\n' + inputValues;
        } else {
            let errorMsg = '';
            data.errors.forEach(error => {
                errorMsg += '\n' + error.msg;
            })
            throw new Error(errorMsg)
        }
    })
    .catch ((error) => {
        errorModal.style.display = 'flex';
        document.querySelector('.error-content').innerText = error;
    })
});

window.onload = ()=> {
    let nameValue = form.querySelector('#sign-up-name');
    let surnameValue = form.querySelector('#sign-up-surname');
    let dniValue = form.querySelector('#sign-up-dni');
    let birthValue = form.querySelector('#sign-up-birth');
    let phoneValue = form.querySelector('#sign-up-phone');
    let addressValue = form.querySelector('#sign-up-address');
    let cityValue = form.querySelector('#sign-up-city');
    let pcValue = form.querySelector('#sign-up-code');
    let emailValue = form.querySelector('#sign-up-email');
    let passwordValue = form.querySelector('#sign-up-pass');
    let repeatPass = form.querySelector('#sign-up-repeatpass');

    nameValue.value = localStorage.getItem('name');
    surnameValue.value = localStorage.getItem('surname');
    dniValue.value = localStorage.getItem('dni');
    birthValue.value = localStorage.getItem('dob');
    phoneValue.value = localStorage.getItem('phone');
    addressValue.value = localStorage.getItem('address');
    cityValue.value = localStorage.getItem('city');
    pcValue.value = localStorage.getItem('zip');
    emailValue.value = localStorage.getItem('email');
    passwordValue.value = localStorage.getItem('password');
    repeatPass.value = localStorage.getItem('password');
}

const successModal = document.querySelector('.success-modal');
const errorModal = document.querySelector('.error-modal');
const successClose = document.querySelector('.success-close');
const errorClose = document.querySelector('.error-close');
const successModalButton = document.querySelector('.success-modal-button');
const errorModalButton = document.querySelector('.error-modal-button');

successModalButton.addEventListener('click', () => {
    successModal.style.display = 'none';
})

errorModalButton.addEventListener('click', () => {
    errorModal.style.display = 'none';
})

successClose.addEventListener('click', () => {
    successModal.style.display = 'none';
})

errorClose.addEventListener('click', () => {
    errorModal.style.display = 'none';
})

window.onclick = function(event) {
    if (event.target == successModal) {
      successModal.style.display = "none";
    }
    if (event.target == errorModal) {
        errorModal.style.display = "none";
      }
}