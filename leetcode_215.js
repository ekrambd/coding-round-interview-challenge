//215. Kth Largest Element in an Array

var findKthLargest = function(nums, k) {
    nums.sort((a,b)=>b-a);
    let result = nums[k-1];
    return result;    
};

console.log(findKthLargest([3,2,1,5,6,4],2));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4));