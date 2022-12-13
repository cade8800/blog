import{_ as i,o as n,c as e,d as s}from"./app.af5ffdc4.js";const t={},d=s(`<h1 id="java-\u7EBF\u7A0B\u5B89\u5168-list" tabindex="-1"><a class="header-anchor" href="#java-\u7EBF\u7A0B\u5B89\u5168-list" aria-hidden="true">#</a> Java \u7EBF\u7A0B\u5B89\u5168 list</h1><blockquote><p>https://zhuanlan.zhihu.com/p/140419781</p></blockquote><table><thead><tr><th>#</th><th>\u8BF4\u660E</th><th>\u5185\u90E8\u5B9E\u73B0</th></tr></thead><tbody><tr><td>Collections.synchronizedList</td><td>Collections\u4E2D\u6709\u8BB8\u591A\u8FD9\u4E2A\u7CFB\u5217\u7684\u65B9\u6CD5\uFF0C\u4E3B\u8981\u662F\u5229\u7528\u4E86\u88C5\u9970\u8005\u6A21\u5F0F\u5BF9\u4F20\u5165\u7684\u96C6\u5408\u8FDB\u884C\u8C03\u7528 Collotions\u4E2D\u6709\u5185\u90E8\u7C7BSynchronizedList\uFF0C\u6548\u7387\u6700\u9AD8\uFF0C\u7EBF\u7A0B\u5B89\u5168</td><td>synchronized</td></tr><tr><td>CopyOnWriteArrayList</td><td>CopyOnWrite \u5199\u5165\u65F6\u590D\u5236\uFF0C\u5B83\u4F7F\u4E00\u4E2AList\u540C\u6B65\u7684\u66FF\u4EE3\u54C1\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u63D0\u4F9B\u4E86\u66F4\u597D\u7684\u5E76\u53D1\u6027\uFF0C\u5E76\u4E14\u907F\u514D\u4E86\u518D\u8FED\u4EE3\u65F6\u5019\u5BF9\u5BB9\u5668\u7684\u52A0\u9501\u548C\u590D\u5236\u3002\u901A\u5E38\u66F4\u9002\u5408\u7528\u4E8E\u8FED\u4EE3\uFF0C\u5728\u591A\u63D2\u5165\u7684\u60C5\u51B5\u4E0B\u7531\u4E8E\u591A\u6B21\u7684\u590D\u5236\u6027\u80FD\u4F1A\u4E00\u5B9A\u7684\u4E0B\u964D\u3002</td><td>Lock</td></tr></tbody></table><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package test;

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
        List&lt;String&gt; stringList = new ArrayList&lt;&gt;();
        List&lt;String&gt; synchronizedList = Collections.synchronizedList(stringList);

        int i = 100000;
        long startMs = System.currentTimeMillis();
        while (i &gt; 0) {
            synchronizedList.add(&quot;0054ff75-87fe-46d4-870a-8ea562dd2821&quot;);
            i--;
        }
        System.out.println(&quot;synchronizedList:&quot; + (System.currentTimeMillis() - startMs));
        System.out.println(&quot;synchronizedList size:&quot; + synchronizedList.size());
    }

    private static void copyOnWriteArrayListTest() {
        List&lt;String&gt; copyOnWriteArrayList = new CopyOnWriteArrayList&lt;&gt;();
        int i = 100000;
        long startMs = System.currentTimeMillis();
        while (i &gt; 0) {
            copyOnWriteArrayList.add(&quot;0054ff75-87fe-46d4-870a-8ea562dd2821&quot;);
            i--;
        }
        System.out.println(&quot;CopyOnWriteArrayList:&quot; + (System.currentTimeMillis() - startMs));
        System.out.println(&quot;CopyOnWriteArrayList size:&quot; + copyOnWriteArrayList.size());
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CopyOnWriteArrayList:5957
CopyOnWriteArrayList size:100000
synchronizedList:4
synchronizedList size:100000

Process finished with exit code 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[d];function r(a,v){return n(),e("div",null,l)}const u=i(t,[["render",r],["__file","Java \u7EBF\u7A0B\u5B89\u5168 list.html.vue"]]);export{u as default};
