import{_ as e,o as i,c as s,d as n}from"./app.af5ffdc4.js";const d={},a=n(`<h1 id="fetch-demo" tabindex="-1"><a class="header-anchor" href="#fetch-demo" aria-hidden="true">#</a> fetch demo</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>fetch(&#39;https://seller.xiapi.shopee.cn/api/v3/product/page_product_list/?SPC_CDS=3557b6ce-3c6e-4a75-ada1-7c26d78b49e0&amp;SPC_CDS_VER=2&amp;page_number=6&amp;page_size=48&amp;list_type=&amp;search_type=name&amp;source=seller_center&amp;version=3.2.0&#39;)
    .then(res =&gt; res.json()).then(res =&gt; {
        var list = res.data.list;
        var ids = { ids: [] };
        list.forEach(item =&gt; {
            ids.ids.push(item.id);
        });
        console.log(ids);

        fetch(&#39;https://seller.xiapi.shopee.cn/api/v3/product/dismiss_invalid_products?SPC_CDS=3557b6ce-3c6e-4a75-ada1-7c26d78b49e0&amp;SPC_CDS_VER=2&#39;, {
            method: &#39;POST&#39;,
            headers: {
                &#39;Content-Type&#39;: &#39;application/json&#39;,
            },
            body: JSON.stringify(ids)
        });


    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[a];function c(t,r){return i(),s("div",null,l)}const m=e(d,[["render",c],["__file","fetch demo.html.vue"]]);export{m as default};
