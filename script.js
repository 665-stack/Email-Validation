const validEmailAlert = document.getElementById('valid');
const invalidEmailAlert = document.getElementById('invalid');

const validate = () => {
    const inputMail = document.getElementById('text').value;

    document.getElementById('text').value = "";

    const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    if (regx.test(inputMail)) {
        invalidEmailAlert.style.display = 'none';
        validEmailAlert.style.display = 'block';
        return true;

    }
    else {
        validEmailAlert.style.display = 'none';
        invalidEmailAlert.style.display = 'block';
        return false;
    }


}