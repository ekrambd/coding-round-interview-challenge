//905. Sort Array By Parity

var sortArrayByParity = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while(left < right){

        if(nums[left] % 2 === 0){
            left++;
            continue;
        }

        if(nums[right] % 2 === 1){
            right--;
            continue;
        }

        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;

        left++;
        right--;
    }
    
    return nums;
};


console.log(sortArrayByParity([3,1,2,4]));
console.log(sortArrayByParity([0]));