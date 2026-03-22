let maxSumSubarray = function(arr, k) {
    let left = 0;
    let windowSum = 0;
    let maxSum = 0;
    for(let right = 0; right < arr.length; right++)
    {
        windowSum+=arr[right];
        if(right-left+1 > k){
            windowSum-=arr[left];
            left++;
        }
        if(right-left+1 == k){
            maxSum = Math.max(maxSum,windowSum);
        }
    }
    return maxSum;          
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9