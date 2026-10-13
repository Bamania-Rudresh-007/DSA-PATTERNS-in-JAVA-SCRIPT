/* 
PROBLEM STATEMENT: 
You are visiting a farm that has a single row of fruit trees arranged from left to right. 
The trees are represented by an integer array fruits where fruits[i] is the type of fruit 
the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules 
that you must follow:
- You only have two baskets, and each basket can only hold a single type of fruit. 
  There is no limit on the amount of fruit each basket can hold.
- Starting from any tree of your choice, you must pick exactly one fruit from every tree 
  (including the start tree) while moving to the right. The picked fruits must fit in 
  one of your baskets.
- Once you reach a tree with fruit that cannot fit in your baskets, you must stop.

Given the integer array fruits, return the maximum number of fruits you can pick.

Constraints:
- 1 <= fruits.length <= 10^5
- 0 <= fruits[i] < fruits.length

Example 1:
Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.

Example 2:
Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees.
If we had started at the first tree, we would only pick from trees.

Example 3:
Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees.
If we had started at the first tree, we would only pick from trees.
*/

class Solution {
    totalFruit(fruits) {
        
        return 0;
    }
}

// --- TEST RUNNER ---
const solver = new Solution();

const fruits1 = [1, 2, 1];
console.log("Test 1 Result:", solver.totalFruit(fruits1)); // Expected Output: 3

const fruits2 = [0, 1, 2, 2];
console.log("Test 2 Result:", solver.totalFruit(fruits2)); // Expected Output: 3

const fruits3 = [1, 2, 3, 2, 2];
console.log("Test 3 Result:", solver.totalFruit(fruits3)); // Expected Output: 4
