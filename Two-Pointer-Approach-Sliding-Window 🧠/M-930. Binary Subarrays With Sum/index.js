/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    return atMost(nums, goal) - atMost(nums, goal - 1);
};

function atMost(nums, goal) {
    if (goal < 0) return 0;

    let l = 0, sum = 0, cnt = 0, r = 0;

    while(r<nums.length) {
        sum += nums[r];

        while (sum > goal) {
            sum -= nums[l];
            l++;
        }

        cnt += r - l + 1;
        r++;
    }

    return cnt;
}