# Count Triplets

You are given an array and you need to find number of tripets of indices [_i_, _j_, _k_] such that the elements at those indices are in geometric progression for a given common ratio _r_ and _i_ < _j_ < _k_.

For example, _arr_ = [1, 4, 16, 64]. If _r_ = 4, we have [1, 4, 16] and [4, 16, 64] at indices [0, 1, 2] and [1, 2, 3].

### Function Description

Complete the `countTriplets` function in the editor below. It should return the number of triplets forming a geometric progression for a given _r_ as an integer.

`countTriplets` has the following parameter(s):

* arr: an array of integers
* r: an integer, the common ratio

### Input Format

* The first line contains two space-separated integers _r_ and _r_, the size of _arr_ and the common ratio. 
* The next line contains _n_ space-seperated integers _arr_[_i_].

### Constraints

* 1 <= _n_ <= 10<sup>5</sup>
* 1 <= _r_ <= 10<sup>9</sup>
* 1 <= _arr_[_i_] <= 10<sup>9</sup>

### Output Format

Return the count of triplets that form a geometric progression.

### Sample Input 0
```
4 2
1 2 2 4
```

### Sample Output 0
```
2
```

### Explanation 0

There are 2 triplets in satisfying our criteria, whose indices are [0, 1, 3] and [0, 2, 3].

### Sample Input 1
```
6 3
1 3 9 9 27 81
```

### Sample Output 1
```
6
```

### Explanation 1

The triplets satisfying are index [0, 1, 2], [0, 1, 3], [1, 2, 4], [1, 3, 4], [2, 4, 5] and [3, 4, 5].

### Sample Input 2
```
5 5
1 5 5 25 125
```

### Sample Output 2
```
4
```

### Explanation 2

The triplets satisfying are index [0, 1, 3], [0, 2, 3], [1, 3, 4], [2, 3, 4].