//162. Find Peak Element

var findPeakElement = function(nums) {
    if (nums.length === 1) return 0;

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];

        let prev = (i === 0) ? -Infinity : nums[i - 1];
        let next = (i === nums.length - 1) ? -Infinity : nums[i + 1];

        if (current > prev && current > next) {
            return i;
        }
    }

    return 0;
};

console.log(findPeakElement([1,2,3,1]));        // 2
console.log(findPeakElement([1,2,1,3,5,6,4]));  // 1 or 5