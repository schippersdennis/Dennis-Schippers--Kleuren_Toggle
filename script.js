const body = document.querySelector('body')
const colorMssg = document.querySelector('.kleuren__mssg')
const colorGray = document.querySelector('.kleuren__list li:nth-child(1)')
const colorRed = document.querySelector('.kleuren__list li:nth-child(2)')
const colorGreen = document.querySelector('.kleuren__list li:nth-child(3)')
const colorBlue = document.querySelector('.kleuren__list li:nth-child(4)')
const colorOrange = document.querySelector('.kleuren__list li:nth-child(5)')
const checkBox = document.getElementsByName('background');


const makeBackgroundGray = () => {
    body.removeAttribute('class');
    body.classList.add('add_gray')
    colorMssg.innerHTML = 'GRAY'
    document.getElementById('gray').checked = true;
}
colorGray.addEventListener('click', makeBackgroundGray);



const makeBackGroundRed = () => {
    body.removeAttribute('class');
    body.classList.add('add_red')
    colorMssg.innerHTML = 'RED'
    document.getElementById('red').checked = true;
}
colorRed.addEventListener('click', makeBackGroundRed);


const makeBackgroundGreen = () => {
    body.removeAttribute('class');
    body.classList.add('add_green')
    colorMssg.innerHTML = 'GREEN'
    document.getElementById('green').checked = true;
}
colorGreen.addEventListener('click', makeBackgroundGreen);


const makeBackgroundBlue = () => {
    body.removeAttribute('class');
    body.classList.add('add_blue')
    colorMssg.innerHTML = 'BLUE'
    document.getElementById('blue').checked = true;
}
colorBlue.addEventListener('click', makeBackgroundBlue);



const makeBackgroundOrange = () => {
    body.removeAttribute('class');
    body.classList.add('add_orange')
    colorMssg.innerHTML = 'ORANGE'
    document.getElementById('orange').checked = true;
}
colorOrange.addEventListener('click', makeBackgroundOrange)


checkBox.forEach(function (radio) {
    radio.addEventListener('change', (event) => {
        if (event.target.id == 'gray') {
            makeBackgroundGray()
        } else if (event.target.id == 'red') {
            makeBackGroundRed()
        } else if (event.target.id == 'green') {
            makeBackgroundGreen()
        } else if (event.target.id == 'blue') {
            makeBackgroundBlue()
        } else if (event.target.id == 'orange') {
            makeBackgroundOrange()
        }

    })

})


const keyChecker = (key) => {
    if (key.keyCode == 49) {
        makeBackgroundGray();
    } else if (key.keyCode == 50) {
        makeBackGroundRed();
    } else if (key.keyCode == 51) {
        makeBackgroundGreen();
    } else if (key.keyCode == 52) {
        makeBackgroundBlue();
    } else if (key.keyCode == 53) {
        makeBackgroundOrange();
    }
}
window.addEventListener('keydown', keyChecker)



