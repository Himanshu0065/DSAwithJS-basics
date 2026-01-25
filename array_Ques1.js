//Largest Element in an Array
function largestElement(arr){
    let max=arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }return max;
}
console.log(largestElement([10,25,15,20]))