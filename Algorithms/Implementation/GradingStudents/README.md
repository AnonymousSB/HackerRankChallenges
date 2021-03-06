# Grading Students

HackerLand University has the following grading policy:

* Every student receives a _grade_ in the inclusive range from 0 to 100.
* Any _grade_ less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's _grade_ according to these rules:

* If the difference between the _grade_ and the next multiple of 5 is less than 3, round _grade_ up to the next multiple of 5.
* if the value of _grade_ is less than 38, no rounding occurs as the result will still be a failing grade.

For example, _grade_ = 84 will be rounded to 85 but _grade_ = 29 will not be rounded because the rounding would result in a number that is less than 40.

Given the initial value of _grade_ for each of Sam's _n_ students, write code to automate the rounding process.

### Function Description

Complete the function gradingStudents in the editor below. It should return an integer array consisting of rounded grades.

gradingStudents has the following parameter(s):

* grades: an array of integers representing grades before rounding

### Input Format

The first line contains a single integer, _n_ , the number of students. 
Each line _i_ of the _n_ subsequent lines contains a single integer, _grades_[_i_], denoting student _i_'s grade.

### Constraints
* 1 <= _n_ <= 60
* 0 <= _grades_[_i_] <= 100

### Output Format

For each _grades_[_i_], print the rounded grade on a new line.

### Sample Input
```
4
73
67
38
33
```

### Sample Output
```
75
67
40
33
```

### Explanation

| ID | Original Grade | Final Grade |
| :---: | :---: | :---: |
| 1 | 73 | 75 |
| 2 | 67 | 67 |
| 3 | 38 | 40 |
| 4 | 33 | 33 |

1. Student 1 received a 73, and the next multiple of 5 from 73 is 75. Since 75 - 73 < 3, the student's grade is rounded to 75.
2. Student 2 received a 67, and the next multiple of 5 from 67 is 70. Since 70 - 67 = 3, the grade will not be modified and the student's final grade is 67.
3. Student 3 received a 38, and the next multiple of 5 from 38 is 40. Since 40 - 38 < 3, the student's grade will be rounded to 40.
4. Student 4 received a grade below 38, so the grade will not be modified and the student's final grade is 33.