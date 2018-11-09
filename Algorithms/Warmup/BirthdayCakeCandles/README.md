# Birthday Cake Candles

You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 4, 4, 1, 3, she will be able to blow out 2 candles successfully, since the tallest candles are of height 4 and there are 2 such candles.

### Function Description

Complete the function `birthdayCakeCandles` in the editor below. It must return an integer representing the number of candles she can blow out.

birthdayCakeCandles has the following parameter(s):

* ar: an array of integers representing candle heights

### Input Format

The first line contains a single integer, _n_ , denoting the number of candles on the cake. 

The second line contains _n_ space-separated integers, where each integer _i_ describes the height of candle _i_.

### Constraints

* 1 <= _n_ <= 10<sup>5</sup>
* 1 <= _ar_[_i_] <= 10<sup>7</sup>

### Output Format

Print the number of candles that can be blown out on a new line.

### Sample Input
```
4
3 2 1 3
```

### Sample Output
```
2
```

### Explanation

We have one candle of height 1, one candle of height 2, and two candles of height 3. Your niece only blows out the tallest candles, meaning the candles where _height_ = 3. Because there are 2 such candles, we print 2 on a new line.