//Пункт 1
const square = document.getElementsByClassName("square");
function squareClick() {
    let first = Math.floor(Math.random() * 256);
    let second = Math.floor(Math.random() * 256);
    let third = Math.floor(Math.random() * 256);
    let col = "rgb(" + first + "," + second + "," + third + ")";
    square[0].style.background = col;
}
square[0].onclick = squareClick;

//Пункт 2
const timer = document.getElementsByClassName("timer");
let time = 0;
let intervalID;

function timeRun() {
    time += 1;
    timer[0].innerText = time;
}
function makeInterval() {
    intervalID = setInterval(timeRun, 1000);
}
function deleteInterval() {
    intervalID = clearInterval(intervalID);
}

timer[0].addEventListener("mouseover", makeInterval);
timer[0].addEventListener("mouseout", deleteInterval);

//Пункт 3
const but = document.getElementById("but");
const list = document.getElementById("list");

function butClick() {
    if (list.style.display === "none") {list.style.display = "block";}
    else {
        list.style.display = "none";
    }
}

but.addEventListener("click", butClick);

//Пункт 4
const circle = document.getElementById("circle");
const field = document.getElementById("field");
let clickFlag = false;

circle.addEventListener("click", () => {clickFlag = true;});

function pressEsc (e){
    if (e.code === "Escape") {clickFlag = false;}
}

document.addEventListener ("keydown", pressEsc);

function mouseMov (e){
    let x, y;
    if (clickFlag){
        x = e.pageX - field.offsetLeft - circle.offsetWidth/2;
        y = e.pageY - field.offsetTop - circle.offsetHeight/2;

        if ((x <= field.offsetWidth - circle.offsetWidth) && (y <= field.offsetHeight - circle.offsetHeight) && (x>0) && (y>0)){
            circle.style.left = x + "px";
            circle.style.top = y + "px";
        }
    }
}

field.addEventListener ("mousemove", mouseMov);


