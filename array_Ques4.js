// Remove Duplicates from Sorted Array
function removeDuplicate(nums){
    let i=0;
    for(let j=0;j<nums.length;j++){
        if(nums[j]!==nums[i]){
            i++;
            nums[i]=nums[j];
        }
    }return i+1
}
console.log(removeDuplicate([1,1,2,2,3]))