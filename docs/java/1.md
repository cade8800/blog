# Spring Data JPA 简单查询--方法定义规则

### 一、常用规则速查





#|#|#
:--:|:--:|:--:
1　|`And`|　　并且
2　|` Or`|  或
3　|`Is,Equals`|　　等于
4　|`Between`|　  两者之间
5　|`LessThan`|　　小于
6　|`LessThanEqual`|　小于等于
7　|`GreaterThan`|　 大于
8　|`GreaterThanEqual`| 大于等于
9　|`After`|　之后（时间） >
10　|`Before`|　 之前（时间） <
11　|`IsNull`|　　　　　等于Null
12　|`IsNotNull,NotNull`|　 不等于Null
13　|`Like`|　模糊查询。查询件中需要自己加 %
14　|`NotLike`|  不在模糊范围内。查询件中需要自己加 %
15　|`StartingWith`|　以某开头
16　|`EndingWith`|　  以某结束
17　|`Containing`|　包含某
18　|`OrderBy`|　排序
19　|`Not`|　　不等于
20　|`In`|　 某范围内
21　|`NotIn`|  某范围外
22　|`True`|　　真
23　|`False`|　 假
24　|`IgnoreCase`|　忽略大小写


![](https://img2020.cnblogs.com/blog/359884/202006/359884-20200604104322759-1912272335.png)

### 二、Spring Data 解析方法名--规则说明

1、规则描述

按照Spring data 定义的规则，查询方法以`find|read|get`开头（比如` find、findBy、read、readBy、get、getBy`），涉及条件查询时，条件的属性用条件关键字连接，要注意的是：条件属性首字母需大写。框架在进行方法名解析时，会先把方法名多余的前缀截取掉，然后对剩下部分进行解析。

如果方法的最后一个参数是 **Sort** 或者 **Pageable** 类型，也会提取相关的信息，以便按规则进行排序或者分页查询。


2、举例说明

比如 `findByUserAddressZip()`。框架在解析该方法时，首先剔除` findBy`，然后对剩下的属性进行解析，详细规则如下（此处假设该方法针对的域对象为 AccountInfo 类型）：

先判断 `userAddressZip` **（根据 POJO 规范，首字母变为小写，下同）**是否为 `AccountInfo` 的一个属性，如果是，则表示根据该属性进行查询；如果没有该属性，继续第二步；
从右往左截取第一个大写字母开头的字符串（此处为 Zip），然后检查剩下的字符串是否为 `AccountInfo` 的一个属性，如果是，则表示根据该属性进行查询；如果没有该属性，则重复第二步，继续从右往左截取；最后假设 `user` 为 `AccountInfo` 的一个属性；
接着处理剩下部分（ `AddressZip` ），先判断 `user `所对应的类型是否有 `addressZip` 属性，如果有，则表示该方法最终是根据` "AccountInfo.user.addressZip"` 的取值进行查询；否则继续按照步骤 2 的规则从右往左截取，最终表示根据 `"AccountInfo.user.address.zip"` 的值进行查询。
    可能会存在一种特殊情况，比如` AccountInfo` 包含一个 `user` 的属性，也有一个 `userAddress` 属性，此时会存在混淆。读者可以明确在属性之间加上` "_" `以显式表达意图，比如` "findByUser_AddressZip()"` 或者 `"findByUserAddress_Zip()"`。
    （强烈建议：无论是否存在混淆，都要在不同类层级之间加上`"_"` ，增加代码可读性）

### 三、一些情况

#### 1、当查询条件为null时。

   举例说明如下：

* 实体定义：对于一个客户实体Cus,包含有name和sex，均是String类型。
* 查询方法定义：`List<Cus> findByNameAndSex(String name,String sex);`
* 使用时：dao.findByNameAndSex(null, "男");
* 后台生成sql片断：where (cus0_.name is null) and cus0_.sex=?
* 结论：当查询时传值是null时，数据库中只有该字段是null的记录才符合条件，并不是说忽略这个条件。也就是说，这种查询方式，只适合于明确查询条件必须传的业务，对于动态查询（条件多少是动态的，例如一般的查询列表，由最终用户使用时决定输入那些查询条件），这种简单查询是不能满足要求的。

#### 2、排序
```
List<Cus> findBySexOrderByName(String sex); //名称正序（正序时，推荐此方式，简单）
List<Cus> findBySexOrderByNameAsc(String sex); //名称正序（效果同上）
List<Cus> findBySexOrderByNameDesc(String sex); //名称倒序
```

#### 3、结果限制

```
/**
     * 根据父ID，得到排序号最大的bo。
     * 用于预计算新资源的排序号。
     */
Resource findFirstByFather_idOrderByOrderNumDesc(Long fatherId);

User findFirstByOrderByLastnameAsc();

User findTopByOrderByAgeDesc();

Page<User> queryFirst10ByLastname(String lastname, Pageable pageable);

Slice<User> findTop3ByLastname(String lastname, Pageable pageable);

List<User> findFirst10ByLastname(String lastname, Sort sort);

List<User> findTop10ByLastname(String lastname, Pageable pageable);  
```


#### 4、计数
```
Long countByLastname(String lastname);
```

#### 5、删除
```
void deleteByProject_Id(Long id);
void deleteByProject_Cus_id(Long id);
```


