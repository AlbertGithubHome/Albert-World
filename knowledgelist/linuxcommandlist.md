一、 基础命令

cd     切换目录
man    查询文档
ls     列表显示目录内的文件及目录
mv     移动/重命名 文件或目录
mkdir  创建目录
rm     删除文件或目录
cp     复制文件或目录
touch  创建新的空文件
kill   杀死程序进程
stat   查看文件状态
top    查看所有运行程序信息

二、 常用命令

1. 查询系统版本

uname -a
cat /proc/version
lsb_release -a


2. 查看硬盘剩余情况

df -TH


3. 查看指定端口连接

netstat -an | grep 端口号


4. 查看文件类型

file 文件名


5. zip文件的压缩与解压

zip -r xxx.zip 文件名
unzip -r xxx.zip -d ./tmp


6. 查看服务存在并启动

service 服务名 status
service 服务名 start
比如 mysqld、crond


7. 查看文件内容

显示所有内容：cat 文件名
分步查看内容：more 文件名
查看结尾几行：tail 文件名


8. 查看程序进程启动时间和运行参数

ps -eo pid,lstart,cmd | grep 进程名字


9. 文件中查找指定内容并显示所在文件行数

grep -rn '带查找的字符串' . --include=\*.cpp


10. 查看磁盘上文件时显示完整时间

ls --full-time


11. 查询端口占用的进程

sudo lsof -i:8876


12. 查看网卡流量

iftop -B


13. 修改文件权限

chmod 755 gameserver


14. 测算一个程序的执行时间

time ./gameserver


15. 以绝对路径的方式显示用户当前工作目录

pwd


16. 查找程序所在目录

which mysql


17. 查看当前用户

whoami


18. 统计目录下文件行数、字符数、字节数

ll | wc


19. 远程拷贝文件

相对路径下，scp 文件名 用户名@ip:服务器绝对路径目录
scp test.txt root@192.168.1.100:/data

20. 文件打包、解压

tar -zcvf text.tar.gz text1.txt text2.txt
tar -zxvf text.tar.gz


三、常用工具

1. 临时修改文件常用vim，vim的命令很多，可以简单了解下。

2. 调试程序常用gdb工具：

直接启动调试，gdb gameserver
调试core文件，gdb gameserver core.xxx

调试时常用的命令：

run/r：重新开始运行文件
break/b: 设置断点（I. b filename:linenum, II. b functioname, 条件断点: b position if condition）
next/n: 逐过程调试（类似于VS的F10）
step/s: 逐语句调试（类似于VS的F11）
frame/f：切换函数的栈帧（可以调试输出指定函数内的情况）
print/p：打印值及地址（用来显示变量值）
thread/t: 切换线程（调试指定线程，用来处理多线程程序）
continue/c：继续运行（常用调试完断点之后）
bt：显示堆栈（可以查看函数的调用的栈帧和层级关系）


