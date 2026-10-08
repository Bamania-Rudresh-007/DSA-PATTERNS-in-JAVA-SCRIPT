/* 
PROBLEM STATEMENT: 
Given an array of integers 'arr' and a number 'k', find the maximum sum of a 
contiguous subarray of size 'k'.

Example 1:
Input: k = 3, arr[] = [2, 1, 5, 1, 3, 2]
Output: 9
Explanation: The subarray with the maximum sum of size 3 is [5, 1, 3] which sums to 9.

Example 2:
Input: k = 2, arr[] = [2, 3, 4, 1, 5]
Output: 7
Explanation: The subarray with the maximum sum of size 2 is [3, 4] which sums to 7.
*/

function maxSubarraySum(arr, k)     {
    const n = arr.length;
    let sum = 0;
    let res = sum;
    
    for(let i = 0; i < k; i++){
        sum += arr[i];
    }

    let low = 0;

    for(let high = k; high < n; high++){
        res = Math.max(res, sum);
        low++;

        sum = sum - arr[low-1];
        sum = sum + arr[high];
    }
    return res;
}

// --- TEST RUNNER ---
const testArr1 = [2, 1, 5, 1, 3, 2];
const k1 = 3;
console.log("Test 1 Result:", maxSubarraySum(testArr1, k1)); // Expected Output: 9

const testArr2 = [2, 3, 4, 1, 5];
const k2 = 2;
console.log("Test 2 Result:", maxSubarraySum(testArr2, k2)); // Expected Output: 7
