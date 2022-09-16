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
  },
  {
    text: '项目管理',
    children: [
      '/project-management/11.3.2 成功的项目团队的特点',
      '/project-management/44、在权利及利益方格中，针对“权力小、对项目结果关注度高”的干系人，应该采取的策略是（ ）。',
      '/project-management/案例题、计算题相关公式流程图',
      '/project-management/成本的类型-机会成本',
      '/project-management/储备分析',
      '/project-management/第 2 版系统集成项目管理工程师 47 个过程的输入输出及工具',
      '/project-management/关键链法-资源优化技术',
      '/project-management/关于冲突的解决',
      '/project-management/激励理论-马斯洛需要层次理论',
      '/project-management/进度落后-可采取的措施',
      '/project-management/前导图法-活动节点',
      '/project-management/软考',
      '/project-management/三点估算-标准差-西格码',
      '/project-management/十五至尊图',
      '/project-management/通关心得分享',
      '/project-management/项目团队建设的5个阶段',
      '/project-management/信息安全等级保护',
      '/project-management/信息系统项目管理师 - 案例分析题',
      '/project-management/云计算服务的类型',
      '/project-management/挣值管理 (EVM ）- 挣值计算汇总表',
      '/project-management/质量成本',
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
    ]
  })
})

