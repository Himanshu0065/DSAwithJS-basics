// Sort an array of 0s, 1s and 2s
function sortZeroOneTwo(nums){
    let left =0;
    let right=nums.length-1;
    let mid=0;
    while(mid<=right){
        if(nums[mid]===0){
            [nums[left],nums[mid]]=[nums[mid],nums[left]]
            left++,mid++;
        }
        else if(nums[mid]===1){
            mid++;
        }
        else{
            [nums[mid],nums[right]]=[nums[right],nums[mid]];
            right--;
        }
    }return nums
}