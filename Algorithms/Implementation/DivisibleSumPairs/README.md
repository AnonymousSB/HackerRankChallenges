# Divisible Sum Pairs

You are given an array of _n_ integers, _ar_ = [ar[0], ar[1],..., ar[_n_ - 1]], and a positive integer, _k_. Find and print the number of (_i_, _j_) pairs where _i_ < _j_ and _ar_[_i_] + _ar_[_j_] is divisible by _k_.

For example, _ar_ = [1, 2, 3, 4, 5, 6] and _k_ = 5. Our three pairs meeting the criteria are [1, 4], [2, 3] and [4, 6].

### Function Description

Complete the `divisibleSumPairs` function in the editor below. It should return the integer count of pairs meeting the criteria.

`divisibleSumPairs` has the following parameter(s):

* n: the integer length of array _ar_
* ar: an array of integers
* k: the integer to divide the pair sum by

### Input Format

1. The first line contains 2 space-separated integers, _n_ and _k_. 
2. The second line contains _n_ space-separated integers describing the values of _ar_ = [ar[0], ar[1],..., ar[_n_ - 1].

### Constraints

* 2 <= _n_ <= 100
* 1 <= _k_ <= 100
* 1 <= _ar[i] <= 100

### Output Format

Print the number of (_i_, _j_) pairs where _i_ < _j_ and _a_[_i_] + _a_[_j_] is evenly divisible by _k_.

### Sample Input
```
6 3
1 3 2 6 1 2
```
### Sample Output
```
5
```
### Explanation

Here are the 5 valid pairs when _k_ = 3:
* (0, 2) => _ar_[0] + _ar_[2] = 1 + 2 = 3
* (0, 5) => _ar_[0] + _ar_[5] = 1 + 2 = 3
* (1, 3) => _ar_[1] + _ar_[3] = 3 + 6 = 9
* (2, 4) => _ar_[2] + _ar_[4] = 2 + 1 = 3
* (4, 5) => _ar_[4] + _ar_[5] = 1 + 2 = 3

