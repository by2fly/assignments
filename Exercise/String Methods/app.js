/*Make a function that will return any given string into all caps followed by the same string all lowercase.*/

function capitalizeAndLowerCase (str1) {
    const a = str1.toUpperCase()
    const b = str1.toLowerCase()
    return a.concat(b)

}
console.log(capitalizeAndLowerCase("hello"))

//Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().


function zah(strLong) {
//let strLong = "skjfksdfjksjfjsfsjdfikfjs";
let cs = (strLong.length/2)
return Math.floor(cs)
}
console.log(zah("skjfksdfjksjfjsfsjdfikfjs"))


/*Make a function that uses slice() and the other functions you've written to return the 
first half of the string*/

function sliceHalf (str3) {
    let cs = (str3.length/2); 
    //let wholeNum = Math.floor(cs);
    let newSlice = str3.slice(0,(str3.length/2));
    return newSlice
}

console.log(sliceHalf('this is a new day and I am waiting to get on with it'));



/*Make a function that takes a string and returns that string where the first half is capitalized, 
and the second half is lower cased. 
(If the string length is odd, capitalize the shorter of the first half.) */


function halfCapOdd(str6) {
       let a = str6.length/2
   // return a
        let firstHalf = str6.slice(0, a).toUpperCase()  //on ONE Line
        let secondHalf = str6.slice(a)
        return firstHalf + secondHalf.toLowerCase()    


}
console.log(halfCapOdd("Hello woRLD"))


/*Optional Code Challenge (This one is a step up in difficulty):

Make a function that takes any string and capitalizes any character that follows a space.  
hint- change String to Array, cap the first index of each array, change back to String*/

function capString(str) {

    let strArray = str.split(" ")
    let newArray = []
 for (var i = 0 ; i < strArray.length ; i++) {
        newArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1)
    }
 let newStr = newArray.join(" ")

        return newStr

console.log(newStrst)
}
console.log(capString("I am so pleased to meet you"))
