# Linux安装rpm式安装mysql


#### 1 安装rpm

```
rpm -ivh mysql80-community-release-el7-5.noarch.rpm
```

![](https://img2022.cnblogs.com/blog/2768894/202205/2768894-20220530114600522-1519982077.png)


#### 2 安装Mysq服务

```
yum install mysql-server
```

![](https://img2022.cnblogs.com/blog/2768894/202205/2768894-20220530114526260-785200218.png)



#### 3 修改配置文件

> 配置文件路径 ```/etc/my.cnf```

```
vim /etc/my.cnf
```

##### 加入以下配置

```
# 修改Mysq密码加密方式（​Mysql​​在之前的版本的关于​​password​​的加密方法都是使用的  ​​mysql_native_password​​，不过到​​MySQL8.0​​的时候换成了​​caching_sha2_password​）
default_authentication_plugin=mysql_native_password

# 表名不区分大小写
lower_case_table_names=1

# 忽略主从异常
slave-skip-errors=all

# 忽略only_full_group_by异常
sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION'

```


#### 4 Mysql服务相关指令

```
systemctl start mysqld

systemctl enable mysqld

systemctl status mysqld
```

##### 查看Mysql进程

```
ps -ef|grep mysql
```
![](https://img2022.cnblogs.com/blog/2768894/202205/2768894-20220530125532294-1863779386.png)



#### 5 修改Mysql默认登录密码及权限


##### 启动Mysql

```
systemctl start mysqld
```

##### 启动后在日志中查看Mysql8默认密码

```
cat /var/log/mysqld.log | grep "password"
```

结果示例：
```
2022-09-15T07:38:34.162110Z 6 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: 5F71-JybyEls
```


##### 使用默认密码登录Mysql

```
mysql -uroot -p5F71-JybyEls
```

##### 修改密码及登录权限

修改密码
```
ALTER user 'root'@'localhost' IDENTIFIED BY '新密码';
```

修改登录权限
```
use mysql;
update user set host='%' where user='root' limit 1;
```

更新权限

>将当前user和privilige表中的用户信息/权限设置从mysql库(MySQL数据库的内置库)中提取到内存里

```
flush privileges;
```

完成，退出Mysql

```
exit;
```


#### 6 开放防火墙端口

```
firewall-cmd --zone=public --add-port=3306/tcp --permanent;
firewall-cmd --reload;
firewall-cmd --list-ports;
```

#### 7 完成，收工