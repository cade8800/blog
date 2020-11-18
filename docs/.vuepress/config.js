module.exports = {
    base: '/blog/',
    title: 'EEDC NOTES',
    description: 'Man is born free; and everywhere he is in chains. One thinks himself the master of others, and still remains a greater slave than they.',

    themeConfig: {
        displayAllHeaders: true,

        sidebar: 'auto',
        // sidebarDepth: 2,

        lastUpdated: 'Last Updated',
        smoothScroll: true,


        // repo: 'vuejs/vuepress',
        // repoLabel: 'SourceCode',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'cade8800/blog',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        // editLinkText: 'Edit this page',



        nav: [
            {
                text: 'Menu',
                items: [
                    {
                        text: 'Backend',
                        items: [
                            { text: 'Java', link: '/java/' },
                            { text: '.Net', link: '/net/' }
                        ]
                    },
                    {
                        text: 'Front-end',
                        items: [
                            { text: 'Angular', link: '/angular/' },
                            { text: 'Vue', link: '/vue/' },
                        ]
                    },
                ]
            },
            { text: 'About', link: '/about' },
            { text: 'Contact', link: '/contact' },
            { text: 'GitHub', link: 'https://github.com/cade8800' },
        ],

        sidebar: [
            {
                title: 'Home',
                path: '/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/'
                ]
            },
            {
                title: 'Java',
                collapsable: true,
                children: ['/java/1', '/java/2', '/java/3',]
            },
        ]

        // sidebar: {
        //     '/java/': [
        //         '',     /* /foo/ */
        //         'one',  /* /foo/one.html */
        //         'two'   /* /foo/two.html */
        //     ],
        //     '/': [
        //         '',
        //         'contact',
        //         'about'
        //     ]
        // }

    },


}