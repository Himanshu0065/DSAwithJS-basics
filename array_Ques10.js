//Problem Statement: Given a non-empty array of integers arr, 
// every element appears twice except for one. Find that single one.
function uniqueNumber(nums){
    let sum=nums[0];
    for(let i=1;i<nums.length;i++){
      sum^=nums[i];
    }return sum;
}