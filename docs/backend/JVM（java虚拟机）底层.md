# JVM（java虚拟机）底层


# Java程序执行过程

1. javac出场 将java源文件编译成字节码class文件
2. jvm出场 

>jvm包含  
1 类加载器  
2 运行时数据区（服务器内存，堆）  
3 执行引擎 
4 本地接口

 - “类加载器ClasssLoader” 将字节码class文件加载进“运行时数据区”
 - “执行引擎”调用“本地方法库” 将“运行时数据区”中的数据编译成本地机器指令，然后执行
 
> Class Files  --> ClassLoader --> 运行时数据区 --> 执行引擎，本地库接口 --> 本地方法库

# 类的装载 ClassLoader

> 包含：加载，连接（验证，准备，解析），初始化，使用，卸载  等一系列操作

# 类加载器的种类
1. JDK 已有的(自带的)类加载器

- BootStrap Classloader : jvm启动加载器，主要加载rt.jar，存在于jvm内核中，C语言编写
- Extension Classloader （extends ClassLoader）： 拓展类加载器，加载%JAVA_HOME%/lib/ext/*.jar
- App Classloader （extends ClassLoader） ： 系统类加载器，加载Classpath

2. 自定义类加载器  （extends ClassLoader）：完全自定义类加载器

>BootStrap Classloader是Extension Classloader的父类
>Extension Classloader是App Classloader的父类

# 类加载器的双亲委派模型


