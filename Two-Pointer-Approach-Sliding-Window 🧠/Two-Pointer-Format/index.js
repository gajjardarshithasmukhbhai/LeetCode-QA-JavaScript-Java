// give the consecutive max value
const array = [-1,2,3,2,1,-2,5,4,3,7,1];
const k = 4;

const getConsecutiveMaxSum = (values) => {
    let left = 0;
    let right = k-1;
    let maxValue = 0;
    let sum = 0;
    // get the Values of window

    for(let i=0;i<k;i++) {
        sum +=values[i];
    }
    maxValue = sum;
    while(right < values.length-1) {
        sum = sum-values[left];
        left++;
        right++;
        sum = sum + values[right];
        maxValue = Math.max(sum, maxValue);
    }
    return maxValue;
}
console.log(getConsecutiveMaxSum(array));