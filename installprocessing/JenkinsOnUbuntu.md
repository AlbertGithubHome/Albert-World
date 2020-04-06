主要参考 [ubuntu 下搭建 Jenkins 并配置部署环境](https://www.cnblogs.com/shuoer/p/9471839.html)

# 配置环境

- Windows10 专业版
- VMware WorkStation Pro 15.5
- Ubuntu 16.04 LTS


# ubuntu 安装 JDK

安装 oracle-java8-installer 失败，网上寻找答案


参考 [【已解决】E: Package 'oracle-java8-installer' has no installation candidate](https://blog.csdn.net/senver_wen/article/details/82877056)

其中包含命令：
```bash
#安装依赖
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update

# 开始安装
sudo apt-get install oracle-java8-installer
```

结果还是报相同的错误！


然后参考 [Pack 'oracle-java8-installer' has no installation candidate 报错解决方法](https://blog.csdn.net/csdnhyms/article/details/104688784?depth_1-utm_source=distribute.pc_relevant.none-task-blog-OPENSEARCH-4&utm_source=distribute.pc_relevant.none-task-blog-OPENSEARCH-4)

```bash
sudo apt install default-jre
sudo apt install openjdk-11-jre-headless
sudo apt install openjdk-8-jre-headless
```

还是会报错：
```bash
albert@albert-virtual-machine:~$ sudo apt install openjdk-11-jre-headless
[sudo] password for albert:
Reading package lists... Done
Building dependency tree
Reading state information... Done
E: Unable to locate package openjdk-11-jre-headless
```

最后总结使用命令为:
```bash
sudo apt install default-jre
sudo apt install openjdk-8-jdk-headless
```

查询版本为：
```bash

albert@albert-virtual-machine:~$ java -version
openjdk version "1.8.0_242"
OpenJDK Runtime Environment (build 1.8.0_242-8u242-b08-0ubuntu3~16.04-b08)
OpenJDK 64-Bit Server VM (build 25.242-b08, mixed mode)
albert@albert-virtual-machine:~$ javac -version
javac 1.8.0_242
```

# ubuntu 安装tomcat8

按照教程顺利完成，添加账号

```xml
<role rolename="manager-gui"/>
<role rolename="admin-gui"/>
<user username="admin" password="admin" roles="admin-gui"/>
<user username="tomcat" password="admin" roles="manager-gui"/>
<user username="root" password="123456" roles="manager-gui,admin-gui"/>
```

也可参考 [windows下tomcat的安装配置](https://www.cnblogs.com/beginner-boy/p/7806680.html)

# 安装Jenkins

[Jenkins 网盘地址](https://pan.baidu.com/s/1ju6Bin282nMM1wJjSz18LQs)

安装参考 https://www.cnblogs.com/wuxunyan/p/9592953.html
https://www.jianshu.com/p/b23cd5a35091
https://www.jianshu.com/p/de9c4f5ae7fa
https://www.cnblogs.com/xingphimo/p/11098273.html
还没有尝试
