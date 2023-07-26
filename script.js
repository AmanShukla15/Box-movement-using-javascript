let lefty = document.getElementById("left");
let righty = document.getElementById("right");
let tops = document.getElementById("top");
let downs = document.getElementById("down");
let box = document.getElementById("box");
let section1 = document.getElementById("section1");

let a = 0;
let b = 0;
let breadth = section1.offsetWidth;
let height = section1.offsetHeight;
console.log(breadth);
console.log(height);
let wid = breadth;
let hei = height;

function leftShift() {
    
    if (a > 0) {
        a = a - 50;
        box.style.left = `${a}px`;
    }
}
function rightShift() {
    
    if (a < breadth-80) {
        a = a + 50;
        box.style.left = `${a}px`;
    }
}
function topShift() {
    if (b > 0) {
        b = b - 50;
        box.style.top = `${b}px`;
    }
}
function downShift() {
    if (b < height-70) {
        b = b + 50;
        box.style.top = `${b}px`;
    }
}
lefty.onclick = leftShift;
righty.onclick = rightShift;
tops.onclick = topShift;
downs.onclick = downShift;