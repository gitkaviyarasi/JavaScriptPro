const wrap = document.querySelector("#wrap");
const btn = document.querySelector("#btn");
const color = document.querySelector("#color");
const hex = ['0', '1', '1', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener("click", changeColor);
let hexadec = "#"
function changeColor() {
    console.log("button clicked")
    let hexColor = '#'
    for (let i = 1; i <= 6; i++) {
        // hexColor += genHexCode()
        hexColor = hexColor + genHexCode();
    }
    wrap.style.backgroundColor = hexColor
    color.innerHTML = hexColor


};

function genHexCode() {
    const rand = Math.floor(Math.random() * 16);
    //Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    console.log(hex[rand])
    return hex[rand];
};



// const colorbt = document.querySelector("#colorbt");
// colorbt.addEventListener("click", changeColor);

// function getColor() {
//     console.log("button pressed")
//     const color = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
//     console.log(color);

//     return '#' + color;

// }

// function changeColor() {
//     getColor();
//     colorbt.setAttribute('style', "background-color:#${color")
// }