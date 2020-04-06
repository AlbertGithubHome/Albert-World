主要参考 [windows系统下jenkins环境搭建与基本使用](https://www.cnblogs.com/wuxunyan/p/9592953.html)

# 配置环境

- Windows10 专业版


# 安装jdk

jdk 下载参考 [jdk-8u241各系统版本](https://www.cnblogs.com/thloveyl/p/12378124.html)

[网盘](https://pan.baidu.com/s/105wtrimc1liThGxsZIv7-A) 密码: v8lc

最后感谢xiaostudy提供Orcle账号
原文链接：https://www.cnblogs.com/xiaostudy/p/9940167.html

[jdk官网下载地址](https://www.oracle.com/technetwork/java/javase/archive-139210.html)
2019.7.18更新
账号：liwei@xiaostudy.com
密码：OracleTest1234

最终我是在CSDN花了11积分下载的 [jdk-8u241-windows-x64.exe](https://download.csdn.net/download/qq_29712659/12106002)

安装过程参考 [JDK的下载安装以及配置](https://blog.csdn.net/huaicainiao/article/details/79340572)

配置环境变量

```
JAVA_HOME   D:\Program Files\Java\jdk1.8.0_241
Path        %JAVA_HOME%\bin;%JAVA_HOME%\jre\bin
CLASSPATH   %JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar
```

# Tomcat 下载安装与配置

参考 [Tomcat 下载安装与配置](https://www.cnblogs.com/limn/p/9358657.html)

配置环境变量
```
CATALINA_HOME   D:\NoBlankProgram\apache-tomcat-9.0.33
Path            %CATALINA_HOME%\lib;%CATALINA_HOME%\lib\servlet-api.jar;%CATALINA_HOME%\lib\jsp-api.jar
```

添加账户
```xml
<role rolename="manager-gui"/>
<role rolename="admin-gui"/>
<user username="admin" password="admin" roles="admin-gui"/>
<user username="tomcat" password="admin" roles="manager-gui"/>
```

# 安装Jenkins