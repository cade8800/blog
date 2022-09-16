# redis通用key操作命令(总)


> https://blog.csdn.net/qq_28893679/article/details/53005057


> redis默认是开启了16个数据库，在配置文件中可以修改，编号从0到15，默认选择的是0号数据库，通过使用select index命令来更改数据库

## 1.keys pattern 命令–>获取key值

> 在redis里,允许模糊查询key
有3个通配符 *, ? ,[]
*: 通配任意多个字符
?: 通配单个字符
[]: 通配括号内的某1个字符

```
redis 127.0.0.1:6379> flushdb
OK
redis 127.0.0.1:6379> keys *
(empty list or set)
redis 127.0.0.1:6379> mset one 1 two 2 three 3 four 4
OK
redis 127.0.0.1:6379> keys o*
1) "one"
redis 127.0.0.1:6379> key *o
(error) ERR unknown command 'key'
redis 127.0.0.1:6379> keys *o
1) "two"
redis 127.0.0.1:6379> keys ???
1) "one"
2) "two"
redis 127.0.0.1:6379> keys on?
1) "one"
redis 127.0.0.1:6379> set ons yes
OK
redis 127.0.0.1:6379> keys on[eaw]
1)"one"
```

## 2.randomkey–>随机获取key值

```
127.0.0.1:6379> randomkey
"name"
```

## 3.type keyname–>获取某个key中的存储的类型

```
127.0.0.1:6379> type age
string
```

## 4.exists keyname–>判断某个key是否存在

```
127.0.0.1:6379> exists age
(integer) 1
```

## 5.del keyname–>删除某个key值

```
127.0.0.1:6379> del age
(integer) 1
```

## 6.rename keyname newkeyname –>为key取新的名字

```
127.0.0.1:6379> rename age username
OK
```

## ttl key

- 作用: 查询key的生命周期
- 返回: 秒数

> 注:对于不存在的key或已过期的key/不过期的key,都返回-1
Redis2.8中,对于不存在的key,返回-2

## expire key 整型值

- 作用: 设置key的生命周期,以秒为单位

>同理:
pexpire key 毫秒数, 设置生命周期
pttl key, 以毫秒返回生命周期

## persist key

- 作用: 把指定key置为永久有效
