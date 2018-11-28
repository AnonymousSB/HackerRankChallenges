# Ashton And String

Ashton appeared for a job interview and is asked the following question. Arrange all the distinct substrings of a given string in lexicographical order and concatenate them. Print the _K_<sup>_th_</sup> character of the concatenated string. It is assured that given value of _K_ will be valid i.e. there will be a _K_<sup>_th_</sup> character. Can you help Ashton out with this?

Note We have distinct substrings here, i.e. if string is `aa`, it's distinct substrings are `a` and `aa`.

### Input Format

* First line will contain a number _T_ i.e. number of test cases. 
* First line of each test case will contain a string containing characters [a-z] and second line will contain a number _K_.

### Constraints

* 1 <= _T_ <= 5
* 1 <= _length_ <= 10<sup>5</sup>
* K will be an appropriate integer

### Output Format

Print _K_<sup>_th_</sup> character ( the string is 1 indexed )

### Sample Input
```
1
dbac
3
```
### Sample Output
```
c
```
### Explanation

The substrings when arranged in lexicographic order are as follows
```
a, ac, b, ba, bac, c, d, db, dba, dbac
```
On concatenating them, we get
```
aacbbabaccddbdbadbac
```
The third character in this string is `c` and hence the answer.