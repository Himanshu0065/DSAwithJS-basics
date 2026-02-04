//Problem Statement: Given an array nums of size n and an integer k, 
// find the length of the longest sub-array that sums to k. 
// If no such sub-array exists, return 0.
function longestSubarray(nums,k){
    let sum=0; let longest=0;
    let myMap=new Map();
    myMap.set(0,-1);
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        let temp=sum-k;
        let currentSum=0;
        if(myMap.has(temp)){
          currentSum=i-myMap.get(temp);
          if(currentSum>longest) longest=currentSum; 
        }
        if(!myMap.has(sum)){
            myMap.set(sum,i)
        }
    }return longest;
}