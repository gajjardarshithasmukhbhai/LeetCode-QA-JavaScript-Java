const numberOfPaths = (grid, k) => {
    let mode = 1e9 + 7;
    const rows = grid.length;
    const cols = grid[0].length;

    // dp[row][col][sumMod] = ways
    const dp = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () =>
            Array(k).fill(-1)
)
);

    const helper = (row, column, sumMod) => {
        if (row >= rows || column >= cols) {
            return 0;
        }

        // Add current cell and reduce mod k
        sumMod = (sumMod + grid[row][column]) % k;

        // Base case: last cell
        if (row === rows - 1 && column === cols - 1) {
            return sumMod === 0 ? 1 : 0;
        }

        // Memoized result
        if (dp[row][column][sumMod] !== -1) {
            return dp[row][column][sumMod];
        }

        // Recursive calls
        let right = helper(row, column + 1, sumMod);
        let down = helper(row + 1, column, sumMod);

        dp[row][column][sumMod] = (right + down) % mode;
        return dp[row][column][sumMod];
    };

    return helper(0, 0, 0);
};

console.log(numberOfPaths([[5,2,4],[3,0,5],[0,7,2]], 3));