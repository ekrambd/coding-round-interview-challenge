//164. Maximum Gap

var maximumGap = function(nums) {
    if (nums.length < 2) return 0;

    nums.sort((a, b) => a - b);

    let maxGap = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        let diff = nums[i+1] - nums[i];
        maxGap = Math.max(maxGap, diff);
    }

    return maxGap;
};

console.log(maximumGap([3,6,9,1]));
console.log(maximumGap([10]));