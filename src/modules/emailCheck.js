const emailCheck = () => {
    const email = document.getElementById('form2-email'),
        form1Email = document.querySelector('.form-email');

    email.addEventListener('input', () => {
        email.value = email.value.replace(/[^a-zA-Z@-_\.\!~\*']/g, '');
    });

    form1Email.addEventListener('input', () => {
        form1Email.value = form1Email.value.replace(/[^a-zA-Z@-_\.\!~\*']/g, '');
    });
};

export default emailCheck;