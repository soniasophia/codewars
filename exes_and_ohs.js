/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.
*/


function XO(str) {
  //Take in the string as lowercase characters to make it case insensitive.
  var str = str.toLowerCase();

  //Turn the string into an array.
  var arrayOfCharacters = str.split("");

  //Count the number of exes within the array using the .reduce method which can take in arguments of accumulator and value. Return the number of exes within the array.
  var countX = arrayOfCharacters.reduce(function(n, val) {
    return n + (val === 'x');
  }, 0);
  
  //Count the number of ohs within the array using the .reduce method which can take in arguments of accumulator and value. Return the number of ohs within the array.
   var countO = arrayOfCharacters.reduce(function(n, val) {
     return n + (val === 'o');
    }, 0);
    
  //Check to see if the number of exes is equal to the number of ohs. If yes, return true. Else, return false.   
   if (countX == countO) {
   return true;
   } else {
   return false;
   }
}