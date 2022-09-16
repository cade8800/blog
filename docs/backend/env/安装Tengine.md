# 安装Tengine


### 下载Tengine安装包

> 下载地址 http://tengine.taobao.org/download.html

```
wget http://tengine.taobao.org/download/tengine-2.3.3.tar.gz
```

### 解压

```
mkdir /usr/local/tengine/

tar -zxvf tengine-2.3.3.tar.gz -C /usr/local/tengine/
```

### 安装

#### １
```
cd /usr/local/tengine/tengine-2.3.3/
```

#### ２
```
./configure  
# 默认安装路径/usr/local/nginx，可使用参数prefix指定其它路径，如 ./configure --prefix=/usr/local/nginx/
```

#### ３
```
make
```

#### ４
```
make install
```

### 启动

配置文件路径
```
/usr/local/nginx/conf/nginx.conf
```

启动nginx
```
/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
```


### 设置nginx为系统服务

> 系统用户登录系统后启动的服务的目录为```/usr/lib/systemd/system```,如需要开机没有登陆情况下就能运行的程序在系统目录内```/lib/systemd/system```,我希望系统开机就启动目录，所以我把文件放在系统目录内.

创建service文件

```
vim /lib/systemd/system/nginx.service
```

nginx.service文件内容
```
[Unit]
Description=The nginx HTTP and reverse proxy server
After=syslog.target network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
PIDFile=/usr/local/nginx/logs/nginx.pid
ExecStartPre=/usr/local/nginx/sbin/nginx -t
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s QUIT $MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

设置开机启动

```
systemctl enable nginx.service
```

启动nginx服务

```
systemctl start nginx.service
```

停止开机自启动

```
systemctl disable nginx.service
```

查看服务当前状态

```
systemctl status nginx.service
```

重新启动服务

```
systemctl restart nginx.service
```

查看所有已启动的服务

```
systemctl list-units --type=service
```

 

 

 

 

