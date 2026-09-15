/*
PROBLEM STATEMENT:
Given a sorted array 'nums', remove the duplicates in-place such that each 
element appears only once and returns the new length of the array. 
Do not allocate extra space for another array.

Example:
Input: nums = [2, 3, 3, 3, 6, 9, 9]
Output: 4 (The first 4 elements of the array become)
*/

function removeDuplicates(nums) {
    let left = 0;
    for(let right = 1; right < nums.length; right++){
        if(nums[left] != nums[right]){
            left++;
            nums[left] = nums[right];
        }
    }

    return left+1;
}

// --- TEST RUNNER ---
const testNums = [2, 3, 3, 3, 6, 9, 9];
const newLength = removeDuplicates(testNums);
console.log("New Length:", newLength);
console.log("Modified Array:", testNums.slice(0, newLength));
// Expected Output: 
// New Length: 4
// Modified Array: [2, 3, 6, 9]
