const phoneCheck = () => {
    const phone = document.getElementById('form2-phone'),
        form1Phone = document.querySelector('.form-phone');


    phone.addEventListener('input', () => {
        phone.value = phone.value.replace(/[^-()\+\d]/g, '');
    });

    form1Phone.addEventListener('input', () => {
        form1Phone.value = form1Phone.value.replace(/[^-()\+\d]/g, '');
    });

    phone.addEventListener('blur', () => {
        phone.value = phone.value.replace(/-+/, '-');
    });
    form1Phone.addEventListener('blur', () => {
        form1Phone.value = form1Phone.value.replace(/-+/, '-');
    });
};

export default phoneCheck;