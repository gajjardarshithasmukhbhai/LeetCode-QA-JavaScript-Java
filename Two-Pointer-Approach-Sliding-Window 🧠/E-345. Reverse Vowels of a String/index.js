
const reverseVowels = (s) =>  {
     const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
     
     let splitValue = s.split('');

     let left = 0;
     let right = splitValue.length-1;

     while(left<=right) {
        if(vowels.includes(splitValue[left]) && vowels.includes(splitValue[right])) {
            let tempValue = splitValue[right];
            splitValue[right] = splitValue[left];
            splitValue[left] = tempValue;
            right--;
            left++;
        }
        else if(vowels.includes(splitValue[right]) && !vowels.includes(splitValue[left])) {
            left++;
        }
        else if(vowels.includes(splitValue[left]) && !vowels.includes(splitValue[right])) {
            right--;
        }
        else {
            left++;
            right--;
        }
     }
     return splitValue.join('')
};


// more optimized

const reverseVowels = (s) =>  {
     const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
     
     let splitValue = s.split('');

     let left = 0;
     let right = splitValue.length-1;

     while(left<=right) {
        if(!vowels.includes(splitValue[left])) {
            left++;
            continue;
        }
        else if(!vowels.includes(splitValue[right])) {
            right--;
            continue;
        }
        [splitValue[left], splitValue[right]] = [splitValue[right], splitValue[left]]
        right--;
        left++;
    }
     return splitValue.join('')
};