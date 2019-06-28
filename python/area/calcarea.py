#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Date     : 2019-6-28 19:51:09
# @Author   : Albert Shi
# @Link     : http://blog.csdn.net/albertsh
# @Github   : https://github.com/AlbertGithubHome
__author__ = 'AlbertS'
# @Subject  : calc area

'''
(x-5)^2 + (y-5)^2 <= 5^2

(x-10)^2 + y^2 >= 10^2

x^2 + (y-10)^2 >= 10^2

'''

import random
import math

def outer_area(x):
    #return 5*x - 2/3*((25-(x-5)**2)**1.5)
    return 5*x-5*math.sin(x)

def inner_area(x):
    return 2/3*((100-(x-10)**2)**1.5)


def is_hit(x, y):
    return (x-5)**2 + (y-5)**2 <= 25 and ((x-10)**2 + y**2 >= 100 or x**2 + (y-10)**2 >= 100)

def main(max_count):
    count = max_count
    hit_count = 0;
    while count > 0:
        x = random.uniform(0, 10)
        y = random.uniform(0, 10)
        if is_hit(x, y):
            hit_count += 1
        count -= 1 
        #print(x, y, count)

    print(hit_count/max_count)
    print(hit_count/max_count*100)
    print(hit_count/max_count/math.pi*100)




if __name__ == '__main__':
    main(10)



x_min = -math.pi/2
x_max_src = (7 - 41**0.5) / 2


print("x_min = {0}, x_max_src = {1}\n".format(x_min, x_max_src))

x_max = math.asin((x_max_src - 5)/5)
print("x_min = {0}, x_max = {1}".format(x_min, x_max))
out_area = outer_area(x_max) - outer_area(x_min);
print("y_min = {0}, y_max = {1}, out_area = {2}\n".format(outer_area(x_min), outer_area(x_max), out_area))

in_area = inner_area(x_max) - inner_area(x_min);
print("y_min = {0}, y_max = {1}, in_area = {2}\n".format(inner_area(x_min), inner_area(x_max),in_area))

print("ret = {0}".format(out_area - in_area))


'''
0.3         10
0.25        100
0.324       1000
0.2956      10000
0.29522     100000
0.292733    1000000
0.2927442   10000000
0.29279645  100000000   29.267754 9.316215444595185 0.29277419
0.292751622 1000000000
'''