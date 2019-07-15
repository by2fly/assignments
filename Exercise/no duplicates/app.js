/* No Duplicates
19 MAY 2015 on Programming Principles, Level 2
Given a string, remove any duplicate letters.

Example:
var input = "bookkeeper larry";

// Output: "bokepr lay"
Extra Credit:
Create a function that randomly removes a letter.
Create a function that scrambles the original string.
Create a function using regular expressions that remove all vowels.
*/


function remDuplChar(string){
    return string
       .split('')    /*First, transform any given string into an array of characters*/
       .filter(function(item, pos, self) { /*array.filter(function(currentValue, index, arr), thisValue) 
array.filter(function(currentValue, index, arr), thisValue)*/
          return self.indexOf(item) == pos;
       })
       .join('');
  
}
console.log(remDuplChar('This could be the beginning of a wonderful relationship')); /*outside the } works
   
   /* /* transforms any given string into an array of characters*/

function characters(string) {
    return string.split(""); 
  

}
console.log(characters("all unique characters?"))



/* determines if any given string has all unique characters */
    
function allUnique(array) {    /* temporary object */
    var uniqueObject = {};
    /* Object attribute, with name equal to value in array, is created in order not to keep duplicates*/
    for (var i in array)
        uniqueObject[array[i]] = “”;
    /*There are no duplicates if the attributes of the object match the array */
    if (array.length == Object.keys(uniqueObject).length)
        return “all unique”;
    else
        return “duplicates found”;
    }
    var array = characters(string);
    console.log(allUnique("Now is the Time for all good men to come to the aid"));


    */


   function dupeCheck() {
    var x = 'qsxthfeavyjkowmp'
    var duplicate = 0;
    for (i = 0; i < x.length; i++) {
        var letter = x.charAt(i);
	var checker = x.indexOf(letter, i+1);
	if (checker > 0) {duplicate = duplicate + 1;}
    }
    if (duplicate > 0) {
	console.log("Duplicate Characters Were Found In Your String")
    } else {
	console.log("Your string does not contain duplicate characters.")
    }
}
/* to see if there are duplicates

def unique(inString):
    for i in range(len(inString)):
        for j in range(i+1, len(inString)):
            if(inString[i] == inString[j]):
                return "duplicates found"
    return "all unique"

*/

/*  simple

console.log('str' == [...new Set('str')].join('') ? 'all unique' : 'duplicates found');  */

