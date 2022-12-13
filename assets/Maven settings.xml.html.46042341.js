import{_ as i,o as e,c as n,d as l}from"./app.af5ffdc4.js";const s={},t=l(`<h1 id="maven-settings-xml" tabindex="-1"><a class="header-anchor" href="#maven-settings-xml" aria-hidden="true">#</a> Maven settings.xml</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;

&lt;!--
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
&quot;License&quot;); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
&quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
--&gt;

&lt;!--
 | This is the configuration file for Maven. It can be specified at two levels:
 |
 |  1. User Level. This settings.xml file provides configuration for a single user,
 |                 and is normally provided in \${user.home}/.m2/settings.xml.
 |
 |                 NOTE: This location can be overridden with the CLI option:
 |
 |                 -s /path/to/user/settings.xml
 |
 |  2. Global Level. This settings.xml file provides configuration for all Maven
 |                 users on a machine (assuming they&#39;re all using the same Maven
 |                 installation). It&#39;s normally provided in
 |                 \${maven.conf}/settings.xml.
 |
 |                 NOTE: This location can be overridden with the CLI option:
 |
 |                 -gs /path/to/global/settings.xml
 |
 | The sections in this sample file are intended to give you a running start at
 | getting the most out of your Maven installation. Where appropriate, the default
 | values (values used when the setting is not specified) are provided.
 |
 |--&gt;
&lt;settings xmlns=&quot;http://maven.apache.org/SETTINGS/1.0.0&quot;
          xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
          xsi:schemaLocation=&quot;http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd&quot;&gt;
    &lt;!-- localRepository
     | The path to the local repository maven will use to store artifacts.
     |
     | Default: \${user.home}/.m2/repository
    &lt;localRepository&gt;/path/to/local/repo&lt;/localRepository&gt;
    --&gt;

    &lt;localRepository&gt;F:\\JAVA\\maven_local_repository&lt;/localRepository&gt;

    &lt;!-- interactiveMode
     | This will determine whether maven prompts you when it needs input. If set to false,
     | maven will use a sensible default value, perhaps based on some other setting, for
     | the parameter in question.
     |
     | Default: true
    &lt;interactiveMode&gt;true&lt;/interactiveMode&gt;
    --&gt;

    &lt;!-- offline
     | Determines whether maven should attempt to connect to the network when executing a build.
     | This will have an effect on artifact downloads, artifact deployment, and others.
     |
     | Default: false
    &lt;offline&gt;false&lt;/offline&gt;
    --&gt;

    &lt;!-- pluginGroups
     | This is a list of additional group identifiers that will be searched when resolving plugins by their prefix, i.e.
     | when invoking a command line like &quot;mvn prefix:goal&quot;. Maven will automatically add the group identifiers
     | &quot;org.apache.maven.plugins&quot; and &quot;org.codehaus.mojo&quot; if these are not already contained in the list.
     |--&gt;
    &lt;pluginGroups&gt;
        &lt;!-- pluginGroup
         | Specifies a further group identifier to use for plugin lookup.
        &lt;pluginGroup&gt;com.your.plugins&lt;/pluginGroup&gt;
        --&gt;
    &lt;/pluginGroups&gt;

    &lt;!-- proxies
     | This is a list of proxies which can be used on this machine to connect to the network.
     | Unless otherwise specified (by system property or command-line switch), the first proxy
     | specification in this list marked as active will be used.
     |--&gt;
    &lt;proxies&gt;
        &lt;!-- proxy
         | Specification for one proxy, to be used in connecting to the network.
         |
        &lt;proxy&gt;
          &lt;id&gt;optional&lt;/id&gt;
          &lt;active&gt;true&lt;/active&gt;
          &lt;protocol&gt;http&lt;/protocol&gt;
          &lt;username&gt;proxyuser&lt;/username&gt;
          &lt;password&gt;proxypass&lt;/password&gt;
          &lt;host&gt;proxy.host.net&lt;/host&gt;
          &lt;port&gt;80&lt;/port&gt;
          &lt;nonProxyHosts&gt;local.net|some.host.com&lt;/nonProxyHosts&gt;
        &lt;/proxy&gt;
        --&gt;
    &lt;/proxies&gt;

    &lt;!-- servers
     | This is a list of authentication profiles, keyed by the server-id used within the system.
     | Authentication profiles can be used whenever maven must make a connection to a remote server.
     |--&gt;
    &lt;servers&gt;
        &lt;!-- server
         | Specifies the authentication information to use when connecting to a particular server, identified by
         | a unique name within the system (referred to by the &#39;id&#39; attribute below).
         |
         | NOTE: You should either specify username/password OR privateKey/passphrase, since these pairings are
         |       used together.
         |
        &lt;server&gt;
          &lt;id&gt;deploymentRepo&lt;/id&gt;
          &lt;username&gt;repouser&lt;/username&gt;
          &lt;password&gt;repopwd&lt;/password&gt;
        &lt;/server&gt;
        --&gt;

        &lt;server&gt;
            &lt;id&gt;nexus-release&lt;/id&gt;
            &lt;username&gt;admin&lt;/username&gt;
            &lt;password&gt;admin123&lt;/password&gt;
        &lt;/server&gt;
        &lt;server&gt;
            &lt;id&gt;nexus-snapshot&lt;/id&gt;
            &lt;username&gt;admin&lt;/username&gt;
            &lt;password&gt;admin123&lt;/password&gt;
        &lt;/server&gt;

        &lt;server&gt;
            &lt;id&gt;192168510-release&lt;/id&gt;
            &lt;username&gt;admin&lt;/username&gt;
            &lt;password&gt;123456&lt;/password&gt;
        &lt;/server&gt;
        &lt;server&gt;
            &lt;id&gt;192168510-snapshot&lt;/id&gt;
            &lt;username&gt;admin&lt;/username&gt;
            &lt;password&gt;123456&lt;/password&gt;
        &lt;/server&gt;

        &lt;!-- Another sample, using keys to authenticate.
        &lt;server&gt;
          &lt;id&gt;siteServer&lt;/id&gt;
          &lt;privateKey&gt;/path/to/private/key&lt;/privateKey&gt;
          &lt;passphrase&gt;optional; leave empty if not used.&lt;/passphrase&gt;
        &lt;/server&gt;
        --&gt;
    &lt;/servers&gt;

    &lt;!-- mirrors
     | This is a list of mirrors to be used in downloading artifacts from remote repositories.
     |
     | It works like this: a POM may declare a repository to use in resolving certain artifacts.
     | However, this repository may have problems with heavy traffic at times, so people have mirrored
     | it to several places.
     |
     | That repository definition will have a unique id, so we can create a mirror reference for that
     | repository, to be used as an alternate download site. The mirror site will be the preferred
     | server for that repository.
     |--&gt;
    &lt;mirrors&gt;
        &lt;!-- mirror
         | Specifies a repository mirror site to use instead of a given repository. The repository that
         | this mirror serves has an ID that matches the mirrorOf element of this mirror. IDs are used
         | for inheritance and direct lookup purposes, and must be unique across the set of mirrors.
         |
        &lt;mirror&gt;
          &lt;id&gt;mirrorId&lt;/id&gt;
          &lt;mirrorOf&gt;repositoryId&lt;/mirrorOf&gt;
          &lt;name&gt;Human Readable Name for this Mirror.&lt;/name&gt;
          &lt;url&gt;http://my.repository.com/repo/path&lt;/url&gt;
        &lt;/mirror&gt;
         --&gt;


&lt;!--        &lt;mirror&gt;--&gt;
&lt;!--            &lt;id&gt;kingmed&lt;/id&gt;--&gt;
&lt;!--            &lt;name&gt;kingmed maven&lt;/name&gt;--&gt;
&lt;!--            &lt;url&gt;http://192.168.0.100/nexus/content/groups/public/&lt;/url&gt;--&gt;
&lt;!--            &lt;mirrorOf&gt;central&lt;/mirrorOf&gt;--&gt;
&lt;!--        &lt;/mirror&gt;--&gt;

        &lt;mirror&gt;
            &lt;id&gt;alimaven&lt;/id&gt;
            &lt;name&gt;aliyun maven&lt;/name&gt;
            &lt;url&gt;http://maven.aliyun.com/nexus/content/groups/public/&lt;/url&gt;
            &lt;mirrorOf&gt;central&lt;/mirrorOf&gt;
        &lt;/mirror&gt;

        &lt;mirror&gt;
            &lt;id&gt;uk&lt;/id&gt;
            &lt;mirrorOf&gt;central&lt;/mirrorOf&gt;
            &lt;name&gt;Human Readable Name for this Mirror.&lt;/name&gt;
            &lt;url&gt;http://uk.maven.org/maven2/&lt;/url&gt;
        &lt;/mirror&gt;

        &lt;mirror&gt;
            &lt;id&gt;CN&lt;/id&gt;
            &lt;name&gt;OSChina Central&lt;/name&gt;
            &lt;url&gt;http://maven.oschina.net/content/groups/public/&lt;/url&gt;
            &lt;mirrorOf&gt;central&lt;/mirrorOf&gt;
        &lt;/mirror&gt;

        &lt;mirror&gt;
            &lt;id&gt;nexus&lt;/id&gt;
            &lt;name&gt;internal nexus repository&lt;/name&gt;
            &lt;!-- &lt;url&gt;http://192.168.1.100:8081/nexus/content/groups/public/&lt;/url&gt;--&gt;
            &lt;url&gt;http://repo.maven.apache.org/maven2&lt;/url&gt;
            &lt;mirrorOf&gt;central&lt;/mirrorOf&gt;
        &lt;/mirror&gt;


    &lt;/mirrors&gt;

    &lt;!-- profiles
     | This is a list of profiles which can be activated in a variety of ways, and which can modify
     | the build process. Profiles provided in the settings.xml are intended to provide local machine-
     | specific paths and repository locations which allow the build to work in the local environment.
     |
     | For example, if you have an integration testing plugin - like cactus - that needs to know where
     | your Tomcat instance is installed, you can provide a variable here such that the variable is
     | dereferenced during the build process to configure the cactus plugin.
     |
     | As noted above, profiles can be activated in a variety of ways. One way - the activeProfiles
     | section of this document (settings.xml) - will be discussed later. Another way essentially
     | relies on the detection of a system property, either matching a particular value for the property,
     | or merely testing its existence. Profiles can also be activated by JDK version prefix, where a
     | value of &#39;1.4&#39; might activate a profile when the build is executed on a JDK version of &#39;1.4.2_07&#39;.
     | Finally, the list of active profiles can be specified directly from the command line.
     |
     | NOTE: For profiles defined in the settings.xml, you are restricted to specifying only artifact
     |       repositories, plugin repositories, and free-form properties to be used as configuration
     |       variables for plugins in the POM.
     |
     |--&gt;
    &lt;profiles&gt;

        &lt;profile&gt;
            &lt;id&gt;jdk-1.8&lt;/id&gt;
            &lt;activation&gt;
                &lt;activeByDefault&gt;true&lt;/activeByDefault&gt;
                &lt;jdk&gt;1.8&lt;/jdk&gt;
            &lt;/activation&gt;
            &lt;properties&gt;
                &lt;maven.compiler.source&gt;1.8&lt;/maven.compiler.source&gt;
                &lt;maven.compiler.target&gt;1.8&lt;/maven.compiler.target&gt;
                &lt;maven.compiler.compilerVersion&gt;1.8&lt;/maven.compiler.compilerVersion&gt;
            &lt;/properties&gt;
        &lt;/profile&gt;

        &lt;!-- profile
         | Specifies a set of introductions to the build process, to be activated using one or more of the
         | mechanisms described above. For inheritance purposes, and to activate profiles via &lt;activatedProfiles/&gt;
         | or the command line, profiles have to have an ID that is unique.
         |
         | An encouraged best practice for profile identification is to use a consistent naming convention
         | for profiles, such as &#39;env-dev&#39;, &#39;env-test&#39;, &#39;env-production&#39;, &#39;user-jdcasey&#39;, &#39;user-brett&#39;, etc.
         | This will make it more intuitive to understand what the set of introduced profiles is attempting
         | to accomplish, particularly when you only have a list of profile id&#39;s for debug.
         |
         | This profile example uses the JDK version to trigger activation, and provides a JDK-specific repo.
        &lt;profile&gt;
          &lt;id&gt;jdk-1.4&lt;/id&gt;

          &lt;activation&gt;
            &lt;jdk&gt;1.4&lt;/jdk&gt;
          &lt;/activation&gt;

          &lt;repositories&gt;
            &lt;repository&gt;
              &lt;id&gt;jdk14&lt;/id&gt;
              &lt;name&gt;Repository for JDK 1.4 builds&lt;/name&gt;
              &lt;url&gt;http://www.myhost.com/maven/jdk14&lt;/url&gt;
              &lt;layout&gt;default&lt;/layout&gt;
              &lt;snapshotPolicy&gt;always&lt;/snapshotPolicy&gt;
            &lt;/repository&gt;
          &lt;/repositories&gt;
        &lt;/profile&gt;
        --&gt;

        &lt;!--
         | Here is another profile, activated by the system property &#39;target-env&#39; with a value of &#39;dev&#39;,
         | which provides a specific path to the Tomcat instance. To use this, your plugin configuration
         | might hypothetically look like:
         |
         | ...
         | &lt;plugin&gt;
         |   &lt;groupId&gt;org.myco.myplugins&lt;/groupId&gt;
         |   &lt;artifactId&gt;myplugin&lt;/artifactId&gt;
         |
         |   &lt;configuration&gt;
         |     &lt;tomcatLocation&gt;\${tomcatPath}&lt;/tomcatLocation&gt;
         |   &lt;/configuration&gt;
         | &lt;/plugin&gt;
         | ...
         |
         | NOTE: If you just wanted to inject this configuration whenever someone set &#39;target-env&#39; to
         |       anything, you could just leave off the &lt;value/&gt; inside the activation-property.
         |
        &lt;profile&gt;
          &lt;id&gt;env-dev&lt;/id&gt;

          &lt;activation&gt;
            &lt;property&gt;
              &lt;name&gt;target-env&lt;/name&gt;
              &lt;value&gt;dev&lt;/value&gt;
            &lt;/property&gt;
          &lt;/activation&gt;

          &lt;properties&gt;
            &lt;tomcatPath&gt;/path/to/tomcat/instance&lt;/tomcatPath&gt;
          &lt;/properties&gt;
        &lt;/profile&gt;
        --&gt;
    &lt;/profiles&gt;

    &lt;!-- activeProfiles
     | List of profiles that are active for all builds.
     |
    &lt;activeProfiles&gt;
      &lt;activeProfile&gt;alwaysActiveProfile&lt;/activeProfile&gt;
      &lt;activeProfile&gt;anotherAlwaysActiveProfile&lt;/activeProfile&gt;
    &lt;/activeProfiles&gt;
    --&gt;
&lt;/settings&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[t];function d(a,v){return e(),n("div",null,r)}const c=i(s,[["render",d],["__file","Maven settings.xml.html.vue"]]);export{c as default};
