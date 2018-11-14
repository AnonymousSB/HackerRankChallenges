# Two Characters

In this challenge, you will be given a string. You must remove characters until the string is made up of any two alternating characters. When you choose a character to remove, all instances of that character must be removed. Your goal is to create the longest string possible that contains just two alternating letters.

As an example, consider the string `abaacdabd`. If you delete the character `a`, you will be left with the string `bcdbd`. Now, removing the character `c` leaves you with a valid string `bdbd` having a length of 4. Removing either `b` or `d` at any point would not result in a valid string.

Given a string _s_, convert it to the longest possible string  made up only of alternating characters. Print the length of string _t_ on a new line. If no string _t_ can be formed, print 0 instead.

### Function Description

Complete the `alternate` function in the editor below. It should return an integer that denotes the longest string that can be formed, or 0 if it cannot be done.

`alternate` has the following parameter(s):

* s: a string

### Input Format

1. The first line contains a single integer denoting the length of _s_. 
2. The second line contains string _s_.

### Constraints

* 1 <= |_s_| <= 1000
* _s_[_i_] belongs to ascii[a-z]

### Output Format

Print a single integer denoting the maximum length of _t_ for the given _s_; if it is not possible to form string _t_, print 0 instead.

### Sample Input
```
10
beabeefeab
```

### Sample Output
```
5
```

### Explanation

The characters present in _s_ are `a`, `b`, `e`, and `f`. This means that _t_ must consist of two of those characters and we must delete two others. Our choices for characters to leave are [a,b], [a,e], [a, f], [b, e], [b, f] and [e, f].

If we delete `e` and `f`, the resulting string is `babab`. This is a valid _t_ as there are only two distinct characters (a and b), and they are alternating within the string.

If we delete `a` and `f`, the resulting string is `bebeeeb`. This is not a valid string  because there are consecutive `e` present. Removing them would leave consecutive `b`, so this fails to produce a valid string _t_.

Other cases are solved similarly.

`babab` is the longest string we can create.