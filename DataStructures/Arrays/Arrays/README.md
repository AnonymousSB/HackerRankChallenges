# Arrays

An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, _A_, of size _N_, each memory location has some unique index, _i_ (where 0 <= _i_ < _n_), that can be referenced as _A_[_i_] (you may also see it written as A<sub>_i_</sub>).

Given an array, _A_, of _N_ integers, print each element in reverse order as a single line of space-separated integers.

**Note:** If you've already solved our C++ domain's Arrays Introduction challenge, you may want to skip this.

### Input Format

The first line contains an integer, _N_ (the number of integers in _A_). 

The second line contains _N_ space-separated integers describing _A_.

### Constraints

* 1 <= _N_ <= 10<sup>3</sup>
* 1 <= A[_i_] <= 10<sup>4</sup>, where _A_[_i_] is the _i<sup>th</sup>_ integer in _A_

### Output Format

Print all _N_ integers in _A_ in reverse order as a single line of space-separated integers.

### Sample Input

```
4
1 4 3 2
```

### Sample Output
```
2 3 4 1
```