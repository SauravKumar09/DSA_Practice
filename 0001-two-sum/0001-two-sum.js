/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // **** Two Pointers Approach
    // for(let i=0; i<=nums.length; i++){
    //     for (let j=i+1; j<=nums.length; j++){
    //         if (nums[i] + nums[j] === target){
    //             return [i, j];
    //         }
    //     }
    // }

    // return [];


    //**** HashMap Approach  */ 
    // Time complexity: O(n)
    // Space complexity: O(n)
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        const comp = target - nums[i];
        if(map.has(comp)){
            return [map.get(comp), i];
        }
        map.set(nums[i], i);
    }
};