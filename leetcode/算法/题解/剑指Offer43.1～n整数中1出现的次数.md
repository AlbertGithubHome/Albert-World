# 剑指Offer43.1～n整数中1出现的次数

输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。

例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。



示例 1：
```
输入：n = 12
输出：5
```
示例 2：
```
输入：n = 13
输出：6
```


限制：
```
    1 <= n < 2^31
```
注意：本题与主站 233 题相同：https://leetcode-cn.com/problems/number-of-digit-one/
通过次数9,877
提交次数22,018
在真实的面试中遇到过这道题？
本书精选谷歌、微软等知名IT企业的典型面试题，系统地总结了如何在面试时写出高质量代码，如何优化代码效率，以及分析、解决难题的常用方法。

### 解题思路
找规律，看各位的1出现的个数，有一个越界的问题，导致出错了一次

### 代码

```cpp
class Solution {
public:
    int countDigitOne(int n) {
        int ans = 0, d = 1;
        while (n / d > 0) {
            int high = n / d / 10;
            int cur = n / d % 10;
            int low = n % d;

            if (cur == 0) ans += high * d;
            else if (cur == 1) ans += high * d + low + 1;
            else ans += high * d + d;

            if (d > INT_MAX / 10) break;
            d *= 10;
        }
        return ans;
    }
};
```

![图片.png](https://pic.leetcode-cn.com/3cc36f734272f529e5ae3487af31e3aed96596a7d4639039819883ccca6fa31e-%E5%9B%BE%E7%89%87.png)
