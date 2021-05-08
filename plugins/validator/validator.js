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
        this.elemetsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.elemetsForm.forEach(elem => this.checkIt({ target: elem }));
            if (this.error.size) {
                e.preventDefault();
            }
        })
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
                return pattern.test(elem.value)
            }
        };

        if (this.metod) {
            const metod = this.metod[elem.id];

            if (metod) {
                return metod.every(item => {
                    return validatorMethod[item[0]](elem, this.pattern[item[1]]);
                })
            }
        }
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

        if (!this.pattern.phone) {
            this.pattern.phone = /^$/;
        }
        if (!this.pattern.name) {
            this.pattern.name = /^$/;
        }
        if (!this.pattern.email) {
            this.pattern.email = /^$/;
        }
    }
};