# Oracle 循环读取某个时间点之后的大量数据的两种方案

# 方案1

## 逻辑

无排序分页，指定限定时间内的结果集，按ROWNUM进行切割分批取出。
即SQL中，lastRecordCreateDate不变，beginIndex与endIndex通过循环累加，直到读取完所有满足条件的数据。

> **小知识点** >>> 当无设计排序时,Oracle如何返回记录？
Oracle会根据具体的数据块的存储返回记录.
oracle数据库是没有默认排序的 
要排序必须加上order  by 
因为oracle是按块进行读取数据的 
如果数据按顺序存储，则可能使读取出来的数据是按顺序的，给用户误解为默认排序
oracle没有进行任何排序操作，rowid表示的是数据存放的数据块内部地址，如果没有要求排序，oracle会顺序的从数据块中读取符合条件的数据返回到客户端，不过看起来好像是按照rowid排序似的

## 优点

1. 无需排序消耗数据库性能
2. SQL仅需嵌套1层，结构简单

## 缺点

1. 每次分页时，数据库都要将整个结果集取出，再根据ROWNUM进行切割后返回，若结果集数据量比较大时，性能可能较低
2. 返回结果无序


## 争议点

1. 无排序，可能会将某一部分记录漏掉？

>[?] 认为并不会出现漏掉的情况，因为时间条件 ``` INPUT_DATE>=#{lastRecordCreateDate} ``` 已经限定了结果集，而后只是根据ROWNUM进行切割分批读取而已~


## 性能

### 测试1

```
//取5000条数据
lastRecordCreateDate=2019-01-01 00:00
beginIndex=700000
endIndex=705000
```

### 执行时长
序号|秒
-|-
1|0.827
2|0.831
3|0.882
4|0.644
5|0.665
6|0.665
7|0.668
8|0.666
9|0.652
10|0.664
平均|0.7164


### 测试2

```
//取5000条数据
lastRecordCreateDate=2019-01-01 00:00
```

### 执行时长
序号|beginIndex|endIndex|手动首次执行时长(秒)
-|-|-|-
1|710000|715000|0.668
2|715000|720000|0.637
3|720000|725000|0.662
4|725000|730000|0.694
5|730000|735000|0.764
6|735000|740000|0.710
7|740000|745000|0.735
8|745000|750000|1.036
9|750000|755000|0.852
10|755000|760000|0.701
11|760000|765000|0.850
12|765000|770000|0.798
13|770000|775000|0.719
14|775000|780000|0.729
15|780000|785000|0.726
16|785000|790000|0.711
17|790000|795000|0.830
18|795000|800000|0.749
19|800000|805000|0.857
20|805000|810000|1.021
21|810000|815000|0.735
22|815000|820000|0.766
#|平均||0.77045

## SQL
```

SELECT TMP_PAGE.* FROM
        (

        SELECT ROWNUM ROW_ID,
        REPORT_ID,
        REPORT_ODD,
        BIZ_ORG_CODE,
        CUSTOMER_CODE,
        CUSTOMER_NAME,
        TEST_ORG_CODE,
        TEST_ORG_NAME,
        PERSON_NAME,
        PHONE_NUMBER,
        GENDER,
        IDENTITY_TYPE,
        IDENTITY_NUMBER,
        SAMPLE_ORG_NAME,
        SAMPLE_DATE,
        SAMPLE_TYPE,
        TEST_ITEM_CODE,
        TEST_ITEM_NAME,
        SAMPLE_BARCODE,
        DETECTION_DATE,
        DETECTION_ORGNAME,
        TEST_RESULT,
        INPUT_DATE
        FROM XGUP.KMLIS_NCOV
        WHERE DELETE_FLAG = '0'
        AND ROWNUM &lt;= #{endIndex}
        AND INPUT_DATE>=#{lastRecordCreateDate}

        ) TMP_PAGE
WHERE TMP_PAGE.ROW_ID &gt; #{beginIndex}
ORDER BY TMP_PAGE.INPUT_DATE ASC

```

-------------------

# 方案2

## 逻辑

循环读数据时，迭代时间条件lastRecordCreateDate，使时间条件lastRecordCreateDate逐渐变大，根据INPUT_DATE顺序排序后，读取 0 ~ pageSize 条记录。
即SQL中，pageSize不变，lastRecordCreateDate循环增加（将本次查询所得记录的最后创建时间做为下次查询的lastRecordCreateDate），直到读取完所有满足条件的记录

## 优点

1. 目标总记录数随便时间条件lastRecordCreateDate的变大而逐渐变少

## 缺点

1. 若数据库有并发写入的情况，即同一时间点插入了n条记录，那么这n条记录的时间条件lastRecordCreateDate都是相同的，若迭代时刚好命中这个时间点，则会获取到重复的数据，且概率很高
2. 基于上一条，若pageSize小于数据库写入的最大并发数，有可能会进入无限循环

## 缺点预防措施

加大pageSize的值，确保pageSize大于或至少接近于数据库写入最大并发数

> 然而，若同一时间写入数据量过大时，可能无法避免此缺陷


## 性能

### 条件

```
//取5000条数据
排序字段INPUT_DATE 已加索引
lastRecordCreateDate=2019-01-01 00:00
pageSize=5000
```

### 执行时长
序号|秒s
-|-
1|0.177
2|0.169
3|0.170
4|0.166
5|0.189
6|0.186
7|0.158
8|0.173
9|0.159
10|0.168
平均|0.1715


## SQL
```

SELECT * FROM
        (

        SELECT
        REPORT_ID,
        REPORT_ODD,
        BIZ_ORG_CODE,
        CUSTOMER_CODE,
        CUSTOMER_NAME,
        TEST_ORG_CODE,
        TEST_ORG_NAME,
        PERSON_NAME,
        PHONE_NUMBER,
        GENDER,
        IDENTITY_TYPE,
        IDENTITY_NUMBER,
        SAMPLE_ORG_NAME,
        SAMPLE_DATE,
        SAMPLE_TYPE,
        TEST_ITEM_CODE,
        TEST_ITEM_NAME,
        SAMPLE_BARCODE,
        DETECTION_DATE,
        DETECTION_ORGNAME,
        TEST_RESULT,
        INPUT_DATE
        FROM XGUP.KMLIS_NCOV
        WHERE DELETE_FLAG = '0'
        AND INPUT_DATE>=#{lastRecordCreateDate}
        ORDER BY INPUT_DATE ASC

        )
WHERE ROWNUM <=#{pageSize}

```


