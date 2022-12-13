import{_ as e,o as a,c as s,d as i}from"./app.af5ffdc4.js";const d={},l=i(`<h1 id="linux\u5B89\u88C5rpm\u5F0F\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#linux\u5B89\u88C5rpm\u5F0F\u5B89\u88C5mysql" aria-hidden="true">#</a> Linux\u5B89\u88C5rpm\u5F0F\u5B89\u88C5mysql</h1><h4 id="_1-\u5B89\u88C5rpm" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5rpm" aria-hidden="true">#</a> 1 \u5B89\u88C5rpm</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rpm -ivh mysql80-community-release-el7-5.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img2022.cnblogs.com/blog/2768894/202205/2768894-20220530114600522-1519982077.png" alt=""></p><h4 id="_2-\u5B89\u88C5mysq\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5mysq\u670D\u52A1" aria-hidden="true">#</a> 2 \u5B89\u88C5Mysq\u670D\u52A1</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img2022.cnblogs.com/blog/2768894/202205/2768894-20220530114526260-785200218.png" alt=""></p><h4 id="_3-\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 3 \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</h4><blockquote><p>\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84 <code>/etc/my.cnf</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /etc/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="\u52A0\u5165\u4EE5\u4E0B\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u52A0\u5165\u4EE5\u4E0B\u914D\u7F6E" aria-hidden="true">#</a> \u52A0\u5165\u4EE5\u4E0B\u914D\u7F6E</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4FEE\u6539Mysq\u5BC6\u7801\u52A0\u5BC6\u65B9\u5F0F\uFF08\u200BMysql\u200B\u200B\u5728\u4E4B\u524D\u7684\u7248\u672C\u7684\u5173\u4E8E\u200B\u200Bpassword\u200B\u200B\u7684\u52A0\u5BC6\u65B9\u6CD5\u90FD\u662F\u4F7F\u7528\u7684  \u200B\u200Bmysql_native_password\u200B\u200B\uFF0C\u4E0D\u8FC7\u5230\u200B\u200BMySQL8.0\u200B\u200B\u7684\u65F6\u5019\u6362\u6210\u4E86\u200B\u200Bcaching_sha2_password\u200B\uFF09
default_authentication_plugin=mysql_native_password

# \u8868\u540D\u4E0D\u533A\u5206\u5927\u5C0F\u5199
lower_case_table_names=1

# \u5FFD\u7565\u4E3B\u4ECE\u5F02\u5E38
slave-skip-errors=all

# \u5FFD\u7565only_full_group_by\u5F02\u5E38
sql_mode=&#39;STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-mysql\u670D\u52A1\u76F8\u5173\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_4-mysql\u670D\u52A1\u76F8\u5173\u6307\u4EE4" aria-hidden="true">#</a> 4 Mysql\u670D\u52A1\u76F8\u5173\u6307\u4EE4</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl start mysqld

systemctl enable mysqld

systemctl status mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u67E5\u770Bmysql\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770Bmysql\u8FDB\u7A0B" aria-hidden="true">#</a> \u67E5\u770BMysql\u8FDB\u7A0B</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ps -ef|grep mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img2022.cnblogs.com/blog/2768894/202205/2768894-20220530125532294-1863779386.png" alt=""></p><h4 id="_5-\u4FEE\u6539mysql\u9ED8\u8BA4\u767B\u5F55\u5BC6\u7801\u53CA\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_5-\u4FEE\u6539mysql\u9ED8\u8BA4\u767B\u5F55\u5BC6\u7801\u53CA\u6743\u9650" aria-hidden="true">#</a> 5 \u4FEE\u6539Mysql\u9ED8\u8BA4\u767B\u5F55\u5BC6\u7801\u53CA\u6743\u9650</h4><h5 id="\u542F\u52A8mysql" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8mysql" aria-hidden="true">#</a> \u542F\u52A8Mysql</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl start mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="\u542F\u52A8\u540E\u5728\u65E5\u5FD7\u4E2D\u67E5\u770Bmysql8\u9ED8\u8BA4\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u540E\u5728\u65E5\u5FD7\u4E2D\u67E5\u770Bmysql8\u9ED8\u8BA4\u5BC6\u7801" aria-hidden="true">#</a> \u542F\u52A8\u540E\u5728\u65E5\u5FD7\u4E2D\u67E5\u770BMysql8\u9ED8\u8BA4\u5BC6\u7801</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /var/log/mysqld.log | grep &quot;password&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7ED3\u679C\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>2022-09-15T07:38:34.162110Z 6 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: 5F71-JybyEls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="\u4F7F\u7528\u9ED8\u8BA4\u5BC6\u7801\u767B\u5F55mysql" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u9ED8\u8BA4\u5BC6\u7801\u767B\u5F55mysql" aria-hidden="true">#</a> \u4F7F\u7528\u9ED8\u8BA4\u5BC6\u7801\u767B\u5F55Mysql</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql -uroot -p5F71-JybyEls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="\u4FEE\u6539\u5BC6\u7801\u53CA\u767B\u5F55\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5BC6\u7801\u53CA\u767B\u5F55\u6743\u9650" aria-hidden="true">#</a> \u4FEE\u6539\u5BC6\u7801\u53CA\u767B\u5F55\u6743\u9650</h5><p>\u4FEE\u6539\u5BC6\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ALTER user &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;\u65B0\u5BC6\u7801&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539\u767B\u5F55\u6743\u9650</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>use mysql;
update user set host=&#39;%&#39; where user=&#39;root&#39; limit 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u66F4\u65B0\u6743\u9650</p><blockquote><p>\u5C06\u5F53\u524Duser\u548Cprivilige\u8868\u4E2D\u7684\u7528\u6237\u4FE1\u606F/\u6743\u9650\u8BBE\u7F6E\u4ECEmysql\u5E93(MySQL\u6570\u636E\u5E93\u7684\u5185\u7F6E\u5E93)\u4E2D\u63D0\u53D6\u5230\u5185\u5B58\u91CC</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>flush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B8C\u6210\uFF0C\u9000\u51FAMysql</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>exit;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6-\u5F00\u653E\u9632\u706B\u5899\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#_6-\u5F00\u653E\u9632\u706B\u5899\u7AEF\u53E3" aria-hidden="true">#</a> 6 \u5F00\u653E\u9632\u706B\u5899\u7AEF\u53E3</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>firewall-cmd --zone=public --add-port=3306/tcp --permanent;
firewall-cmd --reload;
firewall-cmd --list-ports;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-\u5B8C\u6210-\u6536\u5DE5" tabindex="-1"><a class="header-anchor" href="#_7-\u5B8C\u6210-\u6536\u5DE5" aria-hidden="true">#</a> 7 \u5B8C\u6210\uFF0C\u6536\u5DE5</h4>`,39),n=[l];function r(t,c){return a(),s("div",null,n)}const m=e(d,[["render",r],["__file","Linux\u5B89\u88C5rpm\u5F0F\u5B89\u88C5mysql.html.vue"]]);export{m as default};
