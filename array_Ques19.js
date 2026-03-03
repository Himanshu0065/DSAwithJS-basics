//Problem Statement: Leaders in an Array
function leaders(nums){
    let lead=nums[nums.length-1];
    let arr=[nums[nums.length-1]];
    for(let i=nums.length-2;i>=0;i--){
        if(nums[i]>lead){
            arr.push(nums[i]);
            lead=nums[i];
        }
    }
    let left=0; let right=arr.length-1;
    while(left<=right){
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left++;right--;
    }return arr;
}