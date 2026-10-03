/*
PROBLEM STATEMENT:
Given an array of distinct integers 'arr' and an integer 'sum', count
the number of unique triplets of elements whose sum is strictly less
than 'sum'.

A triplet is identified only by the three elements it contains, so
different permutations of the same three elements are counted as one.

Example 1:
Input: sum = 2, arr[] = [-2, 0, 1, 3]
Output: 2
Explanation: Triplets with sum less than 2 are
(-2, 0, 1) and (-2, 0, 3).

Example 2:
Input: sum = 12, arr[] = [5, 1, 3, 4, 7]
Output: 4
Explanation: Triplets with sum less than 12 are
(1, 3, 4), (5, 1, 3), (1, 3, 7) and (5, 1, 4).
*/

function countTriplets(arr, sum) {
    const n = arr.length;
    arr.sort((a, b) => a - b);
    let resSum = 0;

    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const s = arr[i] + arr[left] + arr[right];

            if (s >= sum) {
                right--;
            } else if (s < sum) {
                resSum = resSum + (right - left);
                left++;
            }
        }
    }
    return resSum;
}

// --- TEST RUNNER ---

const testArr = [-2, 0, 1, 3];
const target = 2;

console.log("Result:", countTriplets(testArr, target));
// Expected Output: 2
