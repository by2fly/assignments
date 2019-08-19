function XO(str) {
  return str.toLowerCase().split("x").length == str.toLowerCase().split("o").length;
}
//WHAT I TRIED ================Didn't Get all the credit ===============see answers below
// function XO (str) {
//     let x = str.split('x');
    
//     let o = str.split('o')
//     ;
//     console.log (x, o);
//     if (x === o){
//        return true;
//     }else{
//         return false;
//     }
// }

// console.log(XO('abcdxxxoo'));



// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

// Return a boolean value (true or false).
// The string can contain any character.
// When no x and no o are in the string, return true.

// Ásgeir245 XPFollow
// function XO(str) {
//   return str.replace(/[^x]/ig, '').length === str.replace(/[^o]/ig, '').length
// }
// Marc630 XPFollow

// function XO(str) {
//   let x = str.toLowerCase().split('').filter(x => x === 'x').length;
//   let o = str.toLowerCase().split('').filter(x => x === 'o').length;
//   return x === o;
// }

// javascripttest145 XPFollow

// function XO(str) {
//   xs = (str.match(/x/gi) || []).length
//   os = (str.match(/o/gi) || []).length
//   return os == xs
// }

// Jan Chaloupka45 XPFollow

// function XO(str) {
//   return str.toLowerCase().split("x").length == str.split("o").length;
// }

// ShudderPig235 XPFollow
// function XO(str) {
//   return str.split('').filter(x => x.toLowerCase() == 'x').length 
//     == str.split('').filter(x => x.toLowerCase() == 'o').length;
// }
// Freaklancer140 XPFollow
// const XO = str => (str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length;
// Gabriel Barreto1,140 XPFollow
// function XO(str) { 
//   var balance = [...str.toLowerCase()].reduce((acc,x)=> (x==='o')?++acc:(x==='x')?--acc:acc ,0);
//   return balance===0;
// }
// davo301815 XPFollow
// function XO(str) {
//   var x = 0, o = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === 'x') {
//       x += 1;
//     } else if (str[i].toLowerCase() == 'o') {
//       o += 1;
//     }
//   }
//   return x === o;
// }
// hhqrk5,165 XPFollow
// function XO(str) {
//   return str.replace(/[^oO]/g, '').length == str.replace(/[^xX]/g, '').length
// }
// DasMozart850 XPFollow
// function XO(str) {
//   var charArr = str.toLowerCase().split('').filter(x => x.match(/[xo]/i));
//   var x = charArr.filter(x => x.match(/[x]/i)).length;
//   var o = charArr.filter(x => x.match(/[o]/i)).length;
//   return x === o;
// }
// Jacob710 XPFollow
// function XO(str) {
//   return (str.match(/[oO]/g) || []).length == (str.match(/[xX]/g) || []).length;
// }
// Sam45 XPFollow
// function XO(str) {
//   var x = 0, o = 0;
//   str
//     .split('')
//     .forEach(function(c) {
//       x += (c.toLowerCase() === 'x') ? 1 : 0;
//       o += (c.toLowerCase() === 'o') ? 1 : 0;
//     });
//   return x === o;
// }
// DreamArdor4,065 XPFollow
// const XO = str => str.replace(/[^x]/gi,'').length
// === str.replace(/[^o]/gi,'').length;
// Johannes485 XPFollow
// function XO(str) {
//   var arr = Array.from(str).map(ch => ch.toLowerCase());
//   return arr.filter( ch => ch === 'x').length === arr.filter( ch => ch === 'o').length;
// }
// Kristian740 XPFollow
// function XO(str) {
//   a = Array.from(str);
//   x =0;
//   o = 0;
//   a.forEach(function(c){
//     if(c.toUpperCase()=="X"){x++}
//     if(c.toUpperCase()=="O"){o++}
//   })
//   return x==o
// }
// CRB205 XPFollow
// function XO(str) {
//   var o = str.match(/o/gi) || [],
//       x = str.match(/x/gi) || []
//   return o.length == x.length ? true:false
// }
// pat333115 XPFollow
// function XO(str) {
//   const arr = str.toLowerCase().split('');
//   return arr.filter(x => x === 'x').length
//   == arr.filter(x => x === 'o').length;
// }
// blerp585 XPFollow
// function XO(str) {
//   var letters = str.toLowerCase().split('');
//   var x = letters.filter(c=>c === 'x');
//   var o = letters.filter(c=>c === 'o');
//   return x.length === o.length;
// }
// Martín410 XPFollow
// function XO(str) {
//   return (
//     str.toLowerCase().split('').filter(l => l === 'x').length
//     ===
//     str.toLowerCase().split('').filter(l => l === 'o').length
//   )
// }
// cacapoopoohead10 XPFollow
// function XO(str) {
//   var x = str.replace(/x/ig, "").length;
//   var o = str.replace(/o/ig, "").length;
//   return str.length - x === str.length - o;
// }
// cubby30 XPFollow
// function XO(str) {
//    function countLetter (str, letter) {
//      str = str.toLowerCase();
//      letter = letter.toLowerCase();
//      let count = 0;
//      for (let i = 0; i < str.length; i++) {
//        if (str[i] === letter) count++;
//      }
//      return count;
//    }
//   return (countLetter(str, 'x') === countLetter(str, 'o'));
// }
// KoodKing99160 XPFollow
// function XO(str) {
//   var result = str.toLowerCase();
//   var Xs = result.split("x");
//   var Os = result.split("o");
//   return Xs.length == Os.length;
// }
// naathhh30 XPFollow
// function XO(str) {
  
//   var countX = 0;
//   var countO = 0;
  
//   for (var i = 0; i<str.length;i++) {
//        if (str.charAt(i) === "X" || str.charAt(i) ===  "x") {
//       countX++;
//     }
//      if (str.charAt(i) == "O" || str.charAt(i) == "o") {
//         countO++;
//     }
//   }
//  if (countX == 0 && countO == 0 || countX == countO) {
//     return true;
//   } else {
//     return false;
//   }
  
// }
// dubbie195 XPFollow
// function XO(str) {
//   var x = 0;
//   var o = 0;
// ​
//   str.toLowerCase().split('').forEach(function (char) {
//     if (char == 'x') {
//       x++;
//     } else if (char == 'o') {
//       o++;
//     }
//   });
  
//   return x == o;
// }
// dique500 XPFollow
// function XO(str) {
//   var xs = [];
//   var os = [];
//   var arr = str.toLowerCase().split("");
  
//   for (i=0; i < arr.length; i++) {
//     if (arr[i] == "x") {
//       xs.push(arr[i]);
//     } else if (arr[i] == "o") {
//       os.push(arr[i]);
//     } else {
//       continue;
//     }
//   };
//   if (xs.length == os.length) {
//     return true;
//   } else {
//     return false;
//   }
// }
