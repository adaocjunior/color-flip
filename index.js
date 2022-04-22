const showColor = document.getElementById('showColor');
const body = document.getElementById('body');

let letters = '1234567890abcdef';
let color = '#';
let previousColor = []

function selectColor(){
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    body.style.backgroundColor = color;
    showColor.innerText = color;
    previousColor.push(color)
    color = '#';
}


function teste(){
    let teste = previousColor.length
    body.style.backgroundColor = teste - 1
    if (previousColor.length == 0){
        body.style.backgroundColor = previousColor[0]
    }

}
