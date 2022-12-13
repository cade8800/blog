import{_ as e,o as l,c as i,d as n}from"./app.af5ffdc4.js";const r={},a=n(`<h1 id="\u6570\u7EC4\u65B9\u6CD5\u53CAes6\u65B0\u589E\u6570\u7EC4\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u65B9\u6CD5\u53CAes6\u65B0\u589E\u6570\u7EC4\u65B9\u6CD5" aria-hidden="true">#</a> \u6570\u7EC4\u65B9\u6CD5\u53CAes6\u65B0\u589E\u6570\u7EC4\u65B9\u6CD5</h1><ol><li>arr.push() \u4ECE\u540E\u9762\u6DFB\u52A0\u5143\u7D20\uFF0C\u8FD4\u56DE\u503C\u4E3A\u6DFB\u52A0\u5B8C\u540E\u7684\u6570\u7EC4\u7684\u957F\u5EA6</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1,2,3,4,5]
console.log(arr.push(5))   // 6
console.log(arr) // [1,2,3,4,5,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>arr.pop() \u4ECE\u540E\u9762\u5220\u9664\u5143\u7D20\uFF0C\u53EA\u80FD\u662F\u4E00\u4E2A\uFF0C\u8FD4\u56DE\u503C\u662F\u5220\u9664\u7684\u5143\u7D20</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1,2,3,4,5]
console.log(arr.pop())     // 5
console.log(arr)  //[1,2,3,4]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>arr.shift() \u4ECE\u524D\u9762\u5220\u9664\u5143\u7D20\uFF0C\u53EA\u80FD\u5220\u9664\u4E00\u4E2A \u8FD4\u56DE\u503C\u662F\u5220\u9664\u7684\u5143\u7D20</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1,2,3,4,5]
console.log(arr.shift())  // 1
console.log(arr)   // [2,3,4,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>arr.unshift() \u4ECE\u524D\u9762\u6DFB\u52A0\u5143\u7D20, \u8FD4\u56DE\u503C\u662F\u6DFB\u52A0\u5B8C\u540E\u7684\u6570\u7EC4\u7684\u957F\u5EA6</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1,2,3,4,5]
console.log(arr.unshift(2))    // 6
console.log(arr)  //[2,1,2,3,4,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>arr.splice(i,n) \u5220\u9664\u4ECEi(\u7D22\u5F15\u503C)\u5F00\u59CB\u4E4B\u540E\u7684\u90A3\u4E2A\u5143\u7D20\u3002\u8FD4\u56DE\u503C\u662F\u5220\u9664\u7684\u5143\u7D20</li></ol><blockquote><p>\u53C2\u6570\uFF1A i \u7D22\u5F15\u503C n \u4E2A\u6570</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1,2,3,4,5]
console.log(arr.splice(2,2))     //[3,4]
console.log(arr)    // [1,2,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5411\u6570\u7EC4\u6307\u5B9A\u4F4D\u7F6E\u6DFB\u52A0\u5143\u7D20</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var array = [&quot;one&quot;, &quot;two&quot;, &quot;four&quot;];
console.log(JSON.stringify(array));//[&quot;one&quot;,&quot;two&quot;,&quot;four&quot;]
//\u5728\u6307\u5B9A\u4F4D\u7F6E\u6DFB\u52A0\u5143\u7D20,\u7B2C\u4E00\u4E2A\u53C2\u6570\u6307\u5B9A\u4F4D\u7F6E,\u7B2C\u4E8C\u4E2A\u53C2\u6570\u6307\u5B9A\u8981\u5220\u9664\u7684\u5143\u7D20,\u5982\u679C\u4E3A0,\u5219\u8FFD\u52A0
array.splice(2, 0, &quot;three&quot;);
console.log(JSON.stringify(array));//[&quot;one&quot;,&quot;two&quot;,&quot;three&quot;,&quot;four&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>arr.concat() \u8FDE\u63A5\u4E24\u4E2A\u6570\u7EC4 \u8FD4\u56DE\u503C\u4E3A\u8FDE\u63A5\u540E\u7684\u65B0\u6570\u7EC4</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1,2,3,4,5]
console.log(arr.concat([1,2]))  // [1,2,3,4,5,1,2]
console.log(arr)   // [1,2,3,4,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>str.split() \u5C06\u5B57\u7B26\u4E32\u8F6C\u5316\u4E3A\u6570\u7EC4</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let str = &#39;123456&#39;
console.log(str.split(&#39;&#39;)) // [&quot;1&quot;, &quot;2&quot;, &quot;3&quot;, &quot;4&quot;, &quot;5&quot;, &quot;6&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>arr.sort() \u5C06\u6570\u7EC4\u8FDB\u884C\u6392\u5E8F,\u8FD4\u56DE\u503C\u662F\u6392\u597D\u7684\u6570\u7EC4\uFF0C\u9ED8\u8BA4\u662F\u6309\u7167\u6700\u5DE6\u8FB9\u7684\u6570\u5B57\u8FDB\u884C\u6392\u5E8F\uFF0C\u4E0D\u662F\u6309\u7167\u6570\u5B57\u5927\u5C0F\u6392\u5E8F\u7684\uFF0C\u89C1\u4F8B\u5B50\u3002</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [2,10,6,1,4,22,3]
console.log(arr.sort())   // [1, 10, 2, 22, 3, 4, 6]
let arr1 = arr.sort((a, b) =&gt;a - b)  
console.log(arr1)   // [1, 2, 3, 4, 6, 10, 22]
let arr2 = arr.sort((a, b) =&gt;b-a)  
console.log(arr2)  // [22, 10, 6, 4, 3, 2, 1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li>arr.reverse() \u5C06\u6570\u7EC4\u53CD\u8F6C,\u8FD4\u56DE\u503C\u662F\u53CD\u8F6C\u540E\u7684\u6570\u7EC4</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1,2,3,4,5]
console.log(arr.reverse())    // [5,4,3,2,1]
console.log(arr)    // [5,4,3,2,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10"><li>arr.slice(start,end) \u5207\u53BB\u7D22\u5F15\u503Cstart\u5230\u7D22\u5F15\u503Cend\u7684\u6570\u7EC4\uFF0C\u4E0D\u5305\u542Bend\u7D22\u5F15\u7684\u503C\uFF0C\u8FD4\u56DE\u503C\u662F\u5207\u51FA\u6765\u7684\u6570\u7EC4</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1,2,3,4,5]
console.log(arr.slice(1,3))   // [2,3]
console.log(arr)    //  [1,2,3,4,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11"><li>arr.forEach(callback) \u904D\u5386\u6570\u7EC4,\u65E0return</li></ol><blockquote><p>callback\u7684\u53C2\u6570\uFF1A</p><ul><li>value --\u5F53\u524D\u7D22\u5F15\u7684\u503C</li><li>index --\u7D22\u5F15</li><li>array --\u539F\u6570\u7EC4</li></ul></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1,2,3,4,5]
arr.forEach( (value,index,array)=&gt;{
        console.log(\`value:\${value}    index:\${index}     array:\${array}\`)
    })   
    //  value:1    index:0     array:1,2,3,4,5
    //  value:2    index:1     array:1,2,3,4,5
    //  value:3    index:2     array:1,2,3,4,5
    //  value:4    index:3     array:1,2,3,4,5
    //  value:5    index:4     array:1,2,3,4,5

let arr = [1,2,3,4,5]
arr.forEach( (value,index,array)=&gt;{
        value = value * 2
        console.log(\`value:\${value}    index:\${index}     array:\${array}\`)
    })   
    console.log(arr)
    // value:2    index:0     array:1,2,3,4,5
    // value:4    index:1     array:1,2,3,4,5
    // value:6    index:2     array:1,2,3,4,5
    // value:8    index:3     array:1,2,3,4,5
    // value:10   index:4     array:1,2,3,4,5
    // [1, 2, 3, 4, 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="12"><li>arr.map(callback) \u6620\u5C04\u6570\u7EC4(\u904D\u5386\u6570\u7EC4),\u6709return \u8FD4\u56DE\u4E00\u4E2A\u65B0\u6570\u7EC4</li></ol><blockquote><p>callback\u7684\u53C2\u6570\uFF1A</p><ul><li>value --\u5F53\u524D\u7D22\u5F15\u7684\u503C</li><li>index --\u7D22\u5F15</li><li>array --\u539F\u6570\u7EC4</li></ul></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1,2,3,4,5]
arr.map( (value,index,array)=&gt;{
        value = value * 2
        console.log(\`value:\${value}    index:\${index}     array:\${array}\`)
})   
console.log(arr)


ps: arr.forEach()\u548Carr.map()\u7684\u533A\u522B 
    1. arr.forEach()\u662F\u548Cfor\u5FAA\u73AF\u4E00\u6837\uFF0C\u662F\u4EE3\u66FFfor\u3002arr.map()\u662F\u4FEE\u6539\u6570\u7EC4\u5176\u4E2D\u7684\u6570\u636E\uFF0C\u5E76\u8FD4\u56DE\u65B0\u7684\u6570\u636E\u3002
    2. arr.forEach() \u6CA1\u6709return  arr.map() \u6709return
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="13"><li>arr.filter(callback) \u8FC7\u6EE4\u6570\u7EC4\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6EE1\u8DB3\u8981\u6C42\u7684\u6570\u7EC4</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1,2,3,4,5]
let arr1 = arr.filter( (i, v) =&gt; i &lt; 3)
console.log(arr1)    // [1, 2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="14"><li>arr.every(callback) \u4F9D\u636E\u5224\u65AD\u6761\u4EF6\uFF0C\u6570\u7EC4\u7684\u5143\u7D20\u662F\u5426\u5168\u6EE1\u8DB3\uFF0C\u82E5\u6EE1\u8DB3\u5219\u8FD4\u56DEture</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1,2,3,4,5]
let arr1 = arr.every( (i, v) =&gt; i &lt; 3)
console.log(arr1)    // false
let arr2 = arr.every( (i, v) =&gt; i &lt; 10)
console.log(arr2)    // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="15"><li>arr.some() \u4F9D\u636E\u5224\u65AD\u6761\u4EF6\uFF0C\u6570\u7EC4\u7684\u5143\u7D20\u662F\u5426\u6709\u4E00\u4E2A\u6EE1\u8DB3\uFF0C\u82E5\u6709\u4E00\u4E2A\u6EE1\u8DB3\u5219\u8FD4\u56DEture</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [1,2,3,4,5]
let arr1 = arr.some( (i, v) =&gt; i &lt; 3)
console.log(arr1)    // true
let arr2 = arr.some( (i, v) =&gt; i &gt; 10)
console.log(arr2)    // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="16"><li>arr.reduce(callback, initialValue) \u8FED\u4EE3\u6570\u7EC4\u7684\u6240\u6709\u9879\uFF0C\u7D2F\u52A0\u5668\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u503C\uFF08\u4ECE\u5DE6\u5230\u53F3\uFF09\u5408\u5E76\uFF0C\u6700\u7EC8\u8BA1\u7B97\u4E3A\u4E00\u4E2A\u503C</li></ol><blockquote><p>\u53C2\u6570\uFF1A</p><ul><li>callback: previousValue \u5FC5\u9009 --\u4E0A\u4E00\u6B21\u8C03\u7528\u56DE\u8C03\u8FD4\u56DE\u7684\u503C\uFF0C\u6216\u8005\u662F\u63D0\u4F9B\u7684\u521D\u59CB\u503C\uFF08initialValue\uFF09</li><li>currentValue \u5FC5\u9009 --\u6570\u7EC4\u4E2D\u5F53\u524D\u88AB\u5904\u7406\u7684\u6570\u7EC4\u9879</li><li>index \u53EF\u9009 --\u5F53\u524D\u6570\u7EC4\u9879\u5728\u6570\u7EC4\u4E2D\u7684\u7D22\u5F15\u503C</li><li>array \u53EF\u9009 --\u539F\u6570\u7EC4</li><li>initialValue: \u53EF\u9009 --\u521D\u59CB\u503C</li></ul></blockquote><blockquote><p><strong>\u5B9E\u884C\u65B9\u6CD5\uFF1A</strong> \u56DE\u8C03\u51FD\u6570\u7B2C\u4E00\u6B21\u6267\u884C\u65F6\uFF0CpreValue \u548C curValue \u53EF\u4EE5\u662F\u4E00\u4E2A\u503C\uFF0C\u5982\u679C initialValue \u5728\u8C03\u7528 reduce() \u65F6\u88AB\u63D0\u4F9B\uFF0C\u90A3\u4E48\u7B2C\u4E00\u4E2A preValue \u7B49\u4E8E initialValue \uFF0C\u5E76\u4E14curValue \u7B49\u4E8E\u6570\u7EC4\u4E2D\u7684\u7B2C\u4E00\u4E2A\u503C\uFF1B\u5982\u679CinitialValue \u672A\u88AB\u63D0\u4F9B\uFF0C\u90A3\u4E48preValue \u7B49\u4E8E\u6570\u7EC4\u4E2D\u7684\u7B2C\u4E00\u4E2A\u503C.</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [0,1,2,3,4]
let arr1 = arr.reduce((preValue, curValue) =&gt; 
    preValue + curValue
)
console.log(arr1)    // 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="17"><li>find()\u4E0EfindIndex()</li></ol><blockquote><p>find()\u65B9\u6CD5\uFF0C\u7528\u4E8E\u627E\u51FA\u7B2C\u4E00\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u6570\u7EC4\u6210\u5458\u3002\u5B83\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u6240\u6709\u6570\u7EC4\u6210\u5458\u4F9D\u6B21\u6267\u884C\u8BE5\u56DE\u8C03\u51FD\u6570\uFF0C\u76F4\u5230\u627E\u51FA\u7B2C\u4E00\u4E2A\u8FD4\u56DE\u503C\u4E3Atrue\u7684\u6210\u5458\uFF0C\u7136\u540E\u8FD4\u56DE\u8BE5\u6210\u5458\u3002\u5982\u679C\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u6210\u5458\uFF0C\u5219\u8FD4\u56DEundefined\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[1, 2, 5, -1, 9].find((n) =&gt; n &lt; 0)
//\u627E\u51FA\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u5C0F\u4E8E 0 \u7684\u6210\u5458
// -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>find()\u65B9\u6CD5\u7684\u56DE\u8C03\u51FD\u6570\u53EF\u4EE5\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\u5F53\u524D\u7684\u503C\u3001\u5F53\u524D\u7684\u4F4D\u7F6E\u548C\u539F\u6570\u7EC4\u3002</p></blockquote><blockquote><p>findIndex()\u65B9\u6CD5\u7684\u7528\u6CD5\u4E0Efind()\u65B9\u6CD5\u975E\u5E38\u7C7B\u4F3C\uFF0C\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u6570\u7EC4\u6210\u5458\u7684\u4F4D\u7F6E\uFF0C\u5982\u679C\u6240\u6709\u6210\u5458\u90FD\u4E0D\u7B26\u5408\u6761\u4EF6\uFF0C\u5219\u8FD4\u56DE-1\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[1, 2, 5, -1, 9].findIndex((n) =&gt; n &lt; 0)
//\u8FD4\u56DE\u7B26\u5408\u6761\u4EF6\u7684\u503C\u7684\u4F4D\u7F6E\uFF08\u7D22\u5F15\uFF09
// 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46),s=[a];function d(t,u){return l(),i("div",null,s)}const v=e(r,[["render",d],["__file","\u6570\u7EC4\u65B9\u6CD5\u53CAes6\u65B0\u589E\u6570\u7EC4\u65B9\u6CD5.html.vue"]]);export{v as default};
