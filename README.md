# Recursive String Reversal

## Objective
Reverse a string using recursion.

## Approach
- Base case: if string is empty or has one character, return it
- Recursive case: reverse the substring and append the first character

## Example
Input: "hello"  
Output: "olleh"

## Time Complexity
O(n)

## Space Complexity
O(n) (due to recursion stack)

## Test Cases

### Normal Cases
- "hello" → "olleh"
- "world" → "dlrow"
- "12345" → "54321"

### Edge Cases
- "" → ""
- "a" → "a"
- "!@#" → "#@!"
