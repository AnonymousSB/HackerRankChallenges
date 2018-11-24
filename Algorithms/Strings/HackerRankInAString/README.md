# HackerRank In A String!

We say that a string contains the word `hackerrank` if a subsequence of its characters spell the word `hackerrank`. For example, if string _s_ = _haacckkerrannkk_ it does contain `hackerrank`, but _s_ = _haacckkerannk_ does not. In the second case, the second `r` is missing. If we reorder the first string as `hccaakkerrannkk`, it no longer contains the subsequence due to ordering.

More formally, let _p_[0], _p_[1], <sup>...</sup>, _p_[9] be the respective indices of `h, a, c, k, e, r, r, a, n, k` in string _s_. If _p_[0] < _p_[1] < _p_[2] < <sup>...</sup> <_p_[9] is true, then _s_ contains `hackerrank`.

For each query, print `YES` on a new line if the string contains `hackerrank`, otherwise, print `NO`.

### Function Description

Complete the `hackerrankInString` function in the editor below. It must return `YES` or `NO`.

`hackerrankInString` has the following parameter(s):

* s: a string

### Input Format

The first line contains an integer _q_, the number of queries. 
Each of the next _q_ lines contains a single query string _s_.

### Constraints

* 2 <= _q_ <= 10<sup>2</sup>
* 10 <= |_s_| <= 10<sup>4</sup>

### Output Format

For each query, print `YES` on a new line if _s_ contains `hackerrank`, otherwise, print `NO`.

### Sample Input 0
```
2
hereiamstackerrank
hackerworld
```
### Sample Output 0
```
YES
NO
```
### Explanation 0

We perform the following _q_ = 2 queries:

1. _s_ = **h**erei**a**msta**ckerrank**

    The characters of `hackerrank` are bolded in the string above. Because the string contains all the characters in `hackerrank` in the same exact order as they appear in `hackerrank`, we print `YES` on a new line.

2. _s_ = **hacker**wo**r**ld

    does not contain the last three characters of `hackerrank`, so we print `NO` on a new line.

### Sample Input 1
```
2
hhaacckkekraraannk
rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt
```
### Sample Output 1
```
YES
NO
```