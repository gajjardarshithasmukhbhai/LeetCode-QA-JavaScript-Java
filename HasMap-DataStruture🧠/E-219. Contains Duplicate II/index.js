let containsNearbyDuplicate = (nums, k) => {
    let map = new Map();

    for(let i=0;i<nums.length; i++) {
        map.set(i, nums[i]);
    }

    let resultOfKeys = [...map].sort((a,b) => {
        if(a[1]!==b[1]) {
            return a[1]-b[1];
        }
        return a[0]-b[0];
    });

    for(let i=1;i<resultOfKeys.length;i++) {
        if (resultOfKeys[i][1] === resultOfKeys[i - 1][1]) {
            if(Math.abs(resultOfKeys[i][0]-resultOfKeys[i-1][0])<=k) {
                return true;
            }
        }
    }   
    return false;
};