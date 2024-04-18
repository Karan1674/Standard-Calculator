let calculator = document.querySelector('.calculator');
let buttons = document.querySelectorAll('span');
let value = document.querySelector('.value');
let body = document.querySelector('body');
let maxdigits = 0;
let start = 0;

let on = document.querySelector('#on');

on.addEventListener('click', function () {

    if (start == 0) {
        start = 1;
        // on.innerHTML = 'OFF';
        value.innerHTML = '0';
        on.style.backgroundColor = "#09c510";

    } else {
        start = 0;
        on.style.backgroundColor = "#f13123";
        // on.innerHTML = 'On/AC';
        value.innerHTML = '';
        maxdigits = 0;
    }
})

let modify = document.querySelector('#modify');
modify.addEventListener('click', function () {
    body.classList.toggle('dark');
});


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (start == 1) {

            if (this.innerHTML == "=") {
                try {
                    let result = eval(value.innerHTML);
                    value.innerHTML = isNaN(result) ? 'undefined' : result;
                    maxdigits = value.innerHTML.length;
                } catch (error) {
                    value.innerHTML = 'undefined';

                }
            }
            else {
                if (this.innerHTML == 'Clear') {
                    value.innerHTML = "0";
                    maxdigits = 0;
                }
                else if (this.innerHTML == 'Correct') {
                    if (value.innerHTML == 'undefined' || value.innerHTML == '0') {
                        value.innerHTML = "0";
                        maxdigits = 0;
                    }
                    else {

                        value.innerHTML = value.innerHTML.slice(0, -1);
                        maxdigits--;
                    }
                }
                else if (this.innerHTML == '+/-') {
                    if (value.innerHTML > 0) {
                        value.innerHTML = -value.innerHTML;
                        maxdigits++;
                    }
                    else {
                        if (value.innerHTML == '0') {
                            value.innerHTML = '0';
                        }
                        else {
                            value.innerHTML = value.innerHTML.substring(1);
                            maxdigits++;
                        }
                    }

                }
                else if ((this.innerHTML == '0' || this.innerHTML == '00') && value.innerHTML == '0') {
                    value.innerHTML = "0";
                    maxdigits = 0;
                }
                else if (this.innerHTML == 'On/AC' || this.innerHTML == 'OFF' || this.innerHTML == 'Modify') {

                }
                else {
                    if (value.innerHTML == '0') {
                        value.innerHTML = this.innerHTML;
                        maxdigits++;
                    }
                    else {
                        if (maxdigits < 16) {
                            value.innerHTML += this.innerHTML;
                            maxdigits++;
                        }
                    }
                }
            }
        }
    });
}
