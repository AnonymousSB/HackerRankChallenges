# Between Two Sets

You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

1. The elements of the first array are all factors of the integer being considered
2. The integer being considered is a factor of all elements of the second array

These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.

For example, given the arrays _a_ = [2, 6] and _b_ = [24, 36], there are two numbers between them: 6 and 12. 2 % 6 = 0, 6 % 6 = 0, 24 % 6 = 0 and 36 % 6 = 0 for the first value. Similarly, 2 % 12 = 0, 6 % 12 = 0, 24 % 12 = 0 and 36 % 12 = 0.

### Function Description

Complete the `getTotalX` function in the editor below. It should return the number of integers that are betwen the sets.

`getTotalX` has the following parameter(s):

* a: an array of integers
* b: an array of integers

### Input Format

1. The first line contains two space-separated integers, _n_ and _m_, the number of elements in array _a_ and the number of elements in array _b_. 
2. The second line contains _n_ distinct space-separated integers describing _a_[_i_] where 0 <= _i_ <= _n_. 
3. The third line contains _m_ distinct space-separated integers describing _b_[_j_] where 0 <= _j_ <= _m_.

### Constraints

* 1 <= _n_,_m_ <= 10
* 1 <= _a_[_i_] <= 100
* 1 <= _b_[_j_] <= 100

### Output Format

Print the number of integers that are considered to be between _a_ and _b_.

### Sample Input
```
2 3
2 4
16 32 96
```

### Sample Output
```
3
```

### Explanation

2 and 4 divide evenly into 4, 8, 12 and 16.

4, 8 and 16 divide evenly into 16, 32, 96.

4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.