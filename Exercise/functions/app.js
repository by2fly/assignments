//two numbers as parameters

function sum (num1, num2) {
    return num1 + num2
}
console.log(sum(2,6))

// accepts 3 numbers,returns largest

function largest (numA, numB, numC){
    return Math.max(numA, numB, numC)
}
console.log(largest(1, 6, 800))


//accepts one number - returns whether it is ODD or EVEN

function oddOrEven (b) {
    if (b % 2 == 0)
        return true;
    else 
        return false;
}
console.log(oddOrEven(2) ? "even":"odd")


/*accepts a string as parameter. if <= 20 char, return catenated with itself, > 20 char
return the first half of the string */

function cathalf (str1) {
let n = str1.length;

    if (n <= 20) {
        return str1
    }else{ 
        return str1.substr(0, n/2)
    }
} 
console.log(cathalf("abdcefghijklmopqrstuvwxyz"));
