//Kadane's Algorithm : Maximum Subarray Sum in an Array
function maxSubArraySum(nums){
    let maxSum=-Infinity;
    let currentSum=0;
    let start=0; let end=0; let s=0;
    for(let i=0;i<nums.length;i++){
        currentSum+=nums[i];
        if(currentSum>maxSum){
            maxSum=currentSum;
            start=s;
            end=i;
        }
        if(currentSum<0){
            currentSum=0;
            s=i+1;
        }
    }let subArray=nums.slice(start,end+1);
    return subArray;
}