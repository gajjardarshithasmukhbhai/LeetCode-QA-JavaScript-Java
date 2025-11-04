const twoSum = (numbers, target) => {
    const result  = [];

    let i=0;
    let j=numbers.length-1;

    while(i<numbers.length && j>i) {
        if(numbers[i] + numbers[j] > target) {
            --j;
        }
        else if(numbers[i]+numbers[j] === target) {
            result.push(i+1);
            result.push(j+1);
            break;
        }
        else {
            i++;
        }
    }
    return result;
};