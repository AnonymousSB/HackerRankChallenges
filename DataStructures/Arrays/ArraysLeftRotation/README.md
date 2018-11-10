# Arrays: Left Rotation

A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2].

Given an array _a_ of _n_ integers and a number, _d_ , perform _d_ left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

### Function Description

Complete the function `rotLeft` in the editor below. It should return the resulting array of integers.

`rotLeft` has the following parameter(s):

* An array of integers _a_.
* An integer _d_, the number of rotations.

### Input Format

The first line contains two space-separated integers _n_ and _d_, the size of  and the number of left rotations you must perform.
 
The second line contains _n_ space-separated integers _a_[_i_].

### Constraints

* 1 <= _n_ <= 10<sup>5</sup>
* 1 <= _d_ <= _n_
* 1 <= _a_[_i_] <= 10<sup>6</sup>

### Output Format

Print a single line of _n_ space-separated integers denoting the final state of the array after performing _d_ left rotations.

### Sample Input
```
5 4
1 2 3 4 5
```

### Sample Output
```
5 1 2 3 4
```

### Explanation

When we perform _d_ = 4 left rotations, the array undergoes the following sequence of changes:

```
[1, 2, 3, 4, 5] -> [2, 3, 4, 5, 1] -> [3, 4, 5, 1, 2] -> [4, 5, 1, 2, 3] -> [5, 1, 2, 3, 4]
```

