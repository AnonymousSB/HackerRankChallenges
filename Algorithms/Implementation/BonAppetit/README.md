# Bon Appétit

Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally. Brian wants to order something that Anna is allergic to though, and they agree that Anna won't pay for that item. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

For example, assume the bill has the following prices: _bill_ = [2, 4, 6]. Anna declines to eat item _k_ = _bill_[2] which costs 6. If Brian calculates the bill correctly, Anna will pay (2 + 4) / 2 = 3. If he includes the cost of _bill_[2], he will calculate (2 + 4 + 6) / 2 = 6. In the second case, he should refund 3 to Anna.

### Function Description

Complete the `bonAppetit` function in the editor below. It should print `Bon Appetit` if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

`bonAppetit` has the following parameter(s):

* bill: an array of integers representing the cost of each item ordered
* k: an integer representing the zero-based index of the item Anna doesn't eat
* b: the amount of money that Anna contributed to the bill

### Input Format

1. The first line contains two space-separated integers _n_ and _k_, the number of items ordered and the 0-based index of the item that Anna did not eat. 
2. The second line contains _n_ space-separated integers _bill_[_i_] where 0 <= _i_ < _n_. 
3. The third line contains an integer, _b_, the amount of money that Brian charged Anna for her share of the bill.

### Constraints

* 2 <= _n_ <= 10<sup>5</sup>
* 0 <= _k_ < _n_
* 0 <= _bill_[_i_] <= 10<sup>4</sup>
* 0 <= _b_ <= _n_ - 1, i = 0, sum of _bill_[_i_]
* The amount of money due Anna will always be an integer

### Output Format

If Brian did not overcharge Anna, print `Bon Appetit` on a new line; otherwise, print the difference (i.e., _b_<sub>_charged_</sub> - _b_<sub>_actual_</sub>) that Brian must refund to Anna. This will always be an integer.

### Sample Input 0

4 1
3 10 2 9
12

### Sample Output 0

5

### Explanation 0
 
Anna didn't eat item _bill_[1] = 10, but she shared the rest of the items with Brian. The total cost of the shared items is 3 + 2 + 9 = 14 and, split in half, the cost per person is _b_<sub>_actual_</sub> = 7. Brian charged her _b_<sub>_charged_</sub> = 12 for her portion of the bill. We print the amount Anna was overcharged, _b_<sub>_charged_</sub> - _b_<sub>_actual_</sub> = 12 - 7 = 5, on a new line.

### Sample Input 1

4 1
3 10 2 9
7

### Sample Output 1

Bon Appetit

### Explanation 1
 
Anna didn't eat item _bill_[1] = 10, but she shared the rest of the items with Brian. The total cost of the shared items is 3 + 2 + 9 = 14 and, split in half, the cost per person is _b_<sub>_actual_</sub> = 7. Because _b_<sub>_charged_</sub> = 7, we print `Bon Appetit` on a new line.