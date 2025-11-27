const countOfSteps = (target) => {
  let count = 0;
  
  const helper = (sum) => {
    if(sum === target) {
      count++;
      return;
    }
    if(sum>target) {
      return;
    }
    helper(sum+1);
    helper(sum+2);
  }
  // count, sum
  helper(0);
  return count;
}
console.log(countOfSteps(4));
