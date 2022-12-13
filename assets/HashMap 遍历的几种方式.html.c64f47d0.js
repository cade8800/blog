import{_ as n,o as i,c as e,d as s}from"./app.af5ffdc4.js";const a={},t=s(`<h1 id="hashmap-\u904D\u5386\u7684\u51E0\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#hashmap-\u904D\u5386\u7684\u51E0\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> HashMap \u904D\u5386\u7684\u51E0\u79CD\u65B9\u5F0F</h1><blockquote><p>https://blog.csdn.net/devin_xin/article/details/106348698</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package test;

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
        HashMap&lt;String, Integer&gt; hashMap = new HashMap&lt;&gt;();
        hashMap.put(&quot;A&quot;, 1111);
        hashMap.put(&quot;B&quot;, 2222);
        hashMap.put(&quot;C&quot;, 3333);
        hashMap.put(&quot;D&quot;, 4444);
        hashMap.put(&quot;E&quot;, 4444);

        test1(hashMap);
        test2(hashMap);
        test3(hashMap);
        test4(hashMap);
    }

    // \u5229\u7528entrySet()\u8FDB\u884C\u904D\u5386
    private static void test1(HashMap&lt;String, Integer&gt; hashMap) {
        for (Map.Entry&lt;String, Integer&gt; entry : hashMap.entrySet()) {
            System.out.println(entry.getKey() + &quot;:&quot; + entry.getValue());
        }
        System.out.println(&quot;-----------------\u65B9\u6CD51:end-----------------&quot;);
    }

    // \u5229\u7528keySet()\u3001values() \u5206\u522B\u904D\u5386key\u4E0Evalue
    private static void test2(HashMap&lt;String, Integer&gt; hashMap) {
        // \u904D\u5386key
        for (String key : hashMap.keySet()) {
            System.out.println(&quot;key:&quot; + key);
        }

        // \u904D\u5386value
        for (Integer val : hashMap.values()) {
            System.out.println(&quot;value:&quot; + val);
        }
        System.out.println(&quot;-----------------\u65B9\u6CD52:end-----------------&quot;);
    }

    // \u4F7F\u7528\u5E26\u6CDB\u578B\u7684\u8FED\u4EE3\u5668\u8FDB\u884C\u904D\u5386
    private static void test3(HashMap&lt;String, Integer&gt; hashMap) {
        Iterator&lt;Map.Entry&lt;String, Integer&gt;&gt; mapEntry = hashMap.entrySet().iterator();
        while (mapEntry.hasNext()) {
            Map.Entry&lt;String, Integer&gt; col = mapEntry.next();
            System.out.println(col.getKey() + &quot;:&quot; + col.getValue());
        }
        System.out.println(&quot;-----------------\u65B9\u6CD53:end-----------------&quot;);
    }

    // \u901A\u8FC7Java8 Lambda\u8868\u8FBE\u5F0F\u904D\u5386
    private static void test4(HashMap&lt;String, Integer&gt; hashMap) {
        hashMap.forEach((k, v) -&gt; {
            System.out.println(k + &quot;:&quot; + v);
        });
        System.out.println(&quot;-----------------\u65B9\u6CD54:end-----------------&quot;);
    }


}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[t];function d(v,r){return i(),e("div",null,l)}const c=n(a,[["render",d],["__file","HashMap \u904D\u5386\u7684\u51E0\u79CD\u65B9\u5F0F.html.vue"]]);export{c as default};
