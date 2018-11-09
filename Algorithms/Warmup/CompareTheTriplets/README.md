# Compare the Triplets

Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

We define the rating for Alice's challenge to be the triplet _a_ = (_a_[0], _a_[1], _a_[2]), and the rating for Bob's challenge to be the triplet _b_ = (_b_[0], _b_[1], _b_[2]).

Your task is to find their comparison points by comparing _a_[0] with _b_[0], _a_[1] with _b_[1], _a_[2] and _b_[2] with .

* If _a_[_i_] > _b_[_i_], then Alice is awarded 1 point.
* If _a_[_i_] < _b_[_i_], then Bob is awarded 1 point.
* If _a_[_i_] = _b_[_i_], then neither person receives a point.

Comparison points is the total points a person earned.

Given _a_ and _b_, determine their respective comparison points.

For example, _a_= [1, 2, 3] and _b_ = [3, 2, 1]. For elements 0, Bob is awarded a point because _a_[0] < _b_[0]. For the equal elements _a_[1] and _b_[1], no points are earned. Finally, for elements 2, _a_[2] > _b_[2] so Alice receives a point. Your return array would be [1, 1] with Alice's score first and Bob's second.

### Function Description

Complete the function compareTriplets in the editor below. It must return an array of two integers, the first being Alice's score and the second being Bob's.

compareTriplets has the following parameter(s):

* a: an array of integers representing Alice's challenge rating
* b: an array of integers representing Bob's challenge rating

### Input Format

The first line contains 3 space-separated integers, _a_[0], _a_[1], and _a_[2], describing the respective values in triplet _a_.

The second line contains 3 space-separated integers, _b_[0], _b_[1], and _b_[2], describing the respective values in triplet _b_.

### Constraints

* 1 <= _a_[_i_] <= 100
* 1 <= _b_[_i_] <= 100

### Output Format

Return an array of two integers denoting the respective comparison points earned by Alice and Bob.

### Sample Input 0
```
5 6 7
3 6 10
```

### Sample Output 0
```
1 1
```

### Explanation 0

In this example:
* _a_ = (_a_[0], _a_[1], _a_[2]) = (5, 6, 7)
* _b_ = (_b_[0], _b_[1], _b_[2]) = (3, 6, 10)

Now, let's compare each individual score:

* _a_[0] > _b_[0], so Alice receives 1 point.
* _a_[1] = _b_[1], so nobody receives a point.
* _a_[2] < _b_[2], so Bob receives 1 point.

Alice's comparison score is 1, and Bob's comparison score is 1. Thus, we return the array [1, 1].

### Sample Input 1
```
17 28 30
99 16 8
```

### Sample Output 1
```
2 1
```

### Explanation 1

Comparing the _0_<sup>th</sup> elements, 17 < 99 so Bob receives a point.

Comparing the 1<sup>st</sup> and 2<sup>nd</sup> elements, 28 > 16 and 30 > 8 so Alice receives two points.

The return array is [2, 1].