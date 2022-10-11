// Merging Two Sorted Arrays
// Write a function that takes two sorted arrays as arguments, and returns a new array that contains all the elements from both input arrays in sorted order.
// Language: javascript
// Difficulty: easy

class Solution {
    solve(a, b) {
        let arr = a.concat(b);
        return arr.sort((a,b) => a-b);
    }
}

// String Addition
// Given two positive integers, find the sum of their constituent digits.
// Language: javascript
// Difficulty: easy

class Solution {
    solve(a, b) {
       a = BigInt(a)
       b = BigInt(b)
        return String(a + b)
    }
}