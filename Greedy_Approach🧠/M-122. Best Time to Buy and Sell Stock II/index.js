const maxProfit = (prices) => {
    let result = 0;

    for(let i=1;i<prices.length;i++) {
        if(prices[i]>prices[i-1]) {
            result += (prices[i] - prices[i-1]);
        }
    }
    return result;
};