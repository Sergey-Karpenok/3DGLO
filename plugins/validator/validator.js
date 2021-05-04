class Validator {
    constructor({ selector, pattern = {}, metod }) {
        this.form = document.querySelector(selector);
        this.pattern = pattern;
        this.metod = metod;
        this.elemetsForm = [...this.form.elements].filter(item => {
            return item.tagName.toLowerCase() !== 'button' && item.type !== 'button'
        });
        this.error = new Set();
    }

    init() {
        this.applyStyle();
        this.setPattern();
        this.elemetsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)))
    }

    isValid(elem) {
        const validatorMethod = {
            notEmpty(elem) {
                if (elem.value.trim() === '') {
                    return false;
                }
                return true;
            },
            pattern(elem, pattern) {
                return elem.pattern.test(pattern.value)
            }
        };

        const metod = this.metod;
        console.log('metod: ', metod);

        return true;
    }

    checkIt(event) {
        const target = event.target;
        if (this.isValid(target)) {
            this.showSucsess(target);
            this.error.delete(target);
        } else {
            this.showError(target);
            this.error.add(target);

        }
        console.log('this.error: ', this.error);
    }

    showError(elem) {
        elem.classList.remove('sucsess');
        elem.classList.add('error');
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
            return;
        }
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Вы допустили ошибку';
        errorDiv.classList.add('validator-error');
        elem.insertAdjacentElement('afterend', errorDiv)
    }

    showSucsess(elem) {
        elem.classList.remove('error');
        elem.classList.add('sucsess');
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
            elem.nextElementSibling.remove();
        }
    }

    applyStyle() {
        const style = document.createElement('style');

        style.textContent = `
      input.sucsess {
        border: 2px solid green
      }
      input.error {
        border: 2px solid red
      }
      .validator-error {
        font-size: 9px;
        font-family: sans-serif;
        color: red
      }
      `
        document.head.appendChild(style);
    }

    setPattern() {

        if (!this.pattern.message) {
            this.pattern.message = /[а-яА-Я]/;
        }
        if (!this.pattern.name) {
            this.pattern.name = /[а-яА-Я]/;
        }

        console.log('this.pattern: ', this.pattern);

    }

}