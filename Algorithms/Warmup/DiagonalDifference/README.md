# Diagonal Difference

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix _arr_ is shown below:
```
1 2 3
4 5 6
9 8 9  
```

The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.

### Function description

Complete the _diagonalDifference_ function in the editor below. It must return an integer representing the absolute diagonal difference.

diagonalDifference takes the following parameter:

* arr: an array of integers.

### Input Format

The first line contains a single integer, _n_ , the number of rows and columns in the matrix _arr_. 
Each of the next _n_ lines describes a row, _arr_[_i_], and consists of _n_ space-separated integers _arr_[_i_][_j_].

### Constraints

* -100 <= _arr_[_i_][_j_] <= 100

### Output Format

Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

### Sample Input
```
3
11 2 4
4 5 6
10 8 -12
```

### Sample Output
```
15
```

### Explanation

The primary diagonal is:
```
11
   5
     -12
```

Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:
```
     4
   5
10
```

Sum across the secondary diagonal: 4 + 5 + 10 = 19

Difference: |4 - 19| = 15

**Note:** |x| is the absolute value of x