const maxMatrixSum = (matrix) => {
    let negativeCount = 0;
    let minNum = -Infinity;
    let result = 0;

    for(let i=0;i<matrix.length;i++) {
        for(let j=0; j<matrix[0].length; j++){
            if(matrix[i][j]<0) {
                ++negativeCount;
            }
            minNum = Math.min(minNum, Math.abs(matrix[i][j]));
            result += Math.abs(matrix[i][j]);
        }
    }

    if(negativeCount%2 === 0) {
        return result;
    }
    else {
        return result - 2*minNum;
    }
};