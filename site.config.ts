import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  frontmatter: {
    // time_warning: true,
  },

  lang: 'zh-CN',
  // disable show language switch
  // languages: ['zh-CN'],

  title: '神仙渡',
  subtitle: '世人皆说神仙好，惟有功名忘不了',
  timezone: 'Asia/Shanghai',
  url: 'https://gt.1314220.xyz',
 
  author: {
    avatar: 'https://gt.1314220.xyz/2.jpg',
    name: '小猪',
    
 
    
  },
  description: '一只生活在神仙渡的小猪.',
  social: [
    {
      name: '导航',
      link: 'https://gt.1314220.xyz/daohang',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ',
      link: 'https://qm.qq.com/q/W7H6sqtL4k',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/qq1024783094',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '微博',
      link: 'https://m.weibo.cn/u/6457466217?featurecode=profile_qrcode&uid=6457466217&t=userinfo&_T_WM=5d417460f1cd2efd8824ea975584b166',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/498293098?plat_id=1&share_from=space&share_medium=iphone&share_plat=ios&share_session_id=9CAFC515-D696-4C81-8FF7-845F37FAD87D&share_source=WEIXIN&share_tag=s_i&spmid=main.space.0.0&timestamp=1736700903&unique_k=yWk98Gq',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: 'https://x.com/fuckmsk?s=21',
      icon: 'i-ri-twitter-x-fill',
      color: 'black',
    },
    {
      name: 'Telegram Channel',
      link: 'https://t.me/Superclx',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
    {
      name: 'E-Mail',
      link: 'mailto:me@o_0.clx@icloud.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: '微信',
      link: 'wx.jpg',
      icon: 'i-ri-wechat-2-line',
      color: 'green',
    },
  ],

  search: {
    enable: true,
    // type: 'algolia',
    type: 'fuse',
  },
  fuse: {
    options: {
      keys: ['title', 'tags', 'categories', 'excerpt', 'content'],
      ignoreLocation: true,
    },
  },

  comment: {
    enable: false,
  },

  mediumZoom: { enable: true },
  vanillaLazyload: { enable: true },

  statistics: {
    enable: true,
  },

  sponsor: {
    enable: true,
    methods: [
      {
        name: '支付宝',
        url: 'zfbsk.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: '微信支付',
        url: 'wxsk.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },

  encrypt: {
    enable: true,
  },

  redirects: {
    useVueRouter: true,
    rules: [
      {
        from: '/foo',
        to: '/about',
      },
    ],
  },

})
