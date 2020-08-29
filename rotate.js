var nums = [1,2,3,5,8,7,6,4];
var ids = [1,2,3,6,9,8,7,4];

var btn5 = document.getElementById("btn5");

btn5.addEventListener("click",function(){
   nums.unshift(nums.pop());
    for(var i = 0; i< ids.length ; i++){
        document.getElementById("btn"+ids[i]).innerHTML = nums[i];
    }
});