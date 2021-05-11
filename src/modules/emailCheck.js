const emailCheck = () => {
    const form2Email = document.getElementById('form2-email'),
        form1Email = document.getElementById('form1-email'),
        form3Email = document.getElementById('form3-email');

    form2Email.addEventListener('input', () => {
        form2Email.value = form2Email.value.replace(/[^a-zA-Z@-_\.\!~\*']/g, '');
    });

    form1Email.addEventListener('input', () => {
        form1Email.value = form1Email.value.replace(/[^a-zA-Z@-_\.\!~\*']/g, '');
    });

    form3Email.addEventListener('input', () => {
        form3Email.value = form3Email.value.replace(/[^a-zA-Z@-_\.\!~\*']/g, '');
    });

};

export default emailCheck;