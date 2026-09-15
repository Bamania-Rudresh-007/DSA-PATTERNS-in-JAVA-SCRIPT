/*
PROBLEM STATEMENT:
Given an array containing only 0s and 1s, rearrange the array in-place 
so that all 0s come before all 1s.

Example:
Input: nums = [1, 0, 1, 1, 0, 0, 1]
Output: [0, 0, 0, 1, 1, 1, 1]
*/

function rearrange0sAnd1s(nums) {
    let left = 0;

    for(let right = 0; right < nums.length; right++){
        if(nums[right] !== 1){
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++
        }
    }
}

// --- TEST RUNNER ---
const testNums = [1, 0, 1, 1, 0, 0, 1];
rearrange0sAnd1s(testNums);
console.log("Result:", testNums);
// Expected Output: [0, 0, 0, 1, 1, 1, 1]
