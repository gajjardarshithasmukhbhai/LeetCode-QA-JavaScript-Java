const maxScore = (cardPoints, k) => {
    let left = 0;
    let totalLength = cardPoints.length;

    let sum = 0;

    let maxScore = 0;
    
    for(let i=0;i<k;i++) {
        sum = sum + cardPoints[i];
    }
    maxScore = sum;
    for(let j=1; j<=k;j++) {
        sum = sum - cardPoints[k-j] + cardPoints[totalLength-j];
        maxScore = Math.max(maxScore, sum);
    }

    return maxScore;

};
console.log(maxScore([1,2,3,4,5,6,1],3));