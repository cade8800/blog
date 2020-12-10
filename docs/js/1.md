# 数组方法及es6新增数组方法

1. arr.push() 从后面添加元素，返回值为添加完后的数组的长度

```
let arr = [1,2,3,4,5]
console.log(arr.push(5))   // 6
console.log(arr) // [1,2,3,4,5,5]
```

2. arr.pop() 从后面删除元素，只能是一个，返回值是删除的元素

```
let arr = [1,2,3,4,5]
console.log(arr.pop())     // 5
console.log(arr)  //[1,2,3,4]
```

3. arr.shift() 从前面删除元素，只能删除一个 返回值是删除的元素

```
let arr = [1,2,3,4,5]
console.log(arr.shift())  // 1
console.log(arr)   // [2,3,4,5]
```

4. arr.unshift() 从前面添加元素, 返回值是添加完后的数组的长度

```
let arr = [1,2,3,4,5]
console.log(arr.unshift(2))    // 6
console.log(arr)  //[2,1,2,3,4,5]
```

5. arr.splice(i,n) 删除从i(索引值)开始之后的那个元素。返回值是删除的元素

>　　参数： i 索引值      n 个数

```
let arr = [1,2,3,4,5]
console.log(arr.splice(2,2))     //[3,4]
console.log(arr)    // [1,2,5]
```

>向数组指定位置添加元素

```
var array = ["one", "two", "four"];
console.log(JSON.stringify(array));//["one","two","four"]
//在指定位置添加元素,第一个参数指定位置,第二个参数指定要删除的元素,如果为0,则追加
array.splice(2, 0, "three");
console.log(JSON.stringify(array));//["one","two","three","four"]
```


6. arr.concat() 连接两个数组 返回值为连接后的新数组

```
let arr = [1,2,3,4,5]
console.log(arr.concat([1,2]))  // [1,2,3,4,5,1,2]
console.log(arr)   // [1,2,3,4,5]
```

7. str.split() 将字符串转化为数组

```
let str = '123456'
console.log(str.split('')) // ["1", "2", "3", "4", "5", "6"]
```

8. arr.sort() 将数组进行排序,返回值是排好的数组，默认是按照最左边的数字进行排序，不是按照数字大小排序的，见例子。

```
let arr = [2,10,6,1,4,22,3]
console.log(arr.sort())   // [1, 10, 2, 22, 3, 4, 6]
let arr1 = arr.sort((a, b) =>a - b)  
console.log(arr1)   // [1, 2, 3, 4, 6, 10, 22]
let arr2 = arr.sort((a, b) =>b-a)  
console.log(arr2)  // [22, 10, 6, 4, 3, 2, 1]
```

9. arr.reverse() 将数组反转,返回值是反转后的数组

```
let arr = [1,2,3,4,5]
console.log(arr.reverse())    // [5,4,3,2,1]
console.log(arr)    // [5,4,3,2,1]
```

10. arr.slice(start,end) 切去索引值start到索引值end的数组，不包含end索引的值，返回值是切出来的数组

```
let arr = [1,2,3,4,5]
console.log(arr.slice(1,3))   // [2,3]
console.log(arr)    //  [1,2,3,4,5]
```

11. arr.forEach(callback) 遍历数组,无return

>　　callback的参数：
>- value --当前索引的值
>- index --索引
>- array --原数组

```
let arr = [1,2,3,4,5]
arr.forEach( (value,index,array)=>{
        console.log(`value:${value}    index:${index}     array:${array}`)
    })   
    //  value:1    index:0     array:1,2,3,4,5
    //  value:2    index:1     array:1,2,3,4,5
    //  value:3    index:2     array:1,2,3,4,5
    //  value:4    index:3     array:1,2,3,4,5
    //  value:5    index:4     array:1,2,3,4,5

let arr = [1,2,3,4,5]
arr.forEach( (value,index,array)=>{
        value = value * 2
        console.log(`value:${value}    index:${index}     array:${array}`)
    })   
    console.log(arr)
    // value:2    index:0     array:1,2,3,4,5
    // value:4    index:1     array:1,2,3,4,5
    // value:6    index:2     array:1,2,3,4,5
    // value:8    index:3     array:1,2,3,4,5
    // value:10   index:4     array:1,2,3,4,5
    // [1, 2, 3, 4, 5]
```

12. arr.map(callback) 映射数组(遍历数组),有return 返回一个新数组

>　　callback的参数： 
>- value --当前索引的值
>- index --索引
>- array --原数组

```
let arr = [1,2,3,4,5]
arr.map( (value,index,array)=>{
        value = value * 2
        console.log(`value:${value}    index:${index}     array:${array}`)
})   
console.log(arr)


ps: arr.forEach()和arr.map()的区别 
    1. arr.forEach()是和for循环一样，是代替for。arr.map()是修改数组其中的数据，并返回新的数据。
    2. arr.forEach() 没有return  arr.map() 有return
```

13. arr.filter(callback) 过滤数组，返回一个满足要求的数组

```
let arr = [1,2,3,4,5]
let arr1 = arr.filter( (i, v) => i < 3)
console.log(arr1)    // [1, 2]
```

14. arr.every(callback) 依据判断条件，数组的元素是否全满足，若满足则返回ture

```
let arr = [1,2,3,4,5]
let arr1 = arr.every( (i, v) => i < 3)
console.log(arr1)    // false
let arr2 = arr.every( (i, v) => i < 10)
console.log(arr2)    // true
```

15. arr.some() 依据判断条件，数组的元素是否有一个满足，若有一个满足则返回ture

```
let arr = [1,2,3,4,5]
let arr1 = arr.some( (i, v) => i < 3)
console.log(arr1)    // true
let arr2 = arr.some( (i, v) => i > 10)
console.log(arr2)    // false
```

16. arr.reduce(callback, initialValue) 迭代数组的所有项，累加器，数组中的每个值（从左到右）合并，最终计算为一个值

>　　参数： 
>- callback: previousValue 必选 --上一次调用回调返回的值，或者是提供的初始值（initialValue）
>- currentValue 必选 --数组中当前被处理的数组项
>- index 可选 --当前数组项在数组中的索引值
>- array 可选 --原数组
>- initialValue: 可选 --初始值

>**实行方法：**
>回调函数第一次执行时，preValue 和 curValue 可以是一个值，如果 initialValue 在调用 reduce() 时被提供，那么第一个 preValue 等于 initialValue ，并且curValue 等于数组中的第一个值；如果initialValue 未被提供，那么preValue 等于数组中的第一个值.

```
let arr = [0,1,2,3,4]
let arr1 = arr.reduce((preValue, curValue) => 
    preValue + curValue
)
console.log(arr1)    // 10
```

17.  find()与findIndex()

>   find()方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。

``` 
[1, 2, 5, -1, 9].find((n) => n < 0)
//找出数组中第一个小于 0 的成员
// -1
```

>find()方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。

>findIndex()方法的用法与find()方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。


```
[1, 2, 5, -1, 9].findIndex((n) => n < 0)
//返回符合条件的值的位置（索引）
// 
```