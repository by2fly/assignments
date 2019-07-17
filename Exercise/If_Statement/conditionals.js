if (5 > 3) {
   console.log("is greater than");
} else {

}


var name;
if (name = "cat") {
    console.log(name.length);
} 


if ("cat" === "dog") {
    
} else {
    console.log("not the same");
}

var person = {
    name: "Bobby",
    age: 12
}
if (person.age >= 18) { 
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie");
}

if (person.name.startsWith('B')) { 
    console.log(person.name + " is allowed to go to the movie");

}

if (person.name.startsWith('B') && (person.age >= 18)) { 
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie");
}

if (1 ==="1") {        //strict equality ===
    console.log("strict");
} else if (1 == "1") {      //lenient ==
    console.log("loose");
} else {        
    console.log("not equal at all");

}
if (1<=2 && 2==4) {
    console.log("yes");
}

var dog = "dog";
if (typeof dog === "string") {
    console.log("String");
}

var cool = false;
if (typeof cool) {
    console.log(typeof cool);
}

var x;
if (typeof x === "undefined") {
    console.log('Undefined')
}

var s = s;
var n = 12;
if (s >= n) {
    console.log("It is greater");
} else {
    console.log("s is not greater than 12");
}

var myNum = 10;
//function answer(numberType) {
    if (myNum % 2 == 0) {
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }