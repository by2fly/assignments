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


console.log(remDuplChar('This could be the beginning of a wonderful relationship')); 