/*
PROBLEM STATEMENT:
Given a sorted array 'nums', create a new array containing squares of 
all the numbers of the input array, sorted in ascending order.

Example:
Input: nums = [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
*/

function makeSquares(nums) {

    let result = [];

    let nNums = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 0) nNums++;
        nums[i] *= nums[i];
    }


    let Plow = nNums+1;
    let Nhigh = nNums;
    let index = 0;

    while(Plow < nums.length && Nhigh >= 0){
        if(nums[Plow] < nums[Nhigh]){
            result[index] = nums[Plow];
            Plow++;
            index++;
        }
        else{
            result[index] = nums[Nhigh];
            Nhigh--;
            index++;
        }
    }   

    while(Plow < nums.length){
        result[index] = nums[Plow];
        index++;
        Plow++;
    }
    while(Nhigh >= 0){
        result[index] = nums[Nhigh];
        index++;
        Nhigh--;
    }

    return result
}

// --- TEST RUNNER ---
const testNums = [-2, -1, 0, 2, 3];
console.log("Result:", makeSquares(testNums));
// Expected Output: [0, 1, 4, 4, 9]
