#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Date     : 2018-04-01 12:47:20
# @Author   : Albert Shi
# @Link     : http://blog.csdn.net/albertsh
# @Github   : https://github.com/AlbertGithubHome
__author__ = 'AlbertS'
# @Subject  : provide a assist for geometry dash game
# 
# 思路：通过测试游戏中不同点的点击事件，找到正确的点击时机，整理郑成表格

import os
import time
import datetime

L = [
[1],
[1,3,5],
[1.1, 0.01]
]


class dash_assist(object):
    def __init__(self, level_info):
        self.level_data = level_info

    def click_screen(self, delay_time):
        print("start sleep: ", datetime.datetime.now()) 
        time.sleep(delay_time)
        print("sleep over: ", datetime.datetime.now())
        os.system('adb shell input swipe 150 600 150 700 110')
        print("execute over: ", datetime.datetime.now(), " \n")  

    def run(self, level):
        for delay in self.level_data[level]:
            self.click_screen(delay)

# strart dash
if __name__ == '__main__':
    assist_client = dash_assist(L)
    assist_client.run(2)
    #print(L)
    #os.system('adb shell input swipe 150 600 150 700 110')
    #os.system('adb shell input tap 150 600')