//Problem Statement: Rotate Matrix by 90 degree.
function rotateMatrix(matrix){
    let m=matrix.length; let n=matrix[0].length;
    for(let i=0;i<m;i++){
            for(let j=i;j<n;j++){
                [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];
            }
        }
        for(let i=0;i<m;i++){
            let left=0; let right=n-1;
            while(left<right){
            [matrix[i][left],matrix[i][right]]=[matrix[i][right],matrix[i][left]];
            left++;right--;
            }
        }
    }
