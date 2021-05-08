const nameMessageCheck = () => {
    const form2Name = document.getElementById('form2-name'),
        form2Message = document.getElementById('form2-message'),
        form1Name = document.querySelector('.form-name');

    form2Name.addEventListener('input', () => {
        form2Name.value = form2Name.value.replace(/[^а-яА-Я\- ]/g, '');
    });

    form1Name.addEventListener('input', () => {
        form1Name.value = form1Name.value.replace(/[^а-яА-Я\ ]/g, '');
    });

    form2Message.addEventListener('input', () => {
        form2Message.value = form2Message.value.replace(/[^а-яА-Я\- ,.?\d ]/g, '');
    });

    form2Name.addEventListener('blur', () => {
        form2Name.value = form2Name.value.replace(/\ +/, ' ');
        form2Name.value = form2Name.value.toLowerCase();
        form2Name.value = form2Name.value.replace(/^.|\s\D/g, (match) => match.toUpperCase());
    });

    form2Message.addEventListener('blur', () => {
        form2Message.value = form2Message.value.replace(/-+/, '-');
        form2Message.value = form2Message.value.replace(/\ +/, ' ');
    });
};

export default nameMessageCheck;