var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
let newalphabet = alphabet.split('')
                       // /Push(people)+':'
for (let i = 0; i<newalphabet.length; i++){
    newalphabet[i] = newalphabet[i].toUpperCase()
}
const newPeople = []
const finalArray = []
for (let i=0; i<people.length; i++){
    finalArray.push(people[i]+':')
    console.log(newPeople[i])
    for (j=0;j<newalphabet.length;j++){     
  finalArray.push(newalphabet[j])
    }
console.log(finalArray)



}


