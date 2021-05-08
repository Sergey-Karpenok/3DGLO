    function togglePopUp() {

        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupContent = document.querySelector('.popup-content');

        popupBtn.forEach((item) => {
            item.addEventListener('click', () => {
                if (window.innerWidth > 768) {
                    popup.style.display = 'block';
                    showInt = requestAnimationFrame(animatedPopup);
                    count = 0;
                } else {
                    popup.style.display = 'block';
                    popupContent.style.top = 0 + `%`;
                    console.log('popup.style.top: ', popup.style.top);
                }
            })
        });

        let count = 0,
            showInt;

        function animatedPopup() {
            let clientHeigh = document.documentElement.clientHeight / 2,
                popupHeigh = popupContent.getBoundingClientRect().height / 2;
            showInt = requestAnimationFrame(animatedPopup);
            count = count + 4;
            if (count < (clientHeigh - popupHeigh)) {
                popupContent.style.top = count + 'px';
            } else {
                cancelAnimationFrame(showInt);
            }
        };

        popup.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content')
                if (target === null) {
                    popup.style.display = 'none';
                }
            }
        });
    };

    export default togglePopUp;