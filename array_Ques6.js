//Problem Statement- Given an integer array nums,move all 0's to the end of it 
// while maintaining the relative order of the non-zero elements.
function moveZeroes(nums){
    let j=-1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            j=i;
            break;
        }
    }
    if(j===-1)return nums;
    for(let i=j+1;i<nums.length;i++){
        if(nums[i]!==0){
            let temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
            j++;
        }
    }return nums;
}
console.log(moveZeroes([10,20,0,30,0,40,0,50]))