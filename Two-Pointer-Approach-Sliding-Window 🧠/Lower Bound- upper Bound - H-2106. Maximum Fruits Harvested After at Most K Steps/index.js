const lowerBound = (arr, target) => {
    let left = 0;
    let right = arr.length;

    while(left<right) {
        let mid = Math.floor((left+right)/2);

        if(arr[mid]<target) {
            left = mid+1;
        }
        else {
            right = mid;
        }
    }
    return left;
};

const upperBound = (arr, target) => {
    let left = 0; 
    let right = arr.length;
    
    while(left<right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] <= target) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return left;
};

const maxTotalFruits = (fruits, startPos, k) => {
    const array = fruits.length;
    const prefixSum = [];
    const positions = [];

    for (let index = 0; index < array; index++) {
        positions[index] = fruits[index][0]; 
        prefixSum[index] = fruits[index][1] + (index > 0 ? prefixSum[index-1]: 0); 
    }

    let maxFruits = 0;
    for(let d=0;d <= Math.floor(k/2); d++) {
        // case: 1 If we consider this one
        let remain = k-2*d;
        let i = startPos - d;
        let j = startPos + remain;

        let left = lowerBound(positions, i);
        let right = upperBound(positions, j)-1;
        
        // Invalid Case
        if(left <=right) {
            let total = prefixSum[right] - (left > 0 ? prefixSum[left-1]: 0);
            maxFruits = Math.max(maxFruits, total);
        }

        // for case 2:
        // right to left
        i = startPos - remain;
        j = startPos + d;

        
        left = lowerBound(positions, i);
        right = upperBound(positions, j)-1;
        
        if(left <=right) {
            let total = prefixSum[right] - (left > 0 ? prefixSum[left-1]: 0);
            maxFruits = Math.max(maxFruits, total);
        }
    }
    return maxFruits
};

console.log(maxTotalFruits([[2,8],[6,3],[8,6]], 5,4));