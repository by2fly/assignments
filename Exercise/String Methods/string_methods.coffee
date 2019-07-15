// .toUpperCase()

// let str = 'hello'

// let upperStr = str.toUpperCase()

// console.log(str)
// console.log(upperStr)

// .concat

// let str1 = 'hello '
// let str2 = 'world'

// // let newStr = str1.concat(str2, ' you ', 'are ','my ','sunshine')
// let newStr = str1 + str2
// console.log(newStr)

// .slice()

// let str = 'hello there my there friend'
// let index = str.indexOf('there')

// let newStr = str.slice(-6)
// // console.log(index)
// console.log(newStr)
// console.log(str)

// .toLowerCase()

// let str = 'HELLO'

// let newStr = str.toLowerCase()

// console.log(newStr)

//  .split()

let str = 'hello there my friend, hello how are you'

str.split(' ')

console.log(str.split(' '))
// console.log(str)


function capilizeAndLowercase (str){
    //capitalize the word
        let upperStr = str.toUpperCase()
    // lowercase the word
        let lowerStr = str.toLowerCase()
    // return both words concatenated
        return upperStr + lowerStr
}

console.log(capilizeAndLowercase('Hello')) // => "HELLOhello"


