#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Date     : 2018-03-27 10:20:20
# @Author   : Albert Shi
# @Link     : http://blog.csdn.net/albertsh
# @Github   : https://github.com/AlbertGithubHome
__author__ = 'AlbertS'
# @Subject  : find the count of one in N
# 
# 思路：分析每一位上出现1的情况，以百位为例，分为百位上是0，百位上是1，百位上大于1三种情况

import math

def find_one(N):
    factor = 1;
    count = 0;
    while factor < N:
        low_number = N % factor
        high_number = N // (factor * 10)
        cur_number = N // factor % 10

        #print(high_number, cur_number, low_number)

        if cur_number == 0:
            count+= high_number * factor
        elif cur_number == 1:
            count+= high_number * factor + low_number + 1
            print(high_number * factor + low_number + 1)
        else:
            count+= (high_number + 1) * factor

        factor *= 10;

    return count

N = 12113
# strart find one
if __name__ == '__main__':
    print("N = %d, the count of one is %d:" % (N, find_one(N)))