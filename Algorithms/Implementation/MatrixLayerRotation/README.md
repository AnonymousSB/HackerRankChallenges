# Matrix Layer Rotation

You are given a 2D matrix of dimension _m_ x _n_ and a positive integer _r_. You have to rotate the matrix _r_ times and print the resultant matrix. Rotation should be in anti-clockwise direction.

Rotation of a 4 _x_ 5 matrix is represented by the following figure. Note that in one rotation, you have to shift elements by one step only.

![matrix-rotation](./matrix-rotation.png)

It is guaranteed that the minimum of m and n will be even.

As an example rotate the Start matrix by 2:

```
Start         First           Second
 1 2 3 4        2  3  4  5      3  4  5  6
12 1 2 5  ->   1  2  3  6 ->   2  3  4  7
11 4 3 6      12  1  4  7       1  2  1  8
10 9 8 7      11 10  9  8     12 11 10  9
```

### Function Description

Complete the `matrixRotation` function in the editor below. It should print the resultant 2D integer array and return nothing.

`matrixRotation` has the following parameter(s):

* matrix: a 2D array of integers
* r: an integer that represents the rotation factor

### Input Format

1. The first line contains three space separated integers, _m_, _n_, and _r_, the number of rows and columns in _matrix_, and the required rotation. 
2. The next _m_ lines contain _n_ space-separated integers representing the elements of a row of _matrix_.

### Constraints

* 2 <= _m_, _n_ <= 300
* 1 <= _r_ <= 10<sup>9</sup>
* _min_(_m_, _n_)%2 = 0
1 <= _a_<sub>_ij_</sub> <= 10<sup>8</sup> where _i_ belongs to [1..._m_] and _j_ belongs to [i..._n_]

### Output Format

Print each row of the rotated matrix as space-separated integers on separate lines.

### Sample Input

### Sample Input #01
```
4 4 2
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16
```
### Sample Output #01
```
3 4 8 12
2 11 10 16
1 7 6 15
5 9 13 14
```
### Explanation #01

The matrix is rotated through two rotations.

```
 1  2  3  4      2  3  4  8      3  4  8 12
 5  6  7  8      1  7 11 12      2 11 10 16
 9 10 11 12  ->  5  6 10 16  ->  1  7  6 15
13 14 15 16      9 13 14 15      5  9 13 14
```

### Sample Input #02
```
5 4 7
1 2 3 4
7 8 9 10
13 14 15 16
19 20 21 22
25 26 27 28
```

### Sample Output #02
```
28 27 26 25
22 9 15 19
16 8 21 13
10 14 20 7
4 3 2 1
```

### Explanation 02

The various states through 7 rotations:
```
1  2  3  4      2  3  4 10    3  4 10 16    4 10 16 22
7  8  9 10      1  9 15 16    2 15 21 22    3 21 20 28
13 14 15 16 ->  7  8 21 22 -> 1  9 20 28 -> 2 15 14 27 ->
19 20 21 22    13 14 20 28    7  8 14 27    1  9  8 26
25 26 27 28    19 25 26 27    13 19 25 26   7 13 19 25

10 16 22 28    16 22 28 27    22 28 27 26    28 27 26 25
 4 20 14 27    10 14  8 26    16  8  9 25    22  9 15 19
 3 21  8 26 ->  4 20  9 25 -> 10 14 15 19 -> 16  8 21 13
 2 15  9 25     3 21 15 19     4 20 21 13    10 14 20  7
 1  7 13 19     2  1  7 13     3  2  1  7     4  3  2  1
```
### Sample Input #03
```
2 2 3
1 1
1 1
```

### Sample Output #03
```
1 1
1 1
```

### Explanation #03

All of the elements are the same, so any rotation will repeat the same matrix.