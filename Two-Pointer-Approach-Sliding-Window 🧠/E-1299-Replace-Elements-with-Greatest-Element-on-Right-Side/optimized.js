const arr = [17, 18, 5, 4, 6, 1];

const replaceElements = (arr) => {
    let maxValue = -1; // Initialize to -1 for proper functionality
    let i = 0;
    let j = i + 1;
    let result = [];

    console.log("cool");
    while (i < arr.length) {
        if (j < arr.length) {
            maxValue = Math.max(maxValue, arr[j]);
            j++;
        } else {
            result.push(maxValue);
            maxValue = -1; // Reset to -1 for the next segment
            i++;
            j = i + 1;
        }
    }
    return result;
};

console.log(replaceElements(arr)); // Output: [18, 6, 6, 6, 1, -1]
