/* 
PROBLEM STATEMENT: 
Given a string s, find the length of the longest substring without duplicate characters.

Constraints:
- 0 <= s.length <= 5 * 10^4
- s consists of English letters, digits, symbols and spaces.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. 
Note that "bca" and "cab" are also correct answers.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

class Solution {
    lengthOfLongestSubstring(s) {
        
        return 0;
    }
}

// --- TEST RUNNER ---
const solver = new Solution();

const s1 = "abcabcbb";
console.log("Test 1 Result:", solver.lengthOfLongestSubstring(s1)); // Expected Output: 3

const s2 = "bbbbb";
console.log("Test 2 Result:", solver.lengthOfLongestSubstring(s2)); // Expected Output: 1

const s3 = "pwwkew";
console.log("Test 3 Result:", solver.lengthOfLongestSubstring(s3)); // Expected Output: 3
