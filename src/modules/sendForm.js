const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        sucsessMesage = 'Заявка отправлена, спасибо мы скоро с вами свяжемся';

    const form = document.getElementById('form1'),
        modalForm = document.getElementById('form2');
    const statusMessage = document.createElement('div');
    statusMessage.textContent = 'Все в порядке';
    statusMessage.style.cssText = `font-size: 2rem; color: green`;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);

        postData(formData)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Ошибка статус не равен 200');
                }
                statusMessage.textContent = sucsessMesage;
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.log(error);
            });

        for (let item of form) {
            item.value = '';
        };

    });

    modalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        modalForm.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(modalForm);

        postData(formData)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Ошибка статус не равен 200');
                }
                statusMessage.textContent = sucsessMesage;
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.log(error);
            });

        for (let item of modalForm) {
            item.value = '';
        };

    });

    const postData = (body) => {

        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        });
    };
};

export default sendForm;