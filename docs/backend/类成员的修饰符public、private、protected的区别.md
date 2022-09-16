# 类成员的修饰符public、private、protected的区别

- `private`：只能用于类的成员，可以完全隐藏类的成员，不能从类外直接访问它们。

- `(default)`：允许同一个包里的任何类直接访问类的成员。

- `protected`：只能用于类的成员，允许任何包中的子类或同一包中的类访问类的成员。

- `public`：修饰符允许任意类访问类的成员。


---


使用域|当前类|同一package|子孙类|其他package
---|---|---|---|---
public|✔|✔|✔|✔
protected|✔|✔|✔|✘
friendly|✔|✔|✘|✘
private|✔|✘|✘|✘


---


<table>
<tr>
    <td rowspan='2'>访问包位置</td>
    <td colspan='3'>类修饰符</td>
</tr>
<tr>
    <td>private</td>
    <td>protected</td>
    <td>public</td>
</tr>
<tr>
    <td>本类</td>
    <td>可见</td>
    <td>可见</td>
    <td>可见</td>
</tr>
<tr>
    <td>同包其他类或子类</td>
    <td>不可见</td>
    <td>可见</td>
    <td>可见</td>
</tr>
<tr>
    <td>其他包的类或子类</td>
    <td>不可见</td>
    <td>不可见</td>
    <td>可见</td>
</tr>
</table>