# Morgan and a String

Jack and Daniel are friends. Both of them like letters, especially upper-case ones. 
They are cutting upper-case letters from newspapers, and each one of them has his collection of letters stored in a stack.

One beautiful day, Morgan visited Jack and Daniel. He saw their collections. He wondered what is the lexicographically minimal string made of those two collections. He can take a letter from a collection only when it is on the top of the stack. Morgan wants to use all of the letters in their collections.

As an example, assume Jack has collected _a_ = [_A_, _C_, _A_] and Daniel has _b_ = [_B_, _C_, _F_]. The example shows the top at index for each stack of letters. Assembling the string would go as follows:

```
Jack	Daniel	result
ACA	    BCF
CA	    BCF	    A
CA	    CF	    AB
A	    CF	    ABC
A	    CF	    ABCA
    	F	    ABCAC
    		    ABCACF
```
**Note** the choice when there was a tie at CA and CF.

### Function Description

Complete the `morganAndString` function in the editor below. It should return the completed string.

`morganAndString` has the following parameter(s):

* a: a string representing Jack's letters, top at index 0
* b: a string representing Daniel's letters, top at index 0

### Input Format

The first line contains the an integer _t_, the number of test cases.

The next _t_ pairs of lines are as follows: 
- The first line contains string _a_.
- The second line contains string _b_.

# Constraints

* q <= _T_ <= 5
* 1 <= |_a_|, |_b_| <= 10<sup>5</sup>
* _a_ and _b_ contain upper-case letters only, ascii[A-Z].

### Output Format

Output the lexicographically minimal string _result_ for each test case in new line.

### Sample Input 0
```
2
JACK
DANIEL
```

### Sample Output 0
```
DAJACKNIEL
```

### Explanation 0

The first letters to choose from were J and D since they were at the top of the stack. D was chosen, the options then were J and A. A chosen. Then the two stacks have J and N, so J is chosen. (Current string is DAJ) Continuing this way till the end gives us the resulting string.

### Sample Input 1
```
2
ABACABA
ABACABA
```

### Sample Output 1
```
AABABACABACABA
```