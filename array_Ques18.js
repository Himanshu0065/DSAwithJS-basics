//Problem Statement:Finding the Next Permutation
function nextPermutation(nums){
    let toSwap=-1;let smallest=-1;
    for(let i=nums.length-2;i>=0;i--){
        if(nums[i]<nums[i+1]){
            toSwap=i;
            break;
        }
    }
    if(toSwap!==-1){
        for(let i=nums.length-1;i>toSwap;i--){
            if(nums[i]>nums[toSwap]){
                smallest=i;break;
            }
        }
        [nums[toSwap],nums[smallest]]=[nums[smallest],nums[toSwap]];
    }
    let left=toSwap+1;let right=nums.length-1;
    while(left<=right){
        [nums[left],nums[right]]=[nums[right],nums[left]];
        left++,right--;
    }
    return nums;
}