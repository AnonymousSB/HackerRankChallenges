# Sock Merchant
John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are _n_ = 7 socks with colors _ar_ = [1, 2, 1, 2, 1, 3, 2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

### Function Description

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

* n: the number of socks in the pile
* ar: the colors of each sock

### Input Format

The first line contains an integer _n_, the number of socks represented in _ar_. 
The second line contains _n_ space-separated integers describing the colors _ar_[_i_] of the socks in the pile.

### Constraints

* 1 <= _n_ <= 100
* 1 <= _ar_[_i_] <= 100 where 0 <= _i_ < _n_

### Output Format

Print the total number of matching pairs of socks that John can sell.

### Sample Input

```
9
10 20 20 10 10 30 50 10 20
```

### Sample Output

```
3
```

### Explanation

John can match three pairs of socks.
