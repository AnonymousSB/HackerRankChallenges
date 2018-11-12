# Sherlock and Anagrams

Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

For example _s_ = _mom_, the list of all anagrammatic pairs is [_m_, _m_], [_mo_, _om_] at positions [[0], [2]], [[0, 1], [1, 2]] respectively.

### Function Description

Complete the function `sherlockAndAnagrams` in the editor below. It must return an integer that represents the number of anagrammatic pairs of substrings in _s_.

`sherlockAndAnagrams` has the following parameter(s):

* s: a string

### Input Format

The first line contains an integer _q_, the number of queries. 
Each of the next _q_ lines contains a string _s_ to analyze.

### Constraints

* 1 <= _q_ <= 10
* 2 <= |_s_| <= 100
* String _s_ contains only lowercase letters belonging to ascii[a-z].

### Output Format

For each query, return the number of unordered anagrammatic pairs.

### Sample Input 0
```
2
abba
abcd
```

### Sample Output 0
```
4
0
```

### Explanation 0

The list of all anagrammatic pairs is [_a_, _a_], [_ab_, _ba_], [_b_, _b_] and [_abb_, _bba_] at positions [[0], [3]], [[0, 1], [2, 3]], [[1], [2]] and [[0, 1, 2], [1, 2, 3]] respectively.

No anagrammatic pairs exist in the second query as no character repeats.

### Sample Input 1
```
2
ifailuhkqq
kkkk
```

### Sample Output 1
```
3
10
```

### Explanation 1

For the first query, we have anagram pairs [_i_, _i_], [_q_, _q_] and [_ifa_, _fai_] at positions [[0], [3]], [[8], [9]] and [[0, 1, 2], [1, 2, 3]] respectively.

For the second query: 
* There are 6 anagrams of the form k at positions [[0], [1], [[0], [2]], [[0], [3]], [[1], [2]], [[1], [3]] and [[2], [3]]. 
* There are 3 anagrams of the form kk at positions [[0, 1], [1, 2]], [[0, 1], [3, 2]] and [[1, 2], [2, 3]]. 
* There is 1 anagram of the form kkk at position [[0, 1, 2], [1, 2, 3]].

### Sample Input 2
```
1
cdcd
```

### Sample Output 2
```
5
```

### Explanation 2

* There are two anagrammatic pairs of length 1: [_c_, _c_] and [_d_, _d_] at positions [[0, 2], [1, 3]].
* There are three anagrammatic pairs of length 2: [_cd_, _dc_], [_cd, _cd_], [_dc, _cd_] at positions [[0, 1], [1, 2]], [[0, 1], [2, 3]], and [[1, 2], [2, 3]].