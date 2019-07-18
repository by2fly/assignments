var box = document.getElementById('square');
 
box.addEventListener('mouseover', function(){
    box.style.backgroundColor = 'blue';
 })
box.addEventListener('mousedown', function(){
    box.style.backgroundColor = 'red';
})
box.addEventListener('mouseup', function(){
    box.style.backgroundColor = 'yellow';
})
box.addEventListener('dblclick', function(){
    box.style.backgroundColor = 'green';
})
box.addEventListener('scroll', function(){
    box.style.backgroundColor = 'orange';
})
 
 

window.addEventListener('keydown', function(event){
    if(event.which === 82){
        box.style.backgroundColor = 'red'
    } else if (event.which === 66){
        box.style.backgroundColor = 'blue'
    } else if (event.which === 71){
        box.style.backgroundColor = 'green'
    }
})
 
//  box.addEventListener('onmouseoutfunction onMouseOver ()  {
//     box.addEventListener('onmouseover', function(e) {
//     e.preventDefault()
// }

// function colorChange(on){
// document.getElementById('square').style.backgroundColor = 'paleGreen'
// }

/* 
// document //our HTML page as JS Object
// window //the Browser
// The square's color will change as follows:

// Blue when the mouse hovers over the square
// Red when the mouse button is held down over the square
// Yellow when the mouse button is let go over the square
// Green when the mouse is double clicked in the square
// Orange when the mouse scroll is used somewhere in the window (not just over the square).

// You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color. Check this site for a full list of keyboard key codes.*/

// var myBtn = document.getElementById('btn')

// myBtn.addEventListener('click', function()*/