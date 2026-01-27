// Problem Statement- Given an integer array nums, 
// rotate the array to the right by k steps, where k is non-negative.
const rotate=function(nums,k){
    let arr=[...nums]
    k=k%nums.length;
    for(let i=0;i<nums.length;i++){
        nums[(i+k)%nums.length]=arr[i];
    }return nums;
}
console.log(rotate([10,20,30,40,50],2))