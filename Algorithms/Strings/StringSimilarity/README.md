# String Similarity

For two strings A and B, we define the similarity of the strings to be the length of the longest prefix common to both strings. For example, the similarity of strings "abc" and "abd" is 2, while the similarity of strings "aaa" and "aaab" is 3.

Calculate the sum of similarities of a string _s_ with each of it's suffixes.

### Input Format

* The first line contains the number of test cases _t_. 
* Each of the next _t_ lines contains a string to process, _s_.

### Constraints

* 1 <= _t_ <= 10
* 1 <= |_s_| <= 100000
* _s_ is composed of characters in the range ascii[a-z]

### Output Format

Output _t_ lines, each containing the answer for the corresponding test case.

### Sample Input
```
2
ababaa  
aa
```

### Sample Output
```
11  
3
```

### Explanation

For the first case, the suffixes of the string are "ababaa", "babaa", "abaa", "baa", "aa" and "a". The similarities of these strings with the string "ababaa" are 6,0,3,0,1, & 1 respectively. Thus, the answer is 6 + 0 + 3 + 0 + 1 + 1 = 11.

For the second case, the answer is 2 + 1 = 3.