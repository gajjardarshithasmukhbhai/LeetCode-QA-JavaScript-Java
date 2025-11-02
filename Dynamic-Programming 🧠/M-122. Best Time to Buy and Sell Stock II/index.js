const maxProfit = (prices) => {
    const memoization = Array.from({length: prices.length}, () => Array(2).fill(-1));

    const helper = (index, canbuy) => {
        
        // base case
        if(index === prices.length) {
            return 0;
        }

        if(memoization[index][canbuy]!==-1) return memoization[index][canbuy];

        let profit = 0;
        
        if(canbuy) {
            // buying the stock --> so false ==--> so you have to sold first that's why it's false
            let buy = -prices[index] + helper(index+1, 0);

            // skip means, I already sold the stock. Now I can buy the stock
            let skip = helper(index+1, 1);

            profit = Math.max(buy, skip);
        } else {
            let sell = prices[index] + helper(index+1, 1);
            let skip = helper(index+1, 0);
            
            profit = Math.max(sell, skip);
        }

        memoization[index][canbuy] = profit;
        return profit;
    }

    return helper(0, 1);
};