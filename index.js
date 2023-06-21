const incrr = document.getElementById('to-incrr');
const buy = document.getElementById('buy');
const four = document.getElementById('four');
const fourToDisplay = document.getElementById('four-four');
const mega = document.getElementById('megafour');
const fourmega = document.getElementById('four-four-mega');

var number_or = 0;
var number_four = 1;

var number_mega_four = 0;
var number_or_in_mega = 0

function buyor() {

    number_or = number_or + number_four + number_or_in_mega;

    incrr.innerHTML = number_or;

    if (number_or >= 10 && number_or >= 20) {

        mega.disabled = false;
    }

    if (number_or >= 10) {

        four.disabled = false;

    }
}

function add_four() {

    number_four = number_four + 1;
    number_or = number_or - 10;

    fourToDisplay.innerHTML = number_four;
    incrr.innerHTML = number_or;

    if (number_or < 10) {
        four.disabled = true;
        mega.disabled = true;
    }

    else if (10 < number_or && 20 > number_or) {
        four.disabled = false;
        mega.disabled = true;
    }

    else if (number_or > 20) {
        mega.disabled = false;
    }

    else {
        four.disabled = true;
        mega.disabled = true;
    }

}

function add_megafour() {

    number_or = number_or - 20;
    number_mega_four = number_mega_four + 1;
    number_or_in_mega = number_or_in_mega + 10;

    fourmega.innerHTML = number_mega_four;
    incrr.innerHTML = number_or;

    if (number_or < 10) {
        four.disabled = true;
        mega.disabled = true;
    }

    else if (10 < number_or && 20 > number_or) {
        four.disabled = false;
        mega.disabled = true;
    }

    else if (number_or > 20) {
        mega.disabled = false;
    }

    else {
        four.disabled = true;
        mega.disabled = true;
    }

}