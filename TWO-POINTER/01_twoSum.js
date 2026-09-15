/*
PROBLEM STATEMENT:
Given an array of integers 'nums' that is already sorted in ascending order, 
find two numbers such that they add up to a specific 'target' number. 
Return the indices of the two numbers (0-indexed).

Example:
Input: nums = [1, 2, 3, 4, 5], target = 9
*/

function twoSum(nums, target) {
    let left = 0, right = nums.length-1;

    while(left < right){
        const sum = nums[left] + nums[right];

        if(sum === target){
            return [left+1, right+1];
        }
        else if(sum < target){
            left++;
        }
        else{
            right--;
        }
    }

}

// --- TEST RUNNER ---
const testNums = [1, 2, 3, 4, 5]; 
const testTarget = 6;
console.log("Result:", twoSum(testNums, testTarget)); 

