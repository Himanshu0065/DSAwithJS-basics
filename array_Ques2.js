//Problem Statement: Given an array, find the second smallest 
// and second largest element in the array. Print ‘-1’ in the 
// event that either of them doesn’t exist.
let arr=[];
function second(arr){
    let smallest=arr[0];
    let secondSmallest=Infinity;
    let largest=arr[0];
    let secondLargest=-Infinity;
    for(i=1;i<arr.length;i++){
        if(arr[i]<smallest){
            secondSmallest=smallest;
            smallest=arr[i];
        }else if(arr[i]<secondSmallest && arr[i]!==smallest){
            secondSmallest=arr[i];
        }
        if(arr[i]>largest){
            secondLargest=largest;
            largest=arr[i];
        }
        else if(arr[i]>secondLargest && arr[i]!==largest){
            secondLargest=arr[i];
        }}
        if(secondSmallest==Infinity || secondLargest==-Infinity){
            return -1;
        }
    return [secondSmallest,secondLargest]
}
let result=second([10,20,5,25,40,50])
console.log(result);