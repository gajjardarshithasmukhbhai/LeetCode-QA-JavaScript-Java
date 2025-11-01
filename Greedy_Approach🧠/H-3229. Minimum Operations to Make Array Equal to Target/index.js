const minimumOperations = (nums, target) => {

    let prev = 0;
    let differenceOfArray = target.map((value, index) => value - nums[index]);

    let resultCount = 0;

    for(let i=0; i<differenceOfArray.length; i++) {
        let current = differenceOfArray[i];

        if((current < 0 && prev > 0) || (prev < 0 && current > 0)) {
            resultCount += Math.abs(current);
        }
        else if(Math.abs(prev) < Math.abs(current)) {
            resultCount += Math.abs(current - prev);
        }

        prev = current;
    }

    return resultCount;
}

console.log(minimumOperations([1,1,3,4], [4,1,3,2]));