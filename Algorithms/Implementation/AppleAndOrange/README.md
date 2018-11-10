# Apple and Orange

Sam's house has an apple tree and an orange tree that yield an abundance of fruit. In the diagram below, the red region denotes his house, where _s_ is the start point, and _t_ is the endpoint. The apple tree is to the left of his house, and the orange tree is to its right. You can assume the trees are located on a single point, where the apple tree is at point _a_, and the orange tree is at point _b_.

When a fruit falls from its tree, it lands _d_ units of distance from its tree of origin along the _x_-axis. A negative value of _d_ means the fruit fell _d_ units to the tree's left, and a positive value of _d_ means it falls _d_ units to the tree's right.

Given the value of _d_ for _m_ apples and _n_ oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [_s_, _t_])?

For example, Sam's house is between _s_ = 7 and _t_ = 10. The apple tree is located at _a_ = 4 and the orange at _b_ = 12. There are _m_ = 3 apples and _n_ = 3 oranges. Apples are thrown _apples_ = [2, 3, -4] units distance from _a_, and _oranges_ = [2, -3, -4] units distance. Adding each apple distance to the position of the tree, they land at [4 + 2, 4 + 3, 4 + -4] = [6, 7, 0]. Oranges land at [12 + 3, 12 + -2, 12 + -4] = [15, 10, 8]. One apple and two oranges land in the inclusive range 7 - 10 so we print

```
1
2
```

### Function Description

Complete the `countApplesAndOranges` function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

`countApplesAndOranges` has the following parameter(s):

* s: integer, starting point of Sam's house location.
* t: integer, ending location of Sam's house location.
* a: integer, location of the Apple tree.
* b: integer, location of the Orange tree.
* apples: integer array, distances at which each apple falls from the tree.
* oranges: integer array, distances at which each orange falls from the tree.

### Input Format

The first line contains two space-separated integers denoting the respective values of _s_ and _t_.

The second line contains two space-separated integers denoting the respective values of _a_ and _b_.

The third line contains two space-separated integers denoting the respective values of _m_ and _n_.

The fourth line contains _m_ space-separated integers denoting the respective distances that each apple falls from point _a_.

The fifth line contains _n_ space-separated integers denoting the respective distances that each orange falls from point _b_.

### Constraints

* 1 <= _s_,_t_,_a_,_b_,_m_,_n_ <= 10<sup>5</sup>
* -10<sup>5</sup> <= _d_ <= 10<sup>5</sup>
* _a_ < _s_ < _t_ < _b_

### Output Format

Print two integers on two different lines:

1. The first integer: the number of apples that fall on Sam's house.
2. The second integer: the number of oranges that fall on Sam's house.

### Sample Input
```
7 11
5 15
3 2
-2 2 1
5 -6
```

### Sample Output
```
1
1
```

### Explanation

1. The first apple falls at position 5 - 2 = 3. 
2. The second apple falls at position 5 + 2 = 7. 
3. The third apple falls at position 5 + 1 = 6. 
4. The first orange falls at position 15 + 5 = 20. 
5. The second orange falls at position 15 - 6 = 9. 
6. Only one fruit (the second apple) falls within the region between 7 and 11, so we print 1 as our first line of output. 
7. Only the second orange falls within the region between 7 and 11, so we print 1 as our second line of output.
