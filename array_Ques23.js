//Problem Statement: Print the matrix in spiral manner
class Solution {
    spiralOrder(matrix) {
        let arr=[];
        if(!matrix.length)return [];
        let m=matrix.length; let n=matrix[0].length;
        let left=0; let right=n-1;
        let top=0; let bottom=m-1;
        while(left<=right && top<=bottom){
            for(let j=left;j<=right;j++){
                arr.push(matrix[top][j]);
            }top++;
            
            for(let i=top;i<=bottom;i++){
                arr.push(matrix[i][right])
            }right--;

            if(top<=bottom){
            for(let j=right;j>=left;j--){
                arr.push(matrix[bottom][j]);
            }bottom--;}

            if(left<=right){
            for(let i=bottom;i>=top;i--){
                arr.push(matrix[i][left]);
            }left++;}

            
        }return arr;
    }
}