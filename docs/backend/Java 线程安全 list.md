# Java 线程安全 list


> https://zhuanlan.zhihu.com/p/140419781


|#|说明|内部实现
---|---|---
Collections.synchronizedList|Collections中有许多这个系列的方法，主要是利用了装饰者模式对传入的集合进行调用 Collotions中有内部类SynchronizedList，效率最高，线程安全|synchronized
CopyOnWriteArrayList|CopyOnWrite 写入时复制，它使一个List同步的替代品，通常情况下提供了更好的并发性，并且避免了再迭代时候对容器的加锁和复制。通常更适合用于迭代，在多插入的情况下由于多次的复制性能会一定的下降。|Lock

```
package test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * @Author: EEDC
 * @Description:
 * @Date: create in 2021/3/1 11:46
 */
public class SyncList {

    public static void main(String[] args) {


        copyOnWriteArrayListTest();
        synchronizedListTest();
    }

    private static void synchronizedListTest() {
        List<String> stringList = new ArrayList<>();
        List<String> synchronizedList = Collections.synchronizedList(stringList);

        int i = 100000;
        long startMs = System.currentTimeMillis();
        while (i > 0) {
            synchronizedList.add("0054ff75-87fe-46d4-870a-8ea562dd2821");
            i--;
        }
        System.out.println("synchronizedList:" + (System.currentTimeMillis() - startMs));
        System.out.println("synchronizedList size:" + synchronizedList.size());
    }

    private static void copyOnWriteArrayListTest() {
        List<String> copyOnWriteArrayList = new CopyOnWriteArrayList<>();
        int i = 100000;
        long startMs = System.currentTimeMillis();
        while (i > 0) {
            copyOnWriteArrayList.add("0054ff75-87fe-46d4-870a-8ea562dd2821");
            i--;
        }
        System.out.println("CopyOnWriteArrayList:" + (System.currentTimeMillis() - startMs));
        System.out.println("CopyOnWriteArrayList size:" + copyOnWriteArrayList.size());
    }

}
```

运行结果：

```
CopyOnWriteArrayList:5957
CopyOnWriteArrayList size:100000
synchronizedList:4
synchronizedList size:100000

Process finished with exit code 0
```