/**
 * @param {number} n
 * @return {number}
 */
const totalMoney = (n) => {
    let result = 0;
    for(let i=0;i<n;i++) {
      result += Math.floor(i/7)+ (i%7)+1;  
    }
    return result;
};