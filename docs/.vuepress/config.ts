import { defineUserConfig, defaultTheme } from 'vuepress'

const sidebarList = [
  {
    text: '后端',
    children: [
      {
        text: '环境',
        link: '',
        children: [
          '/backend/env/centeros 安装 jdk1.8',
          '/backend/env/Docker安装',
          '/backend/env/Linux安装rpm式安装mysql',
          '/backend/env/安装Tengine'
        ],
      },

      '/backend/25种设计模式',
      '/backend/多线程并发同步场景及解决方案',
      '/backend/类成员的修饰符public、private、protected的区别',
      '/backend/自己实现String转Integer',
      '/backend/Oracle 循环读取某个时间点之后的大量数据的两种方案',
      '/backend/SpringDataJPA简单查询--方法定义规则',
      '/backend/spring-boot-starter-validation 各常用注释使用说明',


      '/backend/分布式事务的四种解决方案',
      '/backend/关于并发',
      '/backend/关于事务',
      '/backend/数据库建模',
      '/backend/微服务：注册中心ZooKeeper、Eureka、Consul 、Nacos对比',
      '/backend/Apache ab压力测试',
      '/backend/centos 文件权限',
      '/backend/Elasticsearch（ES）分布式架构原理',
      '/backend/HashMap 遍历的几种方式',
      '/backend/Java 线程安全 list',
      '/backend/JVM -- 内存模型(jmm)',
      '/backend/JVM（java虚拟机）底层',
      '/backend/kafka工作原理',
      '/backend/Maven settings.xml',
      '/backend/Mysql性能优化',
      '/backend/Redis',
      '/backend/Redis常用命令',
      '/backend/redis通用key操作命令(总)',
      '/backend/SpringCloud',
      '/backend/windows10 右键添加打开cmd菜单',
      '/backend/Zookeeper实现分布式锁'
    ],
  },
  {
    text: '前端',
    children: [
      '/frontend/数组方法及es6新增数组方法',
      '/frontend/fetch demo'
    ]
  },
  {
    text: '应用',
    children: [
      '/app/App上架应用流程'
    ]
  },
  {
    text: '网络',
    children: [
      '/network/v2rayN 订阅地址'
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

