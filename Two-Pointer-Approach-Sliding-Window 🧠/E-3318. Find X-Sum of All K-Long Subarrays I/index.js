const findXSum = (nums, k, x) => {
    let occurencesCount = new Map();

    let result = [];

    // take the First k subarrays
    for(let i=0;i<k;i++) {
        occurencesCount.set(nums[i], (occurencesCount.get(nums[i]) || 0)+1);
    }

    const getFirstTwoValue = () => {
         let keyWithValue = [...occurencesCount];

         keyWithValue.sort((a,b) => {
            if(a[1] === b[1]) {
                return b[0] - a[0];
            }
            return b[1] - a[1];
        });

        let temp = 0;
        for (let i = 0; i < x && i < keyWithValue.length; i++) {
            temp += keyWithValue[i][0] * keyWithValue[i][1];
        }
        return temp;
    }

    result.push(getFirstTwoValue());

    // slide the window --> so we can get via interval frame
    for(let i=1;i+k-1<nums.length;i++) {
        let oldValue = nums[i-1];
        let newValue = nums[i+k-1];

        occurencesCount.set(oldValue, occurencesCount.get(oldValue)-1);
        if(occurencesCount.get(oldValue) === 0) {
            occurencesCount.delete(oldValue);
        }
        occurencesCount.set(newValue, (occurencesCount.get(newValue) || 0)+1);
        
        result.push(getFirstTwoValue());
    }

    return result;
};
