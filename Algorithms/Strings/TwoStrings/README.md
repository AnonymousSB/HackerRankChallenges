# Two Strings

Given two strings, determine if they share a common substring. A substring may be as small as one character.

For example, the words "a", "and", "art" share the common substring `a`. The words "be" and "cat" do not share a substring.

### Function Description

Complete the function `twoStrings` in the editor below. It should return a string, either `YES` or `NO` based on whether the strings share a common substring.

`twoStrings` has the following parameter(s):

* _a_, _b_: two strings to analyze .

### Input Format

The first line contains a single integer _p_, the number of test cases.

The following _p_ pairs of lines are as follows:

* The first line contains string _a_.
* The second line contains string _b_.

### Constraints

* _s_1 and _s_2 consist of characters in the range ascii[a-z].
* 1 <= _p_ <= 10
* 1 <= |_a_|, |_b_| <= 10<sup>5</sup>
 
### Output Format

For each pair of strings, return `YES` or `NO`.

### Sample Input
```
2
hello
world
hi
world
```

### Sample Output
```
YES
NO
```

### Explanation

We have _p_ = 2 pairs to check:

1. _a_ = "hello", _b_ = "world". The substrings "o" and "l" are common to both strings.
2. _a_ = "hi", _b_ = "world". _a_ and _b_ share no common substrings.