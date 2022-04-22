const showColor = document.getElementById('showColor');
const body = document.getElementById('body');

let letters = '1234567890abcdef';
let color = '#';
let savePreviousColor = []

function selectColor(){
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    body.style.backgroundColor = color;
    showColor.innerText = color;
    savePreviousColor.push(color)
    color = '#';
}

function previousColor(){

    body.style.backgroundColor  
}

