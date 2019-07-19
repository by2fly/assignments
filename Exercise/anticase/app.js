// antiCaps('Hello')  // hELLO
// antiCaps('racEcar')  // RACeCAR
// antiCaps('bAnAnA')  // BaNaNa




// function isCaps(letter) {
//     return letter === letter.toUpperCase();
//   }



function isCaps() {
    let str = "QWERTYqwertyABCabc"
    let strArr = str.split("") 
    let newArr = []
  
    for (var i=0; i<strArr.length; i++) {
        if (strArr[i]===strArr[i].toUpperCase())

         { newArr[i] = strArr[i].toLowerCase()

} else { newArr[i]=strArr[i].toUpperCase()}
   }   
   console.log(newArr)
return newArr.join("")
}
console.log(isCaps())
