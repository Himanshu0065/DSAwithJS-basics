//Problem: Stock Buy And Sell
function stockBuySell(nums){
  let i=0;let minPrice=nums[0]; let maxProfit=0;let currentProfit;
  for(let j=1;j<nums.length;j++){
    if(minPrice>nums[j]){
      minPrice=nums[j];
    }
    else{
      currentProfit=nums[j]-minPrice;
    }
    if(currentProfit>maxProfit)maxProfit=currentProfit;
  }
  return maxProfit
}
console.log(stockBuySell([7,1,5,3,6,4]))