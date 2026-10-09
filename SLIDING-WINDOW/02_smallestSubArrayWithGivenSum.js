/* 
PROBLEM STATEMENT: 
Given an array of positive integers 'arr' and a target sum 'S', find the length of the 
smallest contiguous subarray whose sum is greater than or equal to 'S'. 
Return 0 if no such subarray exists.

Example 1:
Input: S = 7, arr[] = [2, 1, 5, 2, 3, 2]
Output: 2
Explanation: The smallest subarray with a sum >= 7 is [5, 2] which has a length of 2.

Example 2:
Input: S = 7, arr[] = [2, 1, 5, 2, 8]
Output: 1
Explanation: The smallest subarray with a sum >= 7 is [8] which has a length of 1.

Example 3:
Input: S = 8, arr[] = [3, 4, 1, 1, 6]
Output: 3
Explanation: Smallest subarrays with a sum >= 8 are [3, 4, 1] or.
*/

function smallestSubarrayWithGivenSum(arr, S) {
    const n = arr.length;

    let res = Infinity;
    let sum = 0;

    let low = 0;
    for(let high = 0; high < n; high++){
        sum += arr[high];

        while(sum >= S){
            res = Math.min(res, high-low+1);
            sum -= arr[low];
            low++;
        }
    }
    return res === Infinity ? 0 : res;;
}

// --- TEST RUNNER ---
const testArr1 = [2, 1, 5, 2, 3, 2];
const S1 = 7;
console.log("Test 1 Result:", smallestSubarrayWithGivenSum(testArr1, S1)); // Expected Output: 2

const testArr2 = [2, 1, 5, 2, 8];
const S2 = 7;
console.log("Test 2 Result:", smallestSubarrayWithGivenSum(testArr2, S2)); // Expected Output: 1

const testArr3 = [3, 4, 1, 1, 6];
const S3 = 8;
console.log("Test 3 Result:", smallestSubarrayWithGivenSum(testArr3, S3)); // Expected Output: 3
