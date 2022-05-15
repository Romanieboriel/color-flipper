const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B","C", "D", "E", "F"]; // hex colors start with # 6 values. setting up a loop
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
let hexColor ="#";
for( let i = 0; i < 6; i++ ){
    //create loop to run 6 times
    //select a random number from const hex 6 times
    //add hexColor to the random numbers
    hexColor += hex[getRandomNumber()]
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}
// Math floor rounds down
// Math random chooses a random number between 0-1 ex: .42394
//Multiply math random by the hex.length and round down ex: .6 * 15 = 9
