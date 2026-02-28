//Problem Statement:Rearrange array elements by sign
function rearrangeArray(nums){
    let result=new Array(nums.length); let j=0; let k=1;
    for(let num of nums){
        if(num>=0){
            result[j]=num;
            j=j+2;
        }
        else {
            result[k]=num;
            k=k+2;
        }
    }return result;
}