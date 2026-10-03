/*
PROBLEM STATEMENT:
Given an numsay of integers 'nums' and an integer 'target', find three
integers at distinct indices in nums such that their sum is closest
to the target.

Return the sum of those three integers.

Example 1:
Input: nums = [-1, 2, 1, -4], target = 1
Output: 2
Explanation: The sum closest to the target is 2.
(-1 + 2 + 1 = 2)

Example 2:
Input: nums = [0, 0, 0], target = 1
Output: 0
Explanation: The sum closest to the target is 0.
(0 + 0 + 0 = 0)
*/

function threeSumClosest(nums, target) {
    const n = nums.length;
    nums.sort((a,b) => a - b);

    let maxDiff = Infinity;
    let sum = 0;

    for(let i = 0; i < n-2; i++){

        if(i > 0 && nums[i] === nums[i-1]){
            continue;
        }

        let left = i+1;
        let right = n-1;

        while(left < right){
            const s = nums[i] + nums[left] + nums[right];
            const diff = Math.abs(s - target);

            if(diff < maxDiff){
                maxDiff = diff;
                sum = s;
            }
            
            if(s === target){
                left++;
                right--;

                while(left < right && nums[left] === nums[left-1]){
                    left++;
                }
                while(left < right && nums[right] === nums[right+1]) {
                    right--;
                }
            }
            else if(s > target){
                right--;
            }
            else{
                left++;
            }
        }
    }
    return sum;
}

// --- TEST RUNNER ---

const testNums = [-1, 2, 1, -4];
const target = 1;

console.log("Result:", threeSumClosest(testNums, target));
// Expected Output: 2
