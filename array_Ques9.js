//Problem Statement: Given an array that contains only 1 and 0 return the 
// count of maximum consecutive ones in the array..
function findMaxConsecutiveOne(nums){
    let j=0;
    let maxOne=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            j++;
        }
        else j=0;
        if(j>maxOne) maxOne=j;
    }return maxOne;
}