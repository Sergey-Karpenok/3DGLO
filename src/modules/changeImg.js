const changeImg = () => {
    const command = document.getElementById('command');
    const toggleImg = (event) => {
        const target = event.target;

        if (!target.matches('img')) return;

        [target.dataset.img, target.src] = [target.src, target.dataset.img];
    };
    command.addEventListener('mouseover', toggleImg);
    command.addEventListener('mouseout', toggleImg);
};

export default changeImg;