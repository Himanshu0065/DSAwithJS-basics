//Given two sorted arrays nums1 and nums2, return an array that contains the 
// union of these two arrays. The elements in the union must be in ascending order.

// The union of two arrays is an array where all values are distinct and are
//  present in either the first array, the second array, or both.
function unionArray(arr1,arr2){
    let union=[];
    let i=0;
    let j=0;
    let value=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            value=arr1[i];
            i++;
        }
        else if(arr1[i]>arr2[j]){
            value=arr2[j];
            j++;
        }
        else{
            value=arr1[i];
            i++;
            j++;
        }
        if(union.length===0 || value!==union[union.length-1]){
            union.push(value);
        }
    }
    while(i<arr1.length){
        if(arr1[i]!==union[union.length-1]){
            union.push(arr1[i]);
            
        }i++;
    }
    while(j<arr2.length){
        if(arr2[j]!==union[union.length-1]){
            union.push(arr2[j]);
            
        }j++
    }return union;

}