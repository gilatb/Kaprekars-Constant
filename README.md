# Algorithm Challenge // Kaprekar's Constant

- [1. Getting started](#1-getting-started)
- [2. Challenge](#2-challenge)
  - [2.1. Examples](#21-examples)
  - [2.2. Testing your solution](#22-testing-your-solution)
  - [2.3. Submitting your solution](#23-submitting-your-solution)

## 1. Getting started
`https://github.com/RobAntunes/Kaprekars-Constant.git`

Fork this repo and `git clone` your forked repo to your computer, then, run `npm install`. Once happy with your solution, `git push` and submit a pull request at `https://github.com/RobAntunes/Kaprekars-Constant.git`.

## 2. Challenge
Have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits.

Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step.

Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174).

Your program should return the number of times this routine must be performed until 6174 is reached. 

### 2.1. Examples

If num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174.

**Test Case #1:**        
Input: 2111     
Output: 5       

**Test Case #2:**          
Input: 9831     
Output: 7     

### 2.2. Testing your solution
To test your solution, run `npm test` in the root directory to run the automated tests.

### 2.3. Submitting your solution

If you're working on a forked repo, push your changes to your forked repo and submit a pull request to this repo.