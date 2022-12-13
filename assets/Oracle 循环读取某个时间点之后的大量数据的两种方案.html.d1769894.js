import{_ as d,o as t,c as e,d as i}from"./app.af5ffdc4.js";const a={},n=i(`<h1 id="oracle-\u5FAA\u73AF\u8BFB\u53D6\u67D0\u4E2A\u65F6\u95F4\u70B9\u4E4B\u540E\u7684\u5927\u91CF\u6570\u636E\u7684\u4E24\u79CD\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#oracle-\u5FAA\u73AF\u8BFB\u53D6\u67D0\u4E2A\u65F6\u95F4\u70B9\u4E4B\u540E\u7684\u5927\u91CF\u6570\u636E\u7684\u4E24\u79CD\u65B9\u6848" aria-hidden="true">#</a> Oracle \u5FAA\u73AF\u8BFB\u53D6\u67D0\u4E2A\u65F6\u95F4\u70B9\u4E4B\u540E\u7684\u5927\u91CF\u6570\u636E\u7684\u4E24\u79CD\u65B9\u6848</h1><h1 id="\u65B9\u68481" tabindex="-1"><a class="header-anchor" href="#\u65B9\u68481" aria-hidden="true">#</a> \u65B9\u68481</h1><h2 id="\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#\u903B\u8F91" aria-hidden="true">#</a> \u903B\u8F91</h2><p>\u65E0\u6392\u5E8F\u5206\u9875\uFF0C\u6307\u5B9A\u9650\u5B9A\u65F6\u95F4\u5185\u7684\u7ED3\u679C\u96C6\uFF0C\u6309ROWNUM\u8FDB\u884C\u5207\u5272\u5206\u6279\u53D6\u51FA\u3002 \u5373SQL\u4E2D\uFF0ClastRecordCreateDate\u4E0D\u53D8\uFF0CbeginIndex\u4E0EendIndex\u901A\u8FC7\u5FAA\u73AF\u7D2F\u52A0\uFF0C\u76F4\u5230\u8BFB\u53D6\u5B8C\u6240\u6709\u6EE1\u8DB3\u6761\u4EF6\u7684\u6570\u636E\u3002</p><blockquote><p><strong>\u5C0F\u77E5\u8BC6\u70B9</strong> &gt;&gt;&gt; \u5F53\u65E0\u8BBE\u8BA1\u6392\u5E8F\u65F6,Oracle\u5982\u4F55\u8FD4\u56DE\u8BB0\u5F55\uFF1F Oracle\u4F1A\u6839\u636E\u5177\u4F53\u7684\u6570\u636E\u5757\u7684\u5B58\u50A8\u8FD4\u56DE\u8BB0\u5F55. oracle\u6570\u636E\u5E93\u662F\u6CA1\u6709\u9ED8\u8BA4\u6392\u5E8F\u7684 \u8981\u6392\u5E8F\u5FC5\u987B\u52A0\u4E0Aorder by \u56E0\u4E3Aoracle\u662F\u6309\u5757\u8FDB\u884C\u8BFB\u53D6\u6570\u636E\u7684 \u5982\u679C\u6570\u636E\u6309\u987A\u5E8F\u5B58\u50A8\uFF0C\u5219\u53EF\u80FD\u4F7F\u8BFB\u53D6\u51FA\u6765\u7684\u6570\u636E\u662F\u6309\u987A\u5E8F\u7684\uFF0C\u7ED9\u7528\u6237\u8BEF\u89E3\u4E3A\u9ED8\u8BA4\u6392\u5E8F oracle\u6CA1\u6709\u8FDB\u884C\u4EFB\u4F55\u6392\u5E8F\u64CD\u4F5C\uFF0Crowid\u8868\u793A\u7684\u662F\u6570\u636E\u5B58\u653E\u7684\u6570\u636E\u5757\u5185\u90E8\u5730\u5740\uFF0C\u5982\u679C\u6CA1\u6709\u8981\u6C42\u6392\u5E8F\uFF0Coracle\u4F1A\u987A\u5E8F\u7684\u4ECE\u6570\u636E\u5757\u4E2D\u8BFB\u53D6\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E\u8FD4\u56DE\u5230\u5BA2\u6237\u7AEF\uFF0C\u4E0D\u8FC7\u770B\u8D77\u6765\u597D\u50CF\u662F\u6309\u7167rowid\u6392\u5E8F\u4F3C\u7684</p></blockquote><h2 id="\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a> \u4F18\u70B9</h2><ol><li>\u65E0\u9700\u6392\u5E8F\u6D88\u8017\u6570\u636E\u5E93\u6027\u80FD</li><li>SQL\u4EC5\u9700\u5D4C\u59571\u5C42\uFF0C\u7ED3\u6784\u7B80\u5355</li></ol><h2 id="\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a> \u7F3A\u70B9</h2><ol><li>\u6BCF\u6B21\u5206\u9875\u65F6\uFF0C\u6570\u636E\u5E93\u90FD\u8981\u5C06\u6574\u4E2A\u7ED3\u679C\u96C6\u53D6\u51FA\uFF0C\u518D\u6839\u636EROWNUM\u8FDB\u884C\u5207\u5272\u540E\u8FD4\u56DE\uFF0C\u82E5\u7ED3\u679C\u96C6\u6570\u636E\u91CF\u6BD4\u8F83\u5927\u65F6\uFF0C\u6027\u80FD\u53EF\u80FD\u8F83\u4F4E</li><li>\u8FD4\u56DE\u7ED3\u679C\u65E0\u5E8F</li></ol><h2 id="\u4E89\u8BAE\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E89\u8BAE\u70B9" aria-hidden="true">#</a> \u4E89\u8BAE\u70B9</h2><ol><li>\u65E0\u6392\u5E8F\uFF0C\u53EF\u80FD\u4F1A\u5C06\u67D0\u4E00\u90E8\u5206\u8BB0\u5F55\u6F0F\u6389\uFF1F</li></ol><blockquote><p>[?] \u8BA4\u4E3A\u5E76\u4E0D\u4F1A\u51FA\u73B0\u6F0F\u6389\u7684\u60C5\u51B5\uFF0C\u56E0\u4E3A\u65F6\u95F4\u6761\u4EF6 <code>INPUT_DATE&gt;=#{lastRecordCreateDate}</code> \u5DF2\u7ECF\u9650\u5B9A\u4E86\u7ED3\u679C\u96C6\uFF0C\u800C\u540E\u53EA\u662F\u6839\u636EROWNUM\u8FDB\u884C\u5207\u5272\u5206\u6279\u8BFB\u53D6\u800C\u5DF2~</p></blockquote><h2 id="\u6027\u80FD" tabindex="-1"><a class="header-anchor" href="#\u6027\u80FD" aria-hidden="true">#</a> \u6027\u80FD</h2><h3 id="\u6D4B\u8BD51" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD51" aria-hidden="true">#</a> \u6D4B\u8BD51</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u53D65000\u6761\u6570\u636E
lastRecordCreateDate=2019-01-01 00:00
beginIndex=700000
endIndex=705000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6267\u884C\u65F6\u957F" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u65F6\u957F" aria-hidden="true">#</a> \u6267\u884C\u65F6\u957F</h3><table><thead><tr><th>\u5E8F\u53F7</th><th>\u79D2</th></tr></thead><tbody><tr><td>1</td><td>0.827</td></tr><tr><td>2</td><td>0.831</td></tr><tr><td>3</td><td>0.882</td></tr><tr><td>4</td><td>0.644</td></tr><tr><td>5</td><td>0.665</td></tr><tr><td>6</td><td>0.665</td></tr><tr><td>7</td><td>0.668</td></tr><tr><td>8</td><td>0.666</td></tr><tr><td>9</td><td>0.652</td></tr><tr><td>10</td><td>0.664</td></tr><tr><td>\u5E73\u5747</td><td>0.7164</td></tr></tbody></table><h3 id="\u6D4B\u8BD52" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD52" aria-hidden="true">#</a> \u6D4B\u8BD52</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u53D65000\u6761\u6570\u636E
lastRecordCreateDate=2019-01-01 00:00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6267\u884C\u65F6\u957F-1" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u65F6\u957F-1" aria-hidden="true">#</a> \u6267\u884C\u65F6\u957F</h3><table><thead><tr><th>\u5E8F\u53F7</th><th>beginIndex</th><th>endIndex</th><th>\u624B\u52A8\u9996\u6B21\u6267\u884C\u65F6\u957F(\u79D2)</th></tr></thead><tbody><tr><td>1</td><td>710000</td><td>715000</td><td>0.668</td></tr><tr><td>2</td><td>715000</td><td>720000</td><td>0.637</td></tr><tr><td>3</td><td>720000</td><td>725000</td><td>0.662</td></tr><tr><td>4</td><td>725000</td><td>730000</td><td>0.694</td></tr><tr><td>5</td><td>730000</td><td>735000</td><td>0.764</td></tr><tr><td>6</td><td>735000</td><td>740000</td><td>0.710</td></tr><tr><td>7</td><td>740000</td><td>745000</td><td>0.735</td></tr><tr><td>8</td><td>745000</td><td>750000</td><td>1.036</td></tr><tr><td>9</td><td>750000</td><td>755000</td><td>0.852</td></tr><tr><td>10</td><td>755000</td><td>760000</td><td>0.701</td></tr><tr><td>11</td><td>760000</td><td>765000</td><td>0.850</td></tr><tr><td>12</td><td>765000</td><td>770000</td><td>0.798</td></tr><tr><td>13</td><td>770000</td><td>775000</td><td>0.719</td></tr><tr><td>14</td><td>775000</td><td>780000</td><td>0.729</td></tr><tr><td>15</td><td>780000</td><td>785000</td><td>0.726</td></tr><tr><td>16</td><td>785000</td><td>790000</td><td>0.711</td></tr><tr><td>17</td><td>790000</td><td>795000</td><td>0.830</td></tr><tr><td>18</td><td>795000</td><td>800000</td><td>0.749</td></tr><tr><td>19</td><td>800000</td><td>805000</td><td>0.857</td></tr><tr><td>20</td><td>805000</td><td>810000</td><td>1.021</td></tr><tr><td>21</td><td>810000</td><td>815000</td><td>0.735</td></tr><tr><td>22</td><td>815000</td><td>820000</td><td>0.766</td></tr><tr><td>#</td><td>\u5E73\u5747</td><td></td><td>0.77045</td></tr></tbody></table><h2 id="sql" tabindex="-1"><a class="header-anchor" href="#sql" aria-hidden="true">#</a> SQL</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
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
        WHERE DELETE_FLAG = &#39;0&#39;
        AND ROWNUM &amp;lt;= #{endIndex}
        AND INPUT_DATE&gt;=#{lastRecordCreateDate}

        ) TMP_PAGE
WHERE TMP_PAGE.ROW_ID &amp;gt; #{beginIndex}
ORDER BY TMP_PAGE.INPUT_DATE ASC

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="\u65B9\u68482" tabindex="-1"><a class="header-anchor" href="#\u65B9\u68482" aria-hidden="true">#</a> \u65B9\u68482</h1><h2 id="\u903B\u8F91-1" tabindex="-1"><a class="header-anchor" href="#\u903B\u8F91-1" aria-hidden="true">#</a> \u903B\u8F91</h2><p>\u5FAA\u73AF\u8BFB\u6570\u636E\u65F6\uFF0C\u8FED\u4EE3\u65F6\u95F4\u6761\u4EF6lastRecordCreateDate\uFF0C\u4F7F\u65F6\u95F4\u6761\u4EF6lastRecordCreateDate\u9010\u6E10\u53D8\u5927\uFF0C\u6839\u636EINPUT_DATE\u987A\u5E8F\u6392\u5E8F\u540E\uFF0C\u8BFB\u53D6 0 ~ pageSize \u6761\u8BB0\u5F55\u3002 \u5373SQL\u4E2D\uFF0CpageSize\u4E0D\u53D8\uFF0ClastRecordCreateDate\u5FAA\u73AF\u589E\u52A0\uFF08\u5C06\u672C\u6B21\u67E5\u8BE2\u6240\u5F97\u8BB0\u5F55\u7684\u6700\u540E\u521B\u5EFA\u65F6\u95F4\u505A\u4E3A\u4E0B\u6B21\u67E5\u8BE2\u7684lastRecordCreateDate\uFF09\uFF0C\u76F4\u5230\u8BFB\u53D6\u5B8C\u6240\u6709\u6EE1\u8DB3\u6761\u4EF6\u7684\u8BB0\u5F55</p><h2 id="\u4F18\u70B9-1" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9-1" aria-hidden="true">#</a> \u4F18\u70B9</h2><ol><li>\u76EE\u6807\u603B\u8BB0\u5F55\u6570\u968F\u4FBF\u65F6\u95F4\u6761\u4EF6lastRecordCreateDate\u7684\u53D8\u5927\u800C\u9010\u6E10\u53D8\u5C11</li></ol><h2 id="\u7F3A\u70B9-1" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9-1" aria-hidden="true">#</a> \u7F3A\u70B9</h2><ol><li>\u82E5\u6570\u636E\u5E93\u6709\u5E76\u53D1\u5199\u5165\u7684\u60C5\u51B5\uFF0C\u5373\u540C\u4E00\u65F6\u95F4\u70B9\u63D2\u5165\u4E86n\u6761\u8BB0\u5F55\uFF0C\u90A3\u4E48\u8FD9n\u6761\u8BB0\u5F55\u7684\u65F6\u95F4\u6761\u4EF6lastRecordCreateDate\u90FD\u662F\u76F8\u540C\u7684\uFF0C\u82E5\u8FED\u4EE3\u65F6\u521A\u597D\u547D\u4E2D\u8FD9\u4E2A\u65F6\u95F4\u70B9\uFF0C\u5219\u4F1A\u83B7\u53D6\u5230\u91CD\u590D\u7684\u6570\u636E\uFF0C\u4E14\u6982\u7387\u5F88\u9AD8</li><li>\u57FA\u4E8E\u4E0A\u4E00\u6761\uFF0C\u82E5pageSize\u5C0F\u4E8E\u6570\u636E\u5E93\u5199\u5165\u7684\u6700\u5927\u5E76\u53D1\u6570\uFF0C\u6709\u53EF\u80FD\u4F1A\u8FDB\u5165\u65E0\u9650\u5FAA\u73AF</li></ol><h2 id="\u7F3A\u70B9\u9884\u9632\u63AA\u65BD" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9\u9884\u9632\u63AA\u65BD" aria-hidden="true">#</a> \u7F3A\u70B9\u9884\u9632\u63AA\u65BD</h2><p>\u52A0\u5927pageSize\u7684\u503C\uFF0C\u786E\u4FDDpageSize\u5927\u4E8E\u6216\u81F3\u5C11\u63A5\u8FD1\u4E8E\u6570\u636E\u5E93\u5199\u5165\u6700\u5927\u5E76\u53D1\u6570</p><blockquote><p>\u7136\u800C\uFF0C\u82E5\u540C\u4E00\u65F6\u95F4\u5199\u5165\u6570\u636E\u91CF\u8FC7\u5927\u65F6\uFF0C\u53EF\u80FD\u65E0\u6CD5\u907F\u514D\u6B64\u7F3A\u9677</p></blockquote><h2 id="\u6027\u80FD-1" tabindex="-1"><a class="header-anchor" href="#\u6027\u80FD-1" aria-hidden="true">#</a> \u6027\u80FD</h2><h3 id="\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6" aria-hidden="true">#</a> \u6761\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u53D65000\u6761\u6570\u636E
\u6392\u5E8F\u5B57\u6BB5INPUT_DATE \u5DF2\u52A0\u7D22\u5F15
lastRecordCreateDate=2019-01-01 00:00
pageSize=5000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6267\u884C\u65F6\u957F-2" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u65F6\u957F-2" aria-hidden="true">#</a> \u6267\u884C\u65F6\u957F</h3><table><thead><tr><th>\u5E8F\u53F7</th><th>\u79D2s</th></tr></thead><tbody><tr><td>1</td><td>0.177</td></tr><tr><td>2</td><td>0.169</td></tr><tr><td>3</td><td>0.170</td></tr><tr><td>4</td><td>0.166</td></tr><tr><td>5</td><td>0.189</td></tr><tr><td>6</td><td>0.186</td></tr><tr><td>7</td><td>0.158</td></tr><tr><td>8</td><td>0.173</td></tr><tr><td>9</td><td>0.159</td></tr><tr><td>10</td><td>0.168</td></tr><tr><td>\u5E73\u5747</td><td>0.1715</td></tr></tbody></table><h2 id="sql-1" tabindex="-1"><a class="header-anchor" href="#sql-1" aria-hidden="true">#</a> SQL</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
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
        WHERE DELETE_FLAG = &#39;0&#39;
        AND INPUT_DATE&gt;=#{lastRecordCreateDate}
        ORDER BY INPUT_DATE ASC

        )
WHERE ROWNUM &lt;=#{pageSize}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),r=[n];function l(s,c){return t(),e("div",null,r)}const h=d(a,[["render",l],["__file","Oracle \u5FAA\u73AF\u8BFB\u53D6\u67D0\u4E2A\u65F6\u95F4\u70B9\u4E4B\u540E\u7684\u5927\u91CF\u6570\u636E\u7684\u4E24\u79CD\u65B9\u6848.html.vue"]]);export{h as default};
