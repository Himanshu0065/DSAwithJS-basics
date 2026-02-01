//Given an integer array of size n containing distinct values in the range from 0
//-n (inclusive), return the only number missing from the array within this range.
function missingNumber(nums){
    let n=(nums.length*(nums.length+1))/2;
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    let missingNum=n-sum;
    return missingNum;
}
console.log(missingNumber([0, 2, 3, 1, 4]))