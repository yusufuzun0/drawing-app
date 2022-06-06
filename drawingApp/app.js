/*
Photos  https://unsplash.com/ 
Radients https://www.eggradients.com/ 
Radiets https://cssgradient.io/gradient-backgrounds/
Color  https://flatuicolors.com/palette/gb 
Fontawesome <script src="https://kit.fontawesome.com/259d827b62.js"></script>

*/
const clearButton = document.getElementById('clear');
const plusButton = document.getElementById('plus');
const sourButton = document.getElementById('sour');
const sizeSpan = document.getElementById('size');
const color = document.getElementById('color');


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let size = 10;
let press;
canvas.addEventListener('mousedown', (e) => {
    press = true;


});
canvas.addEventListener('mouseup', (e) => {
    press = false;
});
canvas.addEventListener('mousemove', (e) => {
    if (press) {
        let x = e.offsetX;
        let y = e.offsetY;
        drawCircle(x, y);
    }
});


function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();

}



clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

plusButton.addEventListener('click', () => {
    if (size < 100) {
        size += 10;
        sizeSpan.textContent = size;
    }
});
sourButton.addEventListener('click', () => {
    if (size > 10) {
        size -= 10;
        sizeSpan.textContent = size;
    }
});

color.addEventListener('change', (e) => {
    ctx.fillStyle = e.target.value;
});