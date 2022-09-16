import { defineUserConfig, defaultTheme } from 'vuepress'

const sidebarList = [
  {
    text: 'Java',
    children: [
      '/java/25种设计模式',
      '/java/多线程并发同步场景及解决方案',
      '/java/类成员的修饰符public、private、protected的区别',
      '/java/自己实现String转Integer',
      '/java/Oracle 循环读取某个时间点之后的大量数据的两种方案',
      '/java/SpringDataJPA简单查询--方法定义规则',
      '/java/spring-boot-starter-validation 各常用注释使用说明'
    ],
  },
  {
    text: 'Js',
    children: [
      '/js/数组方法及es6新增数组方法'
    ]
  },
  {
    text: 'app',
    children: [
      '/app/App上架应用流程'
    ]
  }
];

export default defineUserConfig({
  base: '/blog/',
  lang: 'zh-CN',
  title: 'EEDC NOTES',
  description: 'Man is born free; and everywhere he is in chains. One thinks himself the master of others, and still remains a greater slave than they.',

  open: false,

  theme: defaultTheme({
    logo: 'https://jwt.io/img/pic_logo.svg',
    editLink: true,

    sidebar: sidebarList,

    navbar: [
      { text: 'Home', link: '/', },
      {
        text: 'Menu',
        children: sidebarList,
      },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' },
    ],


  })

})

