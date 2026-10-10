/* 
PROBLEM STATEMENT: 
Given a string 's' consisting only of lowercase alphabets and an integer 'k', find the 
length of the longest substring that contains exactly 'k' distinct characters.
If no such substring exists, return -1.

Constraints:
- 1 <= s.length <= 10^5
- 1 <= k <= 26

Example 1:
Input: s = "aabacbebebe", k = 3
Output: 7
Explanation: The longest substring with exactly 3 distinct characters is "cbebebe".

Example 2:
Input: s = "aaaa", k = 2
Output: -1
Explanation: There's no substring with 2 distinct characters.

Example 3:
Input: s = "aabaaab", k = 2
Output: 7
Explanation: The entire string "aabaaab" has exactly 2 unique characters 'a' and 'b'.
*/

class Solution {
    longestKSubstr(s, k) {
        const n = s.length;
        let map = {};
        let mapLen = -1;

        let res = -1;
        let low = 0;
        for(let high = 0; high < n; high++){
            if(map[s[high]] === undefined){
                map[s[high]] = 1;
            }
            else{
                map[s[high]] += 1;
            }
            mapLen = Object.keys(map).length;
            while(mapLen > k){
                if(map[s[low]] === 1){
                    delete map[s[low]];
                }
                else{
                    map[s[low]] -= 1;
                }
                mapLen = Object.keys(map).length;
                low++;
            }
            if(mapLen === k){
                res = Math.max(res, high-low+1);
            }
        }
        return res;
    }
}

// --- TEST RUNNER ---
const solver = new Solution();

const s1 = "aabacbebebe";
const k1 = 3;
console.log("Test 1 Result:", solver.longestKSubstr(s1, k1)); // Expected Output: 7

const s2 = "aaaa";
const k2 = 2;
console.log("Test 2 Result:", solver.longestKSubstr(s2, k2)); // Expected Output: -1

const s3 = "aabaaab";
const k3 = 2;
console.log("Test 3 Result:", solver.longestKSubstr(s3, k3)); // Expected Output: 7
