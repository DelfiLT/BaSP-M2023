function validateSignUp() {

    var button = document.querySelector('.sign-up-button');
    var nameInput = document.getElementById('sign-up-name');
    var nameError = '';
    var surnameInput = document.getElementById('sign-up-surname');
    var surnameError = '';
    var dniInput = document.getElementById('sign-up-dni');
    var dniError = '';
    var birthInput = document.getElementById('sign-up-birth');
    var birthError = '';
    var phoneInput = document.getElementById('sign-up-phone');
    var phoneError = '';
    var adressInput = document.getElementById('sign-up-adress');
    var adressError = '';
    var cityInput = document.getElementById('sign-up-city');
    var cityError = '';
    var postalCodeInput = document.getElementById('sign-up-code');
    var postalCodeError = '';

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

    nameInput.addEventListener('blur', () => {
        let inputGroup = nameInput.parentElement;
        let label = inputGroup.querySelector('.form-label');
        let input = inputGroup.querySelector('.input');
        let span = inputGroup.querySelector('span');

        input.addEventListener('focus', () => {
            removeError(label, input, span);
        })

        if (!input.value) {
            addError(label, input, span);
            span.innerText = 'Name is required';
            nameError = 'Name is required';
        }

        if (input.value.length <= 3 && input.value) {
            addError(label, input, span);
            span.innerText = 'Name too short';
            nameError = 'Name too short';
        }

        var haveNumbers = false;
        for (let i = 0; i < input.value.length; i++) {
            let char = input.value.charCodeAt(i);
            if (!(char >= 65 && charCode <= 90) && !(char >= 97 && char <= 122)) {
              haveNumbers = true;
            }
        }
        if (haveNumbers) {
            addError(label, input, span);
            span.innerText = 'Name contains invalid characters';
            nameError = 'Name contains invalid characters';
        }
    });

    surnameInput.addEventListener('blur', () => {
        let inputGroup = surnameInput.parentElement;
        let label = inputGroup.querySelector('.form-label');
        let input = inputGroup.querySelector('.input');
        let span = inputGroup.querySelector('span');

        input.addEventListener('focus', () => {
            removeError(label, input, span);
        })

        if (!input.value) {
            addError(label, input, span);
            span.innerText = 'Surname is required';
            surnameError = 'Surname is required'
        }

        if (input.value.length <= 3 && input.value) {
            addError(label, input, span);
            span.innerText = 'Surname too short';
            surnameError = 'Surname too short';
        }

        var haveNumbers = false;
        for (let i = 0; i < input.value.length; i++) {
            let char = input.value.charCodeAt(i);
            if (!(char >= 65 && charCode <= 90) && !(char >= 97 && char <= 122)) {
              haveNumbers = true;
            }
        }
        if (haveNumbers) {
            addError(label, input, span);
            span.innerText = 'Surname contains invalid characters';
            surnameError = 'Surname contains invalid characters';
        }
    });

    dniInput.addEventListener('blur', () => {
        let inputGroup = dniInput.parentElement;
        let label = inputGroup.querySelector('.form-label');
        let input = inputGroup.querySelector('.input');
        let span = inputGroup.querySelector('span');

        input.addEventListener('focus', () => {
            removeError(label, input, span);
        })

        if (!input.value) {
            addError(label, input, span);
            span.innerText = 'DNI is required';
            dniError = 'DNI is required'
        }

        if (input.value.length < 7 && input.value) {
            addError(label, input, span);
            span.innerText = 'Invalid DNI';
            dniError = 'Invalid DNI';
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
        }

    });

    phoneInput.addEventListener('blur', () => {
        let inputGroup = phoneInput.parentElement;
        let label = inputGroup.querySelector('.form-label');
        let input = inputGroup.querySelector('.input');
        let span = inputGroup.querySelector('span');

        input.addEventListener('focus', () => {
            removeError(label, input, span);
        })

        if (!input.value) {
            addError(label, input, span);
            span.innerText = 'Phone is required';
            phoneError = 'Phone is required'
        }

        if (input.value.length !== 10 && input.value) {
            addError(label, input, span);
            span.innerText = 'Invalid phone';
            phoneError = 'Invalid phone';
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
        }

        if (input.value[0] == 0) {
            addError(label, input, span);
            span.innerText = `Phone can't start with 0`;
            phoneError = `Phone can't start with 0`;
        }
    });

    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert(nameError + '\n' + surnameError + '\n' + dniError + '\n' + phoneError + '\n' + addressError);
    });

}

validateSignUp();