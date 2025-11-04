// count the Anagram through the while loop 

let s = "cbaebabacd";
let p = "cba";

function countTheAnagram(value, windowSize) {
    let j = 0;
    let i = 0;
    let resultantStr = {};
    let windowSizeLen = windowSize.length;
    let result = [];
    for (let i = 0; i < windowSizeLen; i++) {
        resultantStr[windowSize[i]] = (resultantStr[windowSize[i]] || 0) + 1;
    }
    let count = Object.keys(resultantStr).length;

    while (j < value.length) {
        if (resultantStr[value[j]] !== undefined) {
            resultantStr[value[j]]--;
            if (resultantStr[value[j]] === 0) {
                count--;
            }
        }
        if (j - i + 1 < windowSizeLen) {
            j++;
        }
        else if (j - i + 1 === windowSizeLen) {
            // Logic come on this place
            if (count === 0) {
                result.push(i);
            }
            // but in this case window is slide here
            if (resultantStr[value[i]] !== undefined) {
                resultantStr[value[i]]++;
                if (resultantStr[value[i]] === 1) {
                    count++;
                }
            }

            i++;
            j++
        }
    }
    return result;
}
console.log(countTheAnagram(s, p));