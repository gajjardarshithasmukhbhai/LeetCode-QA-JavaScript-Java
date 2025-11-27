const numberOfPaths = (grid, k) => {
    let result = 0;

    const helper = (row, column, sum) => {
        if (row >= rows || column >= cols) {
            return;
        }

        if (row === rows - 1 && column === cols - 1) {
            if((sum + grid[row][column]) % k === 0) {
                ++result;
                return;
            }
            return;
        }

        helper(row, column + 1, sum+grid[row][column]);
        helper(row + 1, column, sum+grid[row][column]);
    };

    helper(0, 0, 0);

    return result;
};

console.log(numberOfPaths([[5,2,4],[3,0,5],[0,7,2]], 3));