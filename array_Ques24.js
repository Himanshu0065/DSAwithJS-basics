//Problem Statement: Count subarrays with given sum
function subarraySum(nums, k) {
        let sum=0;let count=0;
        let myMap=new Map();
        myMap.set(0,1);
        for(let i=0;i<nums.length;i++){
            sum+=nums[i];
            if(myMap.has(sum-k)){
               
                count+=myMap.get(sum-k);
            }
             myMap.set(sum,(myMap.get(sum)||0)+1);
        }return count;    
    }