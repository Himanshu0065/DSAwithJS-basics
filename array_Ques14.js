// Problem Statement: Find the Majority Element that occurs more than N/2 times.
function majorityElement(nums){
    function majorityEle(nums){
 let n=nums.length/2;
 let candidate=0;let vote=0;
 for(let num of nums){
   if(vote===0){
     candidate=num
   }
   if(candidate===num)vote++;
   else vote--
   }
    
  return candidate;
}
console.log(majorityEle([1, 1, 1, 2, 1, 2]  ));
}
