//Problem Statement: Longest Consecutive Sequence in an Array
function longestConsecutive(nums){
    let longest=0; let mySet=new Set(nums);
    for(let num of mySet){
        let y=num+1;
        if(!mySet.has(num-1)){
            let count=1;
            while(mySet.has(y)){
                count++;y++;
            }
            longest=Math.max(longest,count);
        }
    }return longest;
}