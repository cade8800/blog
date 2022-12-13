import{_ as e,o as n,c as i,d as s}from"./app.af5ffdc4.js";const d={},l=s(`<h1 id="apache-ab\u538B\u529B\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#apache-ab\u538B\u529B\u6D4B\u8BD5" aria-hidden="true">#</a> Apache ab\u538B\u529B\u6D4B\u8BD5</h1><blockquote><p>https://zhuanlan.zhihu.com/p/102534511</p></blockquote><p>Apache ab\u538B\u529B\u6D4B\u8BD5\u5DE5\u5177\u4F7F\u7528 \u4E00 \u4ECB\u7ECD Apache Benchmark(\u7B80\u79F0ab) \u662FApache\u5B89\u88C5\u5305\u4E2D\u81EA\u5E26\u7684\u538B\u529B\u6D4B\u8BD5\u5DE5\u5177 \uFF0C\u7B80\u5355\u6613\u7528\u3002 \u4F7F\u7528\u8D77\u6765\u975E\u5E38\u7684\u7B80\u5355\u548C\u65B9\u4FBF\u3002 \u4E0D\u4EC5\u4EC5\u662F\u53EF\u4EE5apache\u670D\u52A1\u5668\u8FDB\u884C\u7F51\u7AD9\u8BBF\u95EE\u538B\u529B\u6D4B\u8BD5\uFF0C\u8FD8\u53EF\u4EE5\u5BF9\u5176\u4ED6\u7C7B\u578B\u7684\u670D\u52A1\u5668\u8FDB\u884C\u538B\u529B\u6D4B\u8BD5\u3002 \u6BD4\u5982nginx,tomcat,IIS\u7B49</p><p>\u4E8C \u5B89\u88C5 2.1 windows\u5B89\u88C5</p><blockquote><p>\u6587\u6863\u5730\u5740\uFF1A http://httpd.apache.org/docs/2.4/programs/ab.html</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u4E0B\u8F7D\u5730\u5740\uFF1A
#https://www.apachehaus.com/cgi-bin/download.plx
#\u4E0B\u8F7D\u5B8C\u6210\u540E\u89E3\u538B
#\u4FEE\u6539\u89E3\u538B\u6839\u76EE\u5F55\u4E0B\u7684conf/httpd.conf\u6587\u4EF6\u7684\u7AEF\u53E3\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u662F80\u7AEF\u53E3\uFF0C\u5E94\u8BE5\u662F\u88AB\u5360\u7528\u4E86\uFF0C\u65E0\u6CD5\u5B89\u88C5\uFF0C\u53EF\u4EE5\u81EA\u884C\u4FEE\u6539\u4E3A\u5176\u4ED6\uFF0C\u6539\u4E3A8088\u7AEF\u53E3
#\u5B89\u88C5
httpd -k install
\u200B
#\u63D0\u793A\u5982\u4E0B\u9519\u8BEF\uFF0C\u8BE6\u89C1windows \u63D0\u793A\u7F3A\u5C11VCRUNTIME140.dll\u9519\u8BEF\uFF1A
---------------------------
abs.exe - \u7CFB\u7EDF\u9519\u8BEF
---------------------------
\u7531\u4E8E\u627E\u4E0D\u5230 VCRUNTIME140.dll\uFF0C\u65E0\u6CD5\u7EE7\u7EED\u6267\u884C\u4EE3\u7801\u3002\u91CD\u65B0\u5B89\u88C5\u7A0B\u5E8F\u53EF\u80FD\u4F1A\u89E3\u51B3\u6B64\u95EE\u9898\u3002 
---------------------------
\u786E\u5B9A   
---------------------------
#\u4F7F\u7528
ab -n 2 -c 2 https://www.cnblogs.com/index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.2 Linux\u5B89\u88C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- centOS7 \u4E0B\u7684\u5B89\u88C5
  yum -y install httpd-tools
- centos6.5 \u9ED8\u8BA4\u5DF2\u5B89\u88C5\u4E86ab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E09 \u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u4F7F\u7528\uFF1A-n \u8868\u793A\u8BF7\u6C42\u6570\uFF0C-c \u8868\u793A\u5E76\u53D1\u6570.
ab -n 100 -c 10 http://www.baidu.com/s
#\u8FD4\u56DE\u5185\u5BB9\uFF1A
\u200B
Server Software:        BWS/1.1   
##\u670D\u52A1\u5668\u8F6F\u4EF6\u548C\u7248\u672C
Server Hostname:        www.baidu.com  
##\u8BF7\u6C42\u7684\u5730\u5740/\u57DF\u540D
Server Port:            80   
##\u7AEF\u53E3
Document Path:          /s  
##\u8BF7\u6C42\u7684\u8DEF\u5F84
Document Length:        112435 bytes  
##\u9875\u9762\u6570\u636E/\u8FD4\u56DE\u7684\u6570\u636E\u91CF
Concurrency Level:      10   
##\u5E76\u53D1\u6570
Time taken for tests:   4.764 seconds  
##\u5171\u4F7F\u7528\u4E86\u591A\u5C11\u65F6\u95F4 
Complete requests:      100  
##\u8BF7\u6C42\u6570 
Failed requests:        99  
##\u5931\u8D25\u8BF7\u6C42  \u767E\u5EA6\u4E3A\u4EC0\u4E48\u5931\u8D25\u8FD9\u4E48\u591A\uFF0C\u5E94\u8BE5\u662F\u767E\u5EA6\u505A\u4E86\u9632\u8303  
   (Connect: 0, Receive: 0, Length: 99, Exceptions: 0)
Total transferred:      11342771 bytes  
##\u603B\u5171\u4F20\u8F93\u5B57\u8282\u6570\uFF0C\u5305\u542Bhttp\u7684\u5934\u4FE1\u606F\u7B49 
HTML transferred:       11247622 bytes  
##html\u5B57\u8282\u6570\uFF0C\u5B9E\u9645\u7684\u9875\u9762\u4F20\u9012\u5B57\u8282\u6570 
Requests per second:    20.99 [#/sec] (mean) 
 ##\u6BCF\u79D2\u591A\u5C11\u8BF7\u6C42\uFF0C\u8FD9\u4E2A\u662F\u975E\u5E38\u91CD\u8981\u7684\u53C2\u6570\u6570\u503C\uFF0C\u670D\u52A1\u5668\u7684\u541E\u5410\u91CF 
Time per request:       476.427 [ms] (mean)   
##\u7528\u6237\u5E73\u5747\u8BF7\u6C42\u7B49\u5F85\u65F6\u95F4 
Time per request:       47.643 [ms] (mean, across all concurrent requests)  
##\u670D\u52A1\u5668\u5E73\u5747\u5904\u7406\u65F6\u95F4\uFF0C\u4E5F\u5C31\u662F\u670D\u52A1\u5668\u541E\u5410\u91CF\u7684\u5012\u6570 
Transfer rate:          2325.00 [Kbytes/sec] received
 ##\u6BCF\u79D2\u83B7\u53D6\u7684\u6570\u636E\u957F\u5EA6
\u200B
Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:       22   41  12.4     39      82
##\u8FDE\u63A5\u7684\u6700\u5C0F\u65F6\u95F4\uFF0C\u5E73\u5747\u503C\uFF0C\u4E2D\u503C\uFF0C\u6700\u5927\u503C
Processing:   113  386 211.1    330    1246
##\u5904\u7406\u65F6\u95F4
Waiting:       25   80  43.9     73     266
##\u7B49\u5F85\u65F6\u95F4
Total:        152  427 210.1    373    1283
##\u5408\u8BA1\u65F6\u95F4
\u200B
Percentage of the requests served within a certain time (ms)
  50%    373   
## 50%\u7684\u8BF7\u6C42\u5728373ms\u5185\u8FD4\u56DE 
  66%    400   
## 60%\u7684\u8BF7\u6C42\u5728400ms\u5185\u8FD4\u56DE 
  75%    426
  80%    465
  90%    761
  95%    930
  98%   1192
  99%   1283
 100%   1283 (longest request)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56DB \u53C2\u6570\u4ECB\u7ECD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-n  \u5373requests\uFF0C\u7528\u4E8E\u6307\u5B9A\u538B\u529B\u6D4B\u8BD5\u603B\u5171\u7684\u6267\u884C\u6B21\u6570\u3002
-c  \u5373concurrency\uFF0C\u7528\u4E8E\u6307\u5B9A\u7684\u5E76\u53D1\u6570\u3002
-t  \u5373timelimit\uFF0C\u7B49\u5F85\u54CD\u5E94\u7684\u6700\u5927\u65F6\u95F4(\u5355\u4F4D\uFF1A\u79D2)\u3002
-b  \u5373windowsize\uFF0CTCP\u53D1\u9001/\u63A5\u6536\u7684\u7F13\u51B2\u5927\u5C0F(\u5355\u4F4D\uFF1A\u5B57\u8282)\u3002
-p  \u5373postfile\uFF0C\u53D1\u9001POST\u8BF7\u6C42\u65F6\u9700\u8981\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u6B64\u5916\u8FD8\u5FC5\u987B\u8BBE\u7F6E-T\u53C2\u6570\u3002
-u  \u5373putfile\uFF0C\u53D1\u9001PUT\u8BF7\u6C42\u65F6\u9700\u8981\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u6B64\u5916\u8FD8\u5FC5\u987B\u8BBE\u7F6E-T\u53C2\u6570\u3002
-T  \u5373content-type\uFF0C\u7528\u4E8E\u8BBE\u7F6EContent-Type\u8BF7\u6C42\u5934\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1Aapplication/x-www-form-urlencoded\uFF0C\u9ED8\u8BA4\u503C\u4E3Atext/plain\u3002
-v  \u5373verbosity\uFF0C\u6307\u5B9A\u6253\u5370\u5E2E\u52A9\u4FE1\u606F\u7684\u5197\u4F59\u7EA7\u522B\u3002
-w  \u4EE5HTML\u8868\u683C\u5F62\u5F0F\u6253\u5370\u7ED3\u679C\u3002
-i  \u4F7F\u7528HEAD\u8BF7\u6C42\u4EE3\u66FFGET\u8BF7\u6C42\u3002
-x  \u63D2\u5165\u5B57\u7B26\u4E32\u4F5C\u4E3Atable\u6807\u7B7E\u7684\u5C5E\u6027\u3002
-y  \u63D2\u5165\u5B57\u7B26\u4E32\u4F5C\u4E3Atr\u6807\u7B7E\u7684\u5C5E\u6027\u3002
-z  \u63D2\u5165\u5B57\u7B26\u4E32\u4F5C\u4E3Atd\u6807\u7B7E\u7684\u5C5E\u6027\u3002
-C  \u6DFB\u52A0cookie\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A&quot;Apache=1234&quot;(\u53EF\u4EE5\u91CD\u590D\u8BE5\u53C2\u6570\u9009\u9879\u4EE5\u6DFB\u52A0\u591A\u4E2A)\u3002
-H  \u6DFB\u52A0\u4EFB\u610F\u7684\u8BF7\u6C42\u5934\uFF0C\u4F8B\u5982\uFF1A&quot;Accept-Encoding: gzip&quot;\uFF0C\u8BF7\u6C42\u5934\u5C06\u4F1A\u6DFB\u52A0\u5728\u73B0\u6709\u7684\u591A\u4E2A\u8BF7\u6C42\u5934\u4E4B\u540E(\u53EF\u4EE5\u91CD\u590D\u8BE5\u53C2\u6570\u9009\u9879\u4EE5\u6DFB\u52A0\u591A\u4E2A)\u3002
-A  \u6DFB\u52A0\u4E00\u4E2A\u57FA\u672C\u7684\u7F51\u7EDC\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u7528\u6237\u540D\u548C\u5BC6\u7801\u4E4B\u95F4\u7528\u82F1\u6587\u5192\u53F7\u9694\u5F00\u3002
-P  \u6DFB\u52A0\u4E00\u4E2A\u57FA\u672C\u7684\u4EE3\u7406\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u7528\u6237\u540D\u548C\u5BC6\u7801\u4E4B\u95F4\u7528\u82F1\u6587\u5192\u53F7\u9694\u5F00\u3002
-X  \u6307\u5B9A\u4F7F\u7528\u7684\u548C\u7AEF\u53E3\u53F7\uFF0C\u4F8B\u5982:&quot;126.10.10.3:88&quot;\u3002
-V  \u6253\u5370\u7248\u672C\u53F7\u5E76\u9000\u51FA\u3002
-k  \u4F7F\u7528HTTP\u7684KeepAlive\u7279\u6027\u3002
-d  \u4E0D\u663E\u793A\u767E\u5206\u6BD4\u3002
-S  \u4E0D\u663E\u793A\u9884\u4F30\u548C\u8B66\u544A\u4FE1\u606F\u3002
-g  \u8F93\u51FA\u7ED3\u679C\u4FE1\u606F\u5230gnuplot\u683C\u5F0F\u7684\u6587\u4EF6\u4E2D\u3002
-e  \u8F93\u51FA\u7ED3\u679C\u4FE1\u606F\u5230CSV\u683C\u5F0F\u7684\u6587\u4EF6\u4E2D\u3002
-r  \u6307\u5B9A\u63A5\u6536\u5230\u9519\u8BEF\u4FE1\u606F\u65F6\u4E0D\u9000\u51FA\u7A0B\u5E8F\u3002
-h  \u663E\u793A\u7528\u6CD5\u4FE1\u606F\uFF0C\u5176\u5B9E\u5C31\u662Fab -help\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),v=[l];function a(c,r){return n(),i("div",null,v)}const m=e(d,[["render",a],["__file","Apache ab\u538B\u529B\u6D4B\u8BD5.html.vue"]]);export{m as default};
