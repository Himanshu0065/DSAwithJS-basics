//Check if Array Is Sorted and Rotated
function check(nums){
    let count=0;
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]>nums[i+1]){
            count++;
        }
    }
    if(nums[nums.length-1]>nums[0]){
        count++;
    }
    if(count<=1)return true;
    else return false;
}
console.log(check([3,4,5,1,2]))