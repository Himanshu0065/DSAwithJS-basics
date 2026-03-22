//Problem Statement: Given an m x n integer matrix matrix, if an element is 0, set its entire
// row and column to 0. You must do it in place.
function setZeroes(matrix){
    let m=matrix.length; let n=matrix[0].length;
    let col0=1;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]===0){
                matrix[i][0]=0;
                if(j!=0){
                    matrix[0][j]=0
                }
                else col0=0;
            }
        }
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            if(matrix[i][0]==0 || matrix[0][j]==0){
                matrix[i][j]=0;
            }
        }
    }
    if(matrix[0][0]===0){
        for(let j=0;j<n;j++){
            matrix[0][j]=0;
        }
    }
    if(col0===0){
        for(let i=0;i<m;i++){
            matrix[i][0]=0;
        }
    }
    return matrix;
}