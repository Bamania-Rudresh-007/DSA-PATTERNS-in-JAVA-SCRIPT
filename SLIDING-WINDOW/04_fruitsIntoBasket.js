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

function totalFruit(fruits) {
    let n = fruits.length;

    let basket = {};
    let res = 0;
    let low = 0;
    
    for(let high = 0; high < n; high++){
        basket[fruits[high]] = (basket[fruits[high]] || 0) + 1;

        let basketLen = Object.keys(basket).length;
        while(basketLen > 2){
            basket[fruits[low]] -= 1;
            if(basket[fruits[low]] === 0){
                delete basket[fruits[low]];
            }
            low++;
            basketLen = Object.keys(basket).length;
        }

        res = Math.max(res, high-low+1);
    }
    return res;
}

// --- TEST RUNNER ---

const fruits1 = [1, 2, 1];
console.log("Test 1 Result:", totalFruit(fruits1)); // Expected Output: 3

const fruits2 = [0, 1, 2, 2];
console.log("Test 2 Result:", totalFruit(fruits2)); // Expected Output: 3

const fruits3 = [1, 2, 3, 2, 2];
console.log("Test 3 Result:", totalFruit(fruits3)); // Expected Output: 4
