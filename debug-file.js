const maxProfit = (prices) => {
    const monotonicStack = [];

    let result = 0;

    monotonicStack.push(prices[0]);

    for(let i=1;i<prices.length;i++) {
        if(prices[i] < monotonicStack[monotonicStack.length-1]) {
            monotonicStack.push(prices[i]);
        }
        else {
            result = Math.max(result, prices[i] - monotonicStack[monotonicStack.length-1]);
        }
    }
    return result;
}

console.log(maxProfit([7,1,5,3,6,4]));