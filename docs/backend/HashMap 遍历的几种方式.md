# HashMap 遍历的几种方式


> https://blog.csdn.net/devin_xin/article/details/106348698


```
package test;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * @Author: EEDC
 * @Description:
 * @Date: create in 2021/3/3 18:24
 */
public class HashMapForEachTest {

    public static void main(String[] args) {
        HashMap<String, Integer> hashMap = new HashMap<>();
        hashMap.put("A", 1111);
        hashMap.put("B", 2222);
        hashMap.put("C", 3333);
        hashMap.put("D", 4444);
        hashMap.put("E", 4444);

        test1(hashMap);
        test2(hashMap);
        test3(hashMap);
        test4(hashMap);
    }

    // 利用entrySet()进行遍历
    private static void test1(HashMap<String, Integer> hashMap) {
        for (Map.Entry<String, Integer> entry : hashMap.entrySet()) {
            System.out.println(entry.getKey() + ":" + entry.getValue());
        }
        System.out.println("-----------------方法1:end-----------------");
    }

    // 利用keySet()、values() 分别遍历key与value
    private static void test2(HashMap<String, Integer> hashMap) {
        // 遍历key
        for (String key : hashMap.keySet()) {
            System.out.println("key:" + key);
        }

        // 遍历value
        for (Integer val : hashMap.values()) {
            System.out.println("value:" + val);
        }
        System.out.println("-----------------方法2:end-----------------");
    }

    // 使用带泛型的迭代器进行遍历
    private static void test3(HashMap<String, Integer> hashMap) {
        Iterator<Map.Entry<String, Integer>> mapEntry = hashMap.entrySet().iterator();
        while (mapEntry.hasNext()) {
            Map.Entry<String, Integer> col = mapEntry.next();
            System.out.println(col.getKey() + ":" + col.getValue());
        }
        System.out.println("-----------------方法3:end-----------------");
    }

    // 通过Java8 Lambda表达式遍历
    private static void test4(HashMap<String, Integer> hashMap) {
        hashMap.forEach((k, v) -> {
            System.out.println(k + ":" + v);
        });
        System.out.println("-----------------方法4:end-----------------");
    }


}
```