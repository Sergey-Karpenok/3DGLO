const calcCheck = () => {
    const calcs = document.querySelectorAll('.calc-item');

    calcs.forEach((item) => {
        if (item.matches('input')) {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/g, '');
            })
        }
    });
};

export default calcCheck;