// Return indices of the two numbers such that their sum is equal to 
// the target. Otherwise, we will return {-1, -1}.
function twoSum(nums,k){
 let myMap=new Map();
  for(let i=0;i<nums.length;i++){
    if(myMap.has(k-nums[i])){
      let j=myMap.get(k-nums[i]);
      let temp=[i,j]
      return temp;
    }
    else myMap.set(nums[i],i)
  }
 return  ([-1,-1]);
}
console.log(twoSum([0,0],14))