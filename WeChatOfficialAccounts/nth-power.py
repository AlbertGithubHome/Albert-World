#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Date     : 2020-04-05 14:53:51
# @Author   : Albert Shi
# @Link     : http://blog.csdn.net/albertsh
# @Github   : https://github.com/AlbertGithubHome
__author__ = 'AlbertS'
# @Subject  : 判断一个数是否是2的n次方
#
# 思路：如果一个数是2的n次方，那么这个数的2进制表示只有1位是1


def nth_powerof2(x):
    return x > 0 and (x & (x-1) == 0)

print("Test whether the number is 2^n:")

n = 10
print(n , nth_powerof2(n))


n = 16
print(n , nth_powerof2(n))


n = 1034
print(n , nth_powerof2(n))

n = 1
print(n , nth_powerof2(n))

n = 0
print(n , nth_powerof2(n))

n = -1
print(n , nth_powerof2(n))

n = -2
print(n , nth_powerof2(n))