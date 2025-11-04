/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let stringToArray = s.split("");
     let distinctValues = [];
     let maxLength = 0;
 
     for (let i = 0; i < stringToArray.length; ++i) {
         let char = stringToArray[i];
         if (!distinctValues.includes(char)) {
             distinctValues.push(char);
         } else {
             // Update maxLength and distinctValues if a repeated character is found
             maxLength = Math.max(maxLength, distinctValues.length);
             distinctValues = distinctValues.slice(distinctValues.indexOf(char) + 1);
             distinctValues.push(char);
         }
     }
 
     // Final check for maxLength after the loop
     maxLength = Math.max(maxLength, distinctValues.length);
 
     return maxLength;
 };