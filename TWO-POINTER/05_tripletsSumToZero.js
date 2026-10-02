/*
PROBLEM STATEMENT:
Given an numsay of unsorted integers 'nums', find all unique triplets 
in it whose sum is equal to zero (a + b + c = 0).

Example:
Input: nums = [-3, 0, 1, 2, -1, 1, -2]
Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
*/

function searchTriplets(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let result = [];

    for(let i = 0; i < n; i++){

        if(i > 0 && nums[i] === nums[i-1]){
            continue;
        }

        let left = i+1;
        let right = n-1;
        const target = -1 * nums[i];

        while(left < right){
            const sum = nums[left] + nums[right];

            if(sum === target){
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while(nums[left] === nums[left-1]){
                    left++;
                }
                while(nums[right] === nums[right+1]){
                    right--;
                }
            }
            else if(sum > target){
                right--;
            }
            else{
                left++;
            }
        }
    }
    return result;
}

// --- TEST RUNNER ---
const testNums = [-3, 0, 1, 2, -1, 1, -2];
console.log("Result:", searchTriplets(testNums));
// Expected Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]] (order of triplets may vary)
