/**
 * @param {number[]} nums
 * @return {number}
 */
const maxFrequencyElements = (nums) => {
  let frequency = new Map();

  let result = [];
  for(let i=0;i<nums.length;i++) {
    frequency.set(nums[i], (frequency.get(nums[i]) || 0) + 1);
}  
  let maxFreqValue = Math.max(...frequency.values());

  let value = [...frequency.values()];
  console.log('value: ', value);
  for(let i=0;i<value.length;i++) {
    if(maxFreqValue === value[i]) {
        result.push(value[i]);
    }
  }
  return maxFreqValue*result.length;
};
