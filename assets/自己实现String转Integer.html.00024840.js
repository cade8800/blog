import{_ as n,o as e,c as i,d as r}from"./app.af5ffdc4.js";const s={},d=r(`<h1 id="\u81EA\u5DF1\u5B9E\u73B0string\u8F6Cinteger" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5DF1\u5B9E\u73B0string\u8F6Cinteger" aria-hidden="true">#</a> \u81EA\u5DF1\u5B9E\u73B0String\u8F6CInteger</h1><blockquote><p><strong>\u8981\u70B9</strong>\uFF1A\u901A\u8FC7\u5B57\u7B26\u5728unicode\u4E2D\u7684\u6392\u5E8F\u4F4D\u7F6E\u6C42\u5F97\u5B57\u7B26\u5BF9\u5E94\u7684Int\u503C</p></blockquote><blockquote><p>\u82E5\u5B57\u7B26<code>x</code>\u5728unicode\u8868\u4E2D\u7684\u6392\u5E8F\u4F4D\u7F6E\u4E3A50\uFF0C\u5DF2\u77E50\u7684\u6392\u5E8F\u4F4D\u7F6E\u4E3A48</p></blockquote><blockquote><p>\u5219\uFF0C<code>x=50-48=2</code>,\u5373<code>x</code>\u5C31\u662F\u963F\u62C9\u4F2F\u6570\u5B572</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    /**
     * \u81EA\u5DF1\u5B9E\u73B0String\u8F6CInteger
     * @param strInput
     * @return
     */
    private static Integer parseInt(String strInput) {

        // \u82E5\u5305\u542B\u5C0F\u6570\u70B9\uFF0C\u5219\u4EC5\u4FDD\u7559\u5C0F\u6570\u70B9\u524D\u7684\u5B57\u7B26\u4E32
        strInput = strInput.indexOf(&quot;.&quot;) &gt;= 0 ? strInput.substring(0, strInput.indexOf(&quot;.&quot;)) : strInput;

        char[] arrChar = strInput.toCharArray();

        int result = 0;

        for (int i = 0; i &lt; arrChar.length; i++) {
            int c = arrChar[i];

            // 0\u5728unicode\u8868\u4E2D\u7684\u6392\u5E8F\u4F4D\u7F6E\u4E3A48\uFF0C9\u5728unicode\u8868\u4E2D\u7684\u6392\u5E8F\u4F4D\u7F6E\u4E3A57
            // \u786E\u5B9A\u5B57\u7B26\u662F\u5426\u4E3A\u963F\u62C9\u4F2F\u6570\u5B57
            if (c &gt;= 48 &amp;&amp; c &lt;= 57) {

                // \u901A\u8FC7unicode\u6392\u5E8F\u4F4D\u7F6E\u7684\u5DEE\u53EF\u5F97\u5F53\u524D\u963F\u62C9\u4F2F\u6570\u5B57\u7684\u503C
                result += (c - 48) * Math.pow(10, arrChar.length - i - 1);

            } else {
                // \u82E5\u5305\u542B\u975E\u963F\u62C9\u4F2F\u6570\u5B57\u5219\u76F4\u63A5\u8FD4\u56DE0
                return 0;
            }
        }

        return result;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[d];function t(a,c){return e(),i("div",null,l)}const v=n(s,[["render",t],["__file","\u81EA\u5DF1\u5B9E\u73B0String\u8F6CInteger.html.vue"]]);export{v as default};
