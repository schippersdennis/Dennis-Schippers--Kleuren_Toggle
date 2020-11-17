const body = document.querySelector('body')
const colorMssg = document.querySelector('.kleuren__mssg')
const colorGray = document.querySelector('.kleuren__list li:nth-child(1)')
const colorRed = document.querySelector('.kleuren__list li:nth-child(2)')
const colorGreen = document.querySelector('.kleuren__list li:nth-child(3)')
const colorBlue = document.querySelector('.kleuren__list li:nth-child(4)')
const colorOrange = document.querySelector('.kleuren__list li:nth-child(5)')
const checkBox = document.getElementsByName('background');

checkBox.forEach(function (radio) {
    radio.addEventListener('change', (event) => {
        let set = event.target.id
        setBackground(set)
    }
    )
})

const keyChecker = (key) => {
    if (key.keyCode == 49) {
        setBackground('gray');
    } else if (key.keyCode == 50) {
        setBackground('red');
    } else if (key.keyCode == 51) {
        setBackground('green');
    } else if (key.keyCode == 52) {
        setBackground('blue');
    } else if (key.keyCode == 53) {
        setBackground('orange');
    }
}

const setBackground = (color) => {
    body.removeAttribute('class')
    body.classList.add(`add_${color}`)
    colorMssg.innerHTML = color
    document.getElementById(color).checked = true;
}
//addEventListeners
window.addEventListener('keydown', keyChecker)
colorGray.addEventListener('click', () => {
    setBackground('gray');
});
colorRed.addEventListener('click', () => {
    setBackground('red');
});
colorGreen.addEventListener('click', () => {
    setBackground('green');
});
colorBlue.addEventListener('click', () => {
    setBackground('blue');
});
colorOrange.addEventListener('click', () => {
    setBackground('orange');
});





