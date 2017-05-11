#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Calculate rope length

import math

# 木桩点的信息
# 每一行包括一个点（横坐标，纵坐标）
PosInfo = [
    (0.0,0.0),
    (2.0,0.0),
    (2.0,2.0),
    (0.0,2.0)
]

# 木桩的半径
Radius = 1.0

# Calculate the distance between two points by point index
# 同过点的索引计算两点间的距离
def get_length_by_pos_index(index):
    pre_index = index - 1
    if pre_index < 0:
        pre_index = len(PosInfo) - 1

    return math.hypot(PosInfo[index][0] - PosInfo[pre_index][0], 
        PosInfo[index][1] - PosInfo[pre_index][1])

def calc_rope_length():
    role_length = 0.0
    for index in range(0, len(PosInfo)):
        role_length = role_length + get_length_by_pos_index(index)

    role_length = role_length + 2 * math.pi * Radius
    print("需要绳子的长度为=%.2f" % role_length)


# Calculate the length of rope and output it
# 计算绳子的长度并打印
calc_rope_length()