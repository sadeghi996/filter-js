const inp = document.querySelector('.wrapper>input');
const list = document.querySelector('.wrapper>ul');
const items = document.querySelectorAll('.wrapper>ul>li');
let exitCity = false;
inp.addEventListener('keyup', function () {
    list.style.display = "block";
});

inp.addEventListener('keyup', function () {
    let isExit = false;
    for (let i = 0; i < items.length; i++) {
        if (((items[i].innerHTML).toLowerCase()).startsWith((inp.value).toLowerCase())) {
            items[i].style.display = "block";
            isExit = true;
        } else {
            items[i].style.display = "none";
        }


        if (isExit) {
            inp.style.color = "black";
        } else {
            inp.style.color = "red";
        }
    }


});

document.addEventListener('click', function () {
    list.style.display = "none";
});

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
        inp.value = this.innerText;
        inp.focus();
    });
}