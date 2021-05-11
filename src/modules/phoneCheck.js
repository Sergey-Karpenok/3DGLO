const phoneCheck = () => {
    const form2Phone = document.getElementById('form2-phone'),
        form1Phone = document.getElementById('form1-phone'),
        form3Phone = document.getElementById('form3-phone');


    form2Phone.addEventListener('input', () => {
        form2Phone.value = form2Phone.value.replace(/[^-()\+\d]/g, '');
    });

    form1Phone.addEventListener('input', () => {
        form1Phone.value = form1Phone.value.replace(/[^-()\+\d]/g, '');
    });

    form3Phone.addEventListener('input', () => {
        form3Phone.value = form3Phone.value.replace(/[^-()\+\d]/g, '');
    });

    form2Phone.addEventListener('blur', () => {
        form2Phone.value = form2Phone.value.replace(/-+/, '-');
    });
    form1Phone.addEventListener('blur', () => {
        form1Phone.value = form1Phone.value.replace(/-+/, '-');
    });
    form3Phone.addEventListener('blur', () => {
        form3Phone.value = form3Phone.value.replace(/-+/, '-');
    });
};

export default phoneCheck;