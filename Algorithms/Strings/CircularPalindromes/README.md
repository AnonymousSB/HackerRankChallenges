# Circular Palindromes

A palindrome is a string that reads the same from left to right as it does from right to left.

Given a string, _S_, of _N_ lowercase English letters, we define a _k_-length rotation as cutting the first _k_ characters from the beginning of _S_ and appending them to the end of _S_. For each _S_, there are _N_ possible _k_-length rotations (where 0 <= _k_ < _N_). See the Explanation section for examples.

Given _N_ and _S_, find all _N_ _k_-length rotations of _S_; for each rotated string, _S_<sub>_k_</sub>, print the maximum possible length of any palindromic substring of _S_<sub>_k_</sub> on a new line.

### Input Format

* The first line contains an integer, _N_ (the length of _A_). 
* The second line contains a single string, _S_.

### Constraints

* 1 <= _N_ <= 5 x 10<sup>5</sup>
* 0 <= _k_ < _N_
* _S_ is comprised of lowercase English letters

### Output Format

There should be _N_ lines of output, where each line _k_ contains an integer denoting the maximum length of any palindromic substring of rotation _S_<sub>_k_</sub>.

### Sample Input 0
```
13
aaaaabbbbaaaa
```
### Sample Output 0
```
12
12
10
8
8
9
11
13
11
9
8
8
10
```
### Sample Input 1
```
7
cacbbba
```
### Sample Output 1
```
3
3
3
3
3
3
3
```
### Sample Input 2
```
12
eededdeedede
```
### Sample Output 2
```
5
7
7
7
7
9
9
9
9
7
5
4
```
### Explanation

Consider Sample Case 1, where _S_ = "cacbbba".

The possible rotations, _S_<sub>_k_</sub>, for string _S_ are: 
* _S_<sub>_0_</sub> = "cacbbba".
* _S_<sub>_1_</sub> = "acbbba**c**".
* _S_<sub>_2_</sub> = "cbbba**ca**".
* _S_<sub>_3_</sub> = "bbba**cac**".
* _S_<sub>_4_</sub> = "bba**cacb**".
* _S_<sub>_5_</sub> = "ba**cacbb**".
* _S_<sub>_6_</sub> = "a**cacbbb**".

The longest palindromic substrings for each _S_<sub>_k_</sub> are: 
* _S_<sub>_0_</sub>: "cac" and "bbb", so we print their length (3) on a new line. 
* _S_<sub>_1_</sub>: "bbb", so we print its length (3) on a new line. 
* _S_<sub>_2_</sub>: "bbb" and "aca", so we print their length (3) on a new line. 
* _S_<sub>_3_</sub>: "bbb", "aca" and "cac", so we print their length (3) on a new line. 
* _S_<sub>_4_</sub>: "aca" and "cac", so we print their length (3) on a new line. 
* _S_<sub>_5_</sub>: "aca" and "cac", so we print their length (3) on a new line. 
* _S_<sub>_6_</sub>: "aca", "cac", and "bbb", so we print their length (3) on a new line.