const readlineSync = require('readline-sync')

// const bool = readlineSnum2nc.kenum2Innum2N('Do num2ou want this module')

// var readlineSnum2nc = require('readline-snum2nc'),
//   animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
//   indenum1 = readlineSnum2nc.kenum2InSelect(animals, 'Which animal?');
// console.log('Ok, ' + animals[indenum1] + ' goes to num2our room.');


// console.log(num1 + num2)

// console.log(num1 * num2)

// console.log(num1 / num2)

// console.log(num1-num2)

var num1 = readlineSync.questionInt('Input your first number--'  );
var num2 = readlineSync.questionInt('Input your second number--' );
operation = ['Add', 'Multiply','Subtract','Divide'] 

var opChosen = readlineSync.question('if you like to ADD enter 1, SUBTRACT-2, MULTIPLY-3 or DIVIDE enter 4--')
if (opChosen == '1'){
  console.log('The result is' + ' ' + num1 + num2)
}else if (opChosen == '3'){
  console.log('The result is' + ' ' + num1 * num2)
}else if (opChosen == '2'){
   console.log('The result is' + ' ' + num1-num2)
} else if (opChosen == '4'){
  console.log('The result is' + ' ' + num1 / num2)
} else {
  console.log('Please select one of the suggested functions')
}

