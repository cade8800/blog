import{_ as e,o as i,c as l,d as s}from"./app.af5ffdc4.js";const a={},n=s(`<h1 id="redis\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#redis\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Redis\u5E38\u7528\u547D\u4EE4</h1><blockquote><p>https://blog.csdn.net/ithomer/article/details/9213185/</p></blockquote><h1 id="redis\u5E38\u7528\u547D\u4EE4\u96C6" tabindex="-1"><a class="header-anchor" href="#redis\u5E38\u7528\u547D\u4EE4\u96C6" aria-hidden="true">#</a> Redis\u5E38\u7528\u547D\u4EE4\u96C6</h1><h2 id="_1-\u8FDE\u63A5\u64CD\u4F5C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-\u8FDE\u63A5\u64CD\u4F5C\u547D\u4EE4" aria-hidden="true">#</a> 1\uFF09\u8FDE\u63A5\u64CD\u4F5C\u547D\u4EE4</h2><ul><li>quit\uFF1A\u5173\u95ED\u8FDE\u63A5\uFF08connection\uFF09</li><li>auth\uFF1A\u7B80\u5355\u5BC6\u7801\u8BA4\u8BC1</li><li>help cmd\uFF1A \u67E5\u770Bcmd\u5E2E\u52A9\uFF0C\u4F8B\u5982\uFF1Ahelp quit</li></ul><h2 id="_2-\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#_2-\u6301\u4E45\u5316" aria-hidden="true">#</a> 2\uFF09\u6301\u4E45\u5316</h2><ul><li>save\uFF1A\u5C06\u6570\u636E\u540C\u6B65\u4FDD\u5B58\u5230\u78C1\u76D8</li><li>bgsave\uFF1A\u5C06\u6570\u636E\u5F02\u6B65\u4FDD\u5B58\u5230\u78C1\u76D8</li><li>lastsave\uFF1A\u8FD4\u56DE\u4E0A\u6B21\u6210\u529F\u5C06\u6570\u636E\u4FDD\u5B58\u5230\u78C1\u76D8\u7684Unix\u65F6\u6233</li><li>shundown\uFF1A\u5C06\u6570\u636E\u540C\u6B65\u4FDD\u5B58\u5230\u78C1\u76D8\uFF0C\u7136\u540E\u5173\u95ED\u670D\u52A1</li></ul><h2 id="_3-\u8FDC\u7A0B\u670D\u52A1\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_3-\u8FDC\u7A0B\u670D\u52A1\u63A7\u5236" aria-hidden="true">#</a> 3\uFF09\u8FDC\u7A0B\u670D\u52A1\u63A7\u5236</h2><ul><li>info\uFF1A\u63D0\u4F9B\u670D\u52A1\u5668\u7684\u4FE1\u606F\u548C\u7EDF\u8BA1</li><li>monitor\uFF1A\u5B9E\u65F6\u8F6C\u50A8\u6536\u5230\u7684\u8BF7\u6C42</li><li>slaveof\uFF1A\u6539\u53D8\u590D\u5236\u7B56\u7565\u8BBE\u7F6E</li><li>config\uFF1A\u5728\u8FD0\u884C\u65F6\u914D\u7F6ERedis\u670D\u52A1\u5668</li></ul><h2 id="_4-\u5BF9value\u64CD\u4F5C\u7684\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_4-\u5BF9value\u64CD\u4F5C\u7684\u547D\u4EE4" aria-hidden="true">#</a> 4\uFF09\u5BF9value\u64CD\u4F5C\u7684\u547D\u4EE4</h2><ul><li>exists(key)\uFF1A\u786E\u8BA4\u4E00\u4E2Akey\u662F\u5426\u5B58\u5728</li><li>del(key)\uFF1A\u5220\u9664\u4E00\u4E2Akey</li><li>type(key)\uFF1A\u8FD4\u56DE\u503C\u7684\u7C7B\u578B</li><li>keys(pattern)\uFF1A\u8FD4\u56DE\u6EE1\u8DB3\u7ED9\u5B9Apattern\u7684\u6240\u6709key</li><li>randomkey\uFF1A\u968F\u673A\u8FD4\u56DEkey\u7A7A\u95F4\u7684\u4E00\u4E2A</li><li>keyrename(oldname,\xA0newname)\uFF1A\u91CD\u547D\u540Dkey</li><li>dbsize\uFF1A\u8FD4\u56DE\u5F53\u524D\u6570\u636E\u5E93\u4E2Dkey\u7684\u6570\u76EE</li><li>expire\uFF1A\u8BBE\u5B9A\u4E00\u4E2Akey\u7684\u6D3B\u52A8\u65F6\u95F4\uFF08s\uFF09</li><li>ttl\uFF1A\u83B7\u5F97\u4E00\u4E2Akey\u7684\u6D3B\u52A8\u65F6\u95F4</li><li>select(index)\uFF1A\u6309\u7D22\u5F15\u67E5\u8BE2</li><li>move(key,\xA0dbindex)\uFF1A\u79FB\u52A8\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u7684key\u5230dbindex\u6570\u636E\u5E93</li><li>flushdb\uFF1A\u5220\u9664\u5F53\u524D\u9009\u62E9\u6570\u636E\u5E93\u4E2D\u7684\u6240\u6709key</li><li>flushall\uFF1A\u5220\u9664\u6240\u6709\u6570\u636E\u5E93\u4E2D\u7684\u6240\u6709key</li></ul><h2 id="_5-string" tabindex="-1"><a class="header-anchor" href="#_5-string" aria-hidden="true">#</a> 5\uFF09String</h2><ul><li>set(key, value)\uFF1A\u7ED9\u6570\u636E\u5E93\u4E2D\u540D\u79F0\u4E3Akey\u7684string\u8D4B\u4E88\u503Cvalue</li><li>get(key)\uFF1A\u8FD4\u56DE\u6570\u636E\u5E93\u4E2D\u540D\u79F0\u4E3Akey\u7684string\u7684value</li><li>getset(key, value)\uFF1A\u7ED9\u540D\u79F0\u4E3Akey\u7684string\u8D4B\u4E88\u4E0A\u4E00\u6B21\u7684value</li><li>mget(key1, key2,\u2026, key N)\uFF1A\u8FD4\u56DE\u5E93\u4E2D\u591A\u4E2Astring\u7684value</li><li>setnx(key, value)\uFF1A\u6DFB\u52A0string\uFF0C\u540D\u79F0\u4E3Akey\uFF0C\u503C\u4E3Avalue</li><li>setex(key,\xA0time,\xA0value)\uFF1A\u5411\u5E93\u4E2D\u6DFB\u52A0string\uFF0C\u8BBE\u5B9A\u8FC7\u671F\u65F6\u95F4time</li><li>mset(key N, value N)\uFF1A\u6279\u91CF\u8BBE\u7F6E\u591A\u4E2Astring\u7684\u503C</li><li>msetnx(key N, value N)\uFF1A\u5982\u679C\u6240\u6709\u540D\u79F0\u4E3Akey\xA0i\u7684string\u90FD\u4E0D\u5B58\u5728</li><li>incr(key)\uFF1A\u540D\u79F0\u4E3Akey\u7684string\u589E1\u64CD\u4F5C</li><li>incrby(key, integer)\uFF1A\u540D\u79F0\u4E3Akey\u7684string\u589E\u52A0integer</li><li>decr(key)\uFF1A\u540D\u79F0\u4E3Akey\u7684string\u51CF1\u64CD\u4F5C</li><li>decrby(key, integer)\uFF1A\u540D\u79F0\u4E3Akey\u7684string\u51CF\u5C11integer</li><li>append(key, value)\uFF1A\u540D\u79F0\u4E3Akey\u7684string\u7684\u503C\u9644\u52A0value</li><li>substr(key, start, end)\uFF1A\u8FD4\u56DE\u540D\u79F0\u4E3Akey\u7684string\u7684value\u7684\u5B50\u4E32</li></ul><h2 id="_6-list" tabindex="-1"><a class="header-anchor" href="#_6-list" aria-hidden="true">#</a> 6\uFF09List</h2><ul><li>rpush(key, value)\uFF1A\u5728\u540D\u79F0\u4E3Akey\u7684list\u5C3E\u6DFB\u52A0\u4E00\u4E2A\u503C\u4E3Avalue\u7684\u5143\u7D20</li><li>lpush(key, value)\uFF1A\u5728\u540D\u79F0\u4E3Akey\u7684list\u5934\u6DFB\u52A0\u4E00\u4E2A\u503C\u4E3Avalue\u7684\xA0\u5143\u7D20</li><li>llen(key)\uFF1A\u8FD4\u56DE\u540D\u79F0\u4E3Akey\u7684list\u7684\u957F\u5EA6</li><li>lrange(key, start, end)\uFF1A\u8FD4\u56DE\u540D\u79F0\u4E3Akey\u7684list\u4E2Dstart\u81F3end\u4E4B\u95F4\u7684\u5143\u7D20</li><li>ltrim(key, start, end)\uFF1A\u622A\u53D6\u540D\u79F0\u4E3Akey\u7684list</li><li>lindex(key, index)\uFF1A\u8FD4\u56DE\u540D\u79F0\u4E3Akey\u7684list\u4E2Dindex\u4F4D\u7F6E\u7684\u5143\u7D20</li><li>lset(key, index, value)\uFF1A\u7ED9\u540D\u79F0\u4E3Akey\u7684list\u4E2Dindex\u4F4D\u7F6E\u7684\u5143\u7D20\u8D4B\u503C</li><li>lrem(key, count, value)\uFF1A\u5220\u9664count\u4E2Akey\u7684list\u4E2D\u503C\u4E3Avalue\u7684\u5143\u7D20</li><li>lpop(key)\uFF1A\u8FD4\u56DE\u5E76\u5220\u9664\u540D\u79F0\u4E3Akey\u7684list\u4E2D\u7684\u9996\u5143\u7D20</li><li>rpop(key)\uFF1A\u8FD4\u56DE\u5E76\u5220\u9664\u540D\u79F0\u4E3Akey\u7684list\u4E2D\u7684\u5C3E\u5143\u7D20</li><li>blpop(key1, key2,\u2026 key N, timeout)\uFF1Alpop\u547D\u4EE4\u7684block\u7248\u672C\u3002</li><li>brpop(key1, key2,\u2026 key N, timeout)\uFF1Arpop\u7684block\u7248\u672C\u3002</li><li>rpoplpush(srckey, dstkey)\uFF1A\u8FD4\u56DE\u5E76\u5220\u9664\u540D\u79F0\u4E3Asrckey\u7684list\u7684\u5C3E\u5143\u7D20\uFF0C\u5E76\u5C06\u8BE5\u5143\u7D20\u6DFB\u52A0\u5230\u540D\u79F0\u4E3Adstkey\u7684list\u7684\u5934\u90E8</li></ul><h2 id="_7-set" tabindex="-1"><a class="header-anchor" href="#_7-set" aria-hidden="true">#</a> 7\uFF09Set</h2><ul><li>sadd(key, member)\uFF1A\u5411\u540D\u79F0\u4E3Akey\u7684set\u4E2D\u6DFB\u52A0\u5143\u7D20member</li><li>srem(key, member)\xA0\uFF1A\u5220\u9664\u540D\u79F0\u4E3Akey\u7684set\u4E2D\u7684\u5143\u7D20member</li><li>spop(key)\xA0\uFF1A\u968F\u673A\u8FD4\u56DE\u5E76\u5220\u9664\u540D\u79F0\u4E3Akey\u7684set\u4E2D\u4E00\u4E2A\u5143\u7D20</li><li>smove(srckey, dstkey, member)\xA0\uFF1A\u79FB\u5230\u96C6\u5408\u5143\u7D20</li><li>scard(key)\xA0\uFF1A\u8FD4\u56DE\u540D\u79F0\u4E3Akey\u7684set\u7684\u57FA\u6570</li><li>sismember(key, member)\xA0\uFF1Amember\u662F\u5426\u662F\u540D\u79F0\u4E3Akey\u7684set\u7684\u5143\u7D20</li><li>sinter(key1, key2,\u2026key N)\xA0\uFF1A\u6C42\u4EA4\u96C6</li><li>sinterstore(dstkey, (keys))\xA0\uFF1A\u6C42\u4EA4\u96C6\u5E76\u5C06\u4EA4\u96C6\u4FDD\u5B58\u5230dstkey\u7684\u96C6\u5408</li><li>sunion(key1, (keys))\xA0\uFF1A\u6C42\u5E76\u96C6</li><li>sunionstore(dstkey, (keys))\xA0\uFF1A\u6C42\u5E76\u96C6\u5E76\u5C06\u5E76\u96C6\u4FDD\u5B58\u5230dstkey\u7684\u96C6\u5408</li><li>sdiff(key1, (keys))\xA0\uFF1A\u6C42\u5DEE\u96C6</li><li>sdiffstore(dstkey, (keys))\xA0\uFF1A\u6C42\u5DEE\u96C6\u5E76\u5C06\u5DEE\u96C6\u4FDD\u5B58\u5230dstkey\u7684\u96C6\u5408</li><li>smembers(key)\xA0\uFF1A\u8FD4\u56DE\u540D\u79F0\u4E3Akey\u7684set\u7684\u6240\u6709\u5143\u7D20</li><li>srandmember(key)\xA0\uFF1A\u968F\u673A\u8FD4\u56DE\u540D\u79F0\u4E3Akey\u7684set\u7684\u4E00\u4E2A\u5143\u7D20</li></ul><h2 id="_8-hash" tabindex="-1"><a class="header-anchor" href="#_8-hash" aria-hidden="true">#</a> 8\uFF09Hash</h2><ul><li>hset(key, field, value)\uFF1A\u5411\u540D\u79F0\u4E3Akey\u7684hash\u4E2D\u6DFB\u52A0\u5143\u7D20field</li><li>hget(key, field)\uFF1A\u8FD4\u56DE\u540D\u79F0\u4E3Akey\u7684hash\u4E2Dfield\u5BF9\u5E94\u7684value</li><li>hmget(key, (fields))\uFF1A\u8FD4\u56DE\u540D\u79F0\u4E3Akey\u7684hash\u4E2Dfield\xA0i\u5BF9\u5E94\u7684value</li><li>hmset(key, (fields))\uFF1A\u5411\u540D\u79F0\u4E3Akey\u7684hash\u4E2D\u6DFB\u52A0\u5143\u7D20field</li><li>hincrby(key, field, integer)\uFF1A\u5C06\u540D\u79F0\u4E3Akey\u7684hash\u4E2Dfield\u7684value\u589E\u52A0integer</li><li>hexists(key, field)\uFF1A\u540D\u79F0\u4E3Akey\u7684hash\u4E2D\u662F\u5426\u5B58\u5728\u952E\u4E3Afield\u7684\u57DF</li><li>hdel(key, field)\uFF1A\u5220\u9664\u540D\u79F0\u4E3Akey\u7684hash\u4E2D\u952E\u4E3Afield\u7684\u57DF</li><li>hlen(key)\uFF1A\u8FD4\u56DE\u540D\u79F0\u4E3Akey\u7684hash\u4E2D\u5143\u7D20\u4E2A\u6570</li><li>hkeys(key)\uFF1A\u8FD4\u56DE\u540D\u79F0\u4E3Akey\u7684hash\u4E2D\u6240\u6709\u952E</li><li>hvals(key)\uFF1A\u8FD4\u56DE\u540D\u79F0\u4E3Akey\u7684hash\u4E2D\u6240\u6709\u952E\u5BF9\u5E94\u7684value</li><li>hgetall(key)\uFF1A\u8FD4\u56DE\u540D\u79F0\u4E3Akey\u7684hash\u4E2D\u6240\u6709\u7684\u952E\uFF08field\uFF09\u53CA\u5176\u5BF9\u5E94\u7684value</li></ul><h1 id="redis\u9AD8\u7EA7\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#redis\u9AD8\u7EA7\u5E94\u7528" aria-hidden="true">#</a> Redis\u9AD8\u7EA7\u5E94\u7528</h1><h2 id="_1\u3001\u5B89\u5168\u6027" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5B89\u5168\u6027" aria-hidden="true">#</a> 1\u3001\u5B89\u5168\u6027</h2><p>\u8BBE\u7F6E\u5BA2\u6237\u7AEF\u8FDE\u63A5\u540E\u8FDB\u884C\u4EFB\u4F55\u64CD\u4F5C\u6307\u5B9A\u524D\u9700\u8981\u5BC6\u7801\uFF0C\u4E00\u4E2A\u5916\u90E8\u7528\u6237\u53EF\u4EE5\u518D\u4E00\u79D2\u949F\u8FDB\u884C150W\u6B21\u8BBF\u95EE\uFF0C\u5177\u4F53\u64CD\u4F5C\u5BC6\u7801\u4FEE\u6539\u8BBE\u7F6Eredis.conf\u91CC\u9762\u7684requirepass\u5C5E\u6027\u7ED9\u4E88\u5BC6\u7801\uFF0C\u5F53\u7136\u6211\u8FD9\u91CC\u7ED9\u7684\u662Fprimos\xA0 \u4E4B\u540E\u5982\u679C\u60F3\u64CD\u4F5C\u53EF\u4EE5\u91C7\u7528\u767B\u9646\u7684\u65F6\u5019\u5C31\u6388\u6743\u4F7F\u7528:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo /opt/java/redis/bin/redis-cli -a primos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216\u8005\u662F\u8FDB\u5165\u4EE5\u540Eauth primos\u7136\u540E\u5C31\u53EF\u4EE5\u968F\u610F\u64CD\u4F5C\u4E86</p><h2 id="_2\u3001\u4E3B\u4ECE\u590D\u5236" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4E3B\u4ECE\u590D\u5236" aria-hidden="true">#</a> 2\u3001\u4E3B\u4ECE\u590D\u5236</h2><p>\u505A\u8FD9\u4E2A\u64CD\u4F5C\u7684\u65F6\u5019\u6211\u51C6\u5907\u4E86\u4E24\u4E2A \u865A\u62DF\u673A\uFF0Cip\u5206\u522B\u662F192.168.15.128\u548C192.168.15.133 \u901A\u8FC7\u4E3B\u4ECE\u590D\u5236\u53EF\u4EE5\u5141\u8BB8\u591A\u4E2Aslave server\u62E5\u6709\u548Cmaster server\u76F8\u540C\u7684 \u6570\u636E\u5E93\u526F\u672C \u5177\u4F53\u914D\u7F6E\u662F\u5728slave\u4E0A\u9762\u914D\u7F6Eslave</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>slaveof 192.168.15.128 6379
masterauth primos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6CA1\u6709\u4E3B\u4ECE\u540C\u6B65\u90A3\u4E48\u5C31\u68C0\u67E5\u4E00\u4E0B\u662F\u4E0D\u662F\u9632\u706B\u5899\u7684\u95EE\u9898\uFF0C\u6211\u7528\u7684\u662Fufw\uFF0C\u8BBE\u7F6E\u4E00\u4E0Bsudo ufw allow 6379\u5C31\u53EF\u4EE5\u4E86 \u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u901A\u8FC7info\u67E5\u770B\u5177\u4F53\u7684\u60C5\u51B5</p><h2 id="_3\u3001\u4E8B\u52A1\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u4E8B\u52A1\u5904\u7406" aria-hidden="true">#</a> 3\u3001\u4E8B\u52A1\u5904\u7406</h2><p>redis\u5BF9\u4E8B\u52A1\u7684\u652F\u6301\u8FD8\u6BD4\u8F83\u7B80\u5355\uFF0Credis\u53EA\u80FD\u4FDD\u8BC1\u4E00\u4E2Aclient\u53D1\u8D77\u7684\u4E8B\u52A1\u4E2D\u7684\u547D\u4EE4\u53EF\u4EE5\u8FDE\u7EED\u6267\u884C\uFF0C\u800C\u4E2D\u95F4\u4E0D\u4F1A\u63D2\u5165\u5176\u4ED6client\u7684\u547D\u4EE4\u3002\u5F53\u4E00\u4E2Aclient\u5728\u4E00\u4E2A\u8FDE\u63A5\u4E2D\u53D1\u51FAmulti\u547D\u4EE4\u65F6\uFF0C\u8FD9\u4E2A\u8FDE\u63A5\u4F1A\u8FDB\u5165\u4E00\u4E2A\u4E8B\u52A1\u7684\u4E0A\u4E0B\u6587\uFF0C\u8FDE\u63A5\u540E\u7EED\u547D\u4EE4\u4E0D\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u800C\u662F\u5148\u653E\u5230\u4E00\u4E2A\u961F\u5217\u4E2D\uFF0C\u5F53\u6267\u884Cexec\u547D\u4EE4\u65F6\uFF0Credis\u4F1A\u987A\u5E8F\u7684\u6267\u884C\u961F\u5217\u4E2D\u7684\u6240\u6709\u547D\u4EE4\u3002 \u6BD4\u5982\u6211\u4E0B\u9762\u7684\u4E00\u4E2A\u4F8B\u5B50</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>set age 100
multi
set age 10
set age 20
exec
get age --\u8FD9\u4E2A\u5185\u5BB9\u5C31\u5E94\u8BE5\u662F20
multi
set age 20
set age 10
exec 
get age --\u8FD9\u4E2A\u65F6\u5019\u7684\u5185\u5BB9\u5C31\u6210\u4E8610\uFF0C\u5145\u5206\u4F53\u73B0\u4E86\u4E00\u4E0B\u6309\u7167\u961F\u5217\u987A\u5E8F\u6267\u884C\u7684\u65B9\u5F0F
discard  \u53D6\u6D88\u6240\u6709\u4E8B\u52A1\uFF0C\u4E5F\u5C31\u662F\u4E8B\u52A1\u56DE\u6EDA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u8FC7\u5728redis\u4E8B\u52A1\u6267\u884C\u6709\u4E2A\u522B\u9519\u8BEF\u7684\u65F6\u5019\uFF0C\u4E8B\u52A1\u4E0D\u4F1A\u56DE\u6EDA\uFF0C\u4F1A\u628A\u4E0D\u9519\u8BEF\u7684\u5185\u5BB9\u6267\u884C\uFF0C\u9519\u8BEF\u7684\u5185\u5BB9\u76F4\u63A5\u653E\u5F03\uFF0C\u76EE\u524D\u6700\u65B0\u7684\u662F2.6.7\u4E5F\u6709\u8FD9\u4E2A\u95EE\u9898\u7684 \u4E50\u89C2\u9501 watch key\u5982\u679C\u6CA1watch\u7684key\u6709\u6539\u52A8\u90A3\u4E48outdate\u7684\u4E8B\u52A1\u662F\u4E0D\u80FD\u6267\u884C\u7684</p><h3 id="_4\u3001\u6301\u4E45\u5316\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u6301\u4E45\u5316\u673A\u5236" aria-hidden="true">#</a> 4\u3001\u6301\u4E45\u5316\u673A\u5236</h3><p>redis\u662F\u4E00\u4E2A\u652F\u6301\u6301\u4E45\u5316\u7684\u5185\u5B58\u6570\u636E\u5E93 snapshotting\u5FEB\u7167\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u7684\u5B58\u50A8\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u5199\u5165dump.rdb\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E2D\uFF0C\u53EF\u4EE5\u914D\u7F6Eredis\u5728n\u79D2\u5185\u5982\u679C\u8D85\u8FC7m\u4E2Akey\u88AB\u4FEE\u6539\u8FC7\u5C31\u81EA\u52A8\u505A\u5FEB\u7167 append-only file aof\u65B9\u5F0F\uFF0C\u4F7F\u7528aof\u65F6\u5019redis\u4F1A\u5C06\u6BCF\u4E00\u6B21\u7684\u51FD \u6570\u90FD\u8FFD\u52A0\u5230\u6587\u4EF6\u4E2D\uFF0C\u5F53redis\u91CD\u542F\u65F6\u4F1A\u91CD\u65B0\u6267\u884C\u6587\u4EF6\u4E2D\u7684\u4FDD\u5B58\u7684\u5199\u547D \u4EE4\u5728\u5185\u5B58\u4E2D\u3002</p><h3 id="_5\u3001\u53D1\u5E03\u8BA2\u9605\u6D88\u606F-sbusribe-publish\u64CD\u4F5C-\u5176\u5B9E\u5C31\u7C7B\u4F3Clinux\u4E0B\u9762\u7684\u6D88\u606F\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u53D1\u5E03\u8BA2\u9605\u6D88\u606F-sbusribe-publish\u64CD\u4F5C-\u5176\u5B9E\u5C31\u7C7B\u4F3Clinux\u4E0B\u9762\u7684\u6D88\u606F\u53D1\u5E03" aria-hidden="true">#</a> 5\u3001\u53D1\u5E03\u8BA2\u9605\u6D88\u606F sbusribe publish\u64CD\u4F5C\uFF0C\u5176\u5B9E\u5C31\u7C7B\u4F3Clinux\u4E0B\u9762\u7684\u6D88\u606F\u53D1\u5E03</h3><h3 id="_6\u3001\u865A\u62DF\u5185\u5B58\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u865A\u62DF\u5185\u5B58\u7684\u4F7F\u7528" aria-hidden="true">#</a> 6\u3001\u865A\u62DF\u5185\u5B58\u7684\u4F7F\u7528</h3><p>\u53EF\u4EE5\u914D\u7F6Evm\u529F\u80FD\uFF0C\u4FDD\u5B58\u8DEF\u5F84\uFF0C\u6700\u5927\u5185\u5B58\u4E0A\u7EBF\uFF0C\u9875\u9762\u591A\u5C11\uFF0C\u9875\u9762\u5927\u5C0F\uFF0C\u6700\u5927\u5DE5\u4F5C\u7EBF\u7A0B \u4E34\u65F6\u4FEE\u6539ip\u5730\u5740ifconfig eth0 192.168.15.129</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli\u53C2\u6570

Usage: redis-cli [OPTIONS] [cmd [arg [arg ...]]]
  -h &lt;hostname&gt;    Server hostname (default: 127.0.0.1)
  -p &lt;port&gt;        Server port (default: 6379)
  -s &lt;socket&gt;      Server socket (overrides hostname and port)
  -a &lt;password&gt;    Password to use when connecting to the server
  -r &lt;repeat&gt;      Execute specified command N times
  -i &lt;interval&gt;    When -r is used, waits &lt;interval&gt; seconds per command.
                   It is possible to specify sub-second times like -i 0.1
  -n &lt;db&gt;          Database number
  -x               Read last argument from STDIN
  -d &lt;delimiter&gt;   Multi-bulk delimiter in for raw formatting (default: \\n)
  -c               Enable cluster mode (follow -ASK and -MOVED redirections)
  --raw            Use raw formatting for replies (default when STDOUT is not a  tty)
  --latency        Enter a special mode continuously sampling latency
  --slave          Simulate a slave showing commands received from the master
  --pipe           Transfer raw Redis protocol from stdin to server
  --bigkeys        Sample Redis keys looking for big keys
  --eval &lt;file&gt;    Send an EVAL command using the Lua script at &lt;file&gt;
  --help           Output this help and exit
  --version        Output version and exit

Examples:
  cat /etc/passwd | redis-cli -x set mypasswd
  redis-cli get mypasswd
  redis-cli -r 100 lpush mylist x
  redis-cli -r 100 -i 1 info | grep used_memory_human:
  redis-cli --eval myscript.lua key1 key2 , arg1 arg2 arg3
  (Note: when using --eval the comma separates KEYS[] from ARGV[] items)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4\uFF1A</h2><h1 id="_1-\u67E5\u770Bkeys\u4E2A\u6570" tabindex="-1"><a class="header-anchor" href="#_1-\u67E5\u770Bkeys\u4E2A\u6570" aria-hidden="true">#</a> 1\uFF09 \u67E5\u770Bkeys\u4E2A\u6570</h1><blockquote><p>keys * \xA0 \xA0 \xA0// \u67E5\u770B\u6240\u6709keys</p></blockquote><blockquote><p>keys prefix_* \xA0 \xA0 // \u67E5\u770B\u524D\u7F00\u4E3A&quot;prefix_&quot;\u7684\u6240\u6709keys</p></blockquote><h1 id="_2-\u6E05\u7A7A\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_2-\u6E05\u7A7A\u6570\u636E\u5E93" aria-hidden="true">#</a> 2\uFF09 \u6E05\u7A7A\u6570\u636E\u5E93</h1><blockquote><p>flushdb \xA0 // \u6E05\u9664\u5F53\u524D\u6570\u636E\u5E93\u7684\u6240\u6709keys</p></blockquote><blockquote><p>flushall \xA0 \xA0// \u6E05\u9664\u6240\u6709\u6570\u636E\u5E93\u7684\u6240\u6709keys</p></blockquote>`,45),d=[n];function r(t,u){return i(),l("div",null,d)}const c=e(a,[["render",r],["__file","Redis\u5E38\u7528\u547D\u4EE4.html.vue"]]);export{c as default};
