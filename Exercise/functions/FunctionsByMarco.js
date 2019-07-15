// function nameOfFunction (parameters){
//     // code block
// }

// // call function
// nameOfFunction(arguments)

// function toaster (slot1){
//     if(slot1 === 'bread'){
//         return 'toast'
//     }else {
//         return `toasted ${slot1}`
//     }
// }

// let ourBreakfast = toaster('english muffin')

// console.log(ourBreakfast)

// function multiply (num2){
//     let num1 = 30
//     return num1 * num2
// }

// console.log(multiply(2))
// console.log(multiply(6))
// console.log(num1)

// const num = 10
// num++
// console.log(num)

// const person = {
//     name: 'Johnny Bravo',
//     age: 27
// }

// person.age++

// console.log(person)


// function speak (phrase, phrase2){
//     return phrase + ' ' + phrase2
// }

// console.log(speak('serenity now', 'insanity later'))

function ask (agree, yes, no){
    if(agree('yes')){
        return yes()
    }else {
        return no()
    }
}

console.log(ask(agree, yes, no))

function agree (answer){
    if(answer === 'yes'){
        return true
    }else {
        return false
    }
}

function yes (){
    return 'Yes I agree'
}

function no (){
    return 'No I do not agree'
}

