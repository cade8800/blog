import{_ as e,o as n,c as i,d}from"./app.af5ffdc4.js";const s={},l=d(`<h1 id="windows10-\u53F3\u952E\u6DFB\u52A0\u6253\u5F00cmd\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#windows10-\u53F3\u952E\u6DFB\u52A0\u6253\u5F00cmd\u83DC\u5355" aria-hidden="true">#</a> windows10 \u53F3\u952E\u6DFB\u52A0\u6253\u5F00cmd\u83DC\u5355</h1><blockquote><p>OpenCmdHere.reg \u7F16\u7801\uFF1A\u5E26\u6709BOM\u7684UTF-8</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\\Directory\\shell\\OpenCmdHere]
@=&quot;\u5728\u6B64\u5904\u6253\u5F00\u547D\u4EE4\u7A97\u53E3&quot;
&quot;Icon&quot;=&quot;cmd.exe&quot;

[HKEY_CLASSES_ROOT\\Directory\\shell\\OpenCmdHere\\command]
@=&quot;cmd.exe /s /k pushd \\&quot;%V\\&quot;&quot;

[HKEY_CLASSES_ROOT\\Directory\\Background\\shell\\OpenCmdHere]
@=&quot;\u5728\u6B64\u5904\u6253\u5F00\u547D\u4EE4\u7A97\u53E3&quot;
&quot;Icon&quot;=&quot;cmd.exe&quot;

[HKEY_CLASSES_ROOT\\Directory\\Background\\shell\\OpenCmdHere\\command]
@=&quot;cmd.exe /s /k pushd \\&quot;%V\\&quot;&quot;

[HKEY_CLASSES_ROOT\\Drive\\shell\\OpenCmdHere]
@=&quot;\u5728\u6B64\u5904\u6253\u5F00\u547D\u4EE4\u7A97\u53E3&quot;
&quot;Icon&quot;=&quot;cmd.exe&quot;

[HKEY_CLASSES_ROOT\\Drive\\shell\\OpenCmdHere\\command]
@=&quot;cmd.exe /s /k pushd \\&quot;%V\\&quot;&quot;

[HKEY_CLASSES_ROOT\\LibraryFolder\\background\\shell\\OpenCmdHere]
@=&quot;\u5728\u6B64\u5904\u6253\u5F00\u547D\u4EE4\u7A97\u53E3&quot;
&quot;Icon&quot;=&quot;cmd.exe&quot;

[HKEY_CLASSES_ROOT\\LibraryFolder\\background\\shell\\OpenCmdHere\\command]
@=&quot;cmd.exe /s /k pushd \\&quot;%V\\&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[l];function u(r,c){return n(),i("div",null,o)}const m=e(s,[["render",u],["__file","windows10 \u53F3\u952E\u6DFB\u52A0\u6253\u5F00cmd\u83DC\u5355.html.vue"]]);export{m as default};
