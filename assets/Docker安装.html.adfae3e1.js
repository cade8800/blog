import{_ as e,o as i,c as n,d}from"./app.af5ffdc4.js";const s={},l=d(`<h1 id="docker\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#docker\u5B89\u88C5" aria-hidden="true">#</a> Docker\u5B89\u88C5</h1><blockquote><p>https://blog.csdn.net/q610376681/article/details/90483576</p></blockquote><h3 id="_1-docker-\u8981\u6C42-centos-\u7CFB\u7EDF\u7684\u5185\u6838\u7248\u672C\u9AD8\u4E8E-3-10-\u67E5\u770B\u672C\u9875\u9762\u7684\u524D\u63D0\u6761\u4EF6\u6765\u9A8C\u8BC1\u4F60\u7684centos-\u7248\u672C\u662F\u5426\u652F\u6301-docker-\u3002" tabindex="-1"><a class="header-anchor" href="#_1-docker-\u8981\u6C42-centos-\u7CFB\u7EDF\u7684\u5185\u6838\u7248\u672C\u9AD8\u4E8E-3-10-\u67E5\u770B\u672C\u9875\u9762\u7684\u524D\u63D0\u6761\u4EF6\u6765\u9A8C\u8BC1\u4F60\u7684centos-\u7248\u672C\u662F\u5426\u652F\u6301-docker-\u3002" aria-hidden="true">#</a> 1. Docker \u8981\u6C42 CentOS \u7CFB\u7EDF\u7684\u5185\u6838\u7248\u672C\u9AD8\u4E8E 3.10,\u67E5\u770B\u672C\u9875\u9762\u7684\u524D\u63D0\u6761\u4EF6\u6765\u9A8C\u8BC1\u4F60\u7684CentOS \u7248\u672C\u662F\u5426\u652F\u6301 Docker \u3002</h3><p>\u901A\u8FC7 <code>uname -r</code> \u547D\u4EE4\u67E5\u770B\u4F60\u5F53\u524D\u7684\u5185\u6838\u7248\u672C</p><h3 id="_2-\u5982\u679C\u5B89\u88C5\u8FC7\u8BF7\u5148\u5378\u8F7D" tabindex="-1"><a class="header-anchor" href="#_2-\u5982\u679C\u5B89\u88C5\u8FC7\u8BF7\u5148\u5378\u8F7D" aria-hidden="true">#</a> 2. \u5982\u679C\u5B89\u88C5\u8FC7\u8BF7\u5148\u5378\u8F7D</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum remove docker \\
           docker-client \\
           docker-client-latest \\
           docker-common \\
           docker-latest \\
           docker-latest-logrotate \\
           docker-logrotate \\
           docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u5B89\u88C5\u4F9D\u8D56\u8BBE\u7F6Eyum\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#_3-\u5B89\u88C5\u4F9D\u8D56\u8BBE\u7F6Eyum\u4ED3\u5E93" aria-hidden="true">#</a> 3.\u5B89\u88C5\u4F9D\u8D56\u8BBE\u7F6Eyum\u4ED3\u5E93</h3><p>\u5B89\u88C5\u4F9D\u8D56:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install -y yum-utils \\
  device-mapper-persistent-data \\
  lvm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u4ED3\u5E93:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum-config-manager \\
    --add-repo \\
    https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#_4-\u5B89\u88C5docker" aria-hidden="true">#</a> 4. \u5B89\u88C5docker</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-\u542F\u52A8\u5E76\u52A0\u5165\u5F00\u673A\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_5-\u542F\u52A8\u5E76\u52A0\u5165\u5F00\u673A\u542F\u52A8" aria-hidden="true">#</a> 5.\xA0\u542F\u52A8\u5E76\u52A0\u5165\u5F00\u673A\u542F\u52A8</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl start docker
systemctl enable docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-\u9A8C\u8BC1\u662F\u5426\u5B89\u88C5\u6210\u529F" tabindex="-1"><a class="header-anchor" href="#_6-\u9A8C\u8BC1\u662F\u5426\u5B89\u88C5\u6210\u529F" aria-hidden="true">#</a> 6.\u9A8C\u8BC1\u662F\u5426\u5B89\u88C5\u6210\u529F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker version
docker run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u663E\u793A\u5982\u4E0B\u5373\u5B89\u88C5\u6210\u529F!</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost etc]# docker version
Client: Docker Engine - Community
 Version:           20.10.6
 API version:       1.41
 Go version:        go1.13.15
 Git commit:        370c289
 Built:             Fri Apr  9 22:45:33 2021
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true

Server: Docker Engine - Community
 Engine:
  Version:          20.10.6
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.13.15
  Git commit:       8728dd2
  Built:            Fri Apr  9 22:43:57 2021
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.4.4
  GitCommit:        05f951a3781f4f2c1911b05e61c160e9c30eaa8e
 runc:
  Version:          1.0.0-rc93
  GitCommit:        12644e614e25b05da6fd08a38ffa0cfe1903fdec
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost etc]# docker run hello-world
Unable to find image &#39;hello-world:latest&#39; locally
latest: Pulling from library/hello-world
b8dfde127a29: Pull complete 
Digest: sha256:f2266cbfc127c960fd30e76b7c792dc23b588c0db76233517e1891a4e357d519
Status: Downloaded newer image for hello-world:latest
WARNING: IPv4 forwarding is disabled. Networking will not work.

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the &quot;hello-world&quot; image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),a=[l];function r(c,t){return i(),n("div",null,a)}const v=e(s,[["render",r],["__file","Docker\u5B89\u88C5.html.vue"]]);export{v as default};
