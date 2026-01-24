import { defineThemeConfig } from 'valaxy-theme-yun'

export default defineThemeConfig({
  // type: 'strato',
  type: 'nimbo',
  // colors: {
  //   primary: 'red',
  // },
  // bg_image: {},

  banner: {
    enable: true,
    title: '神仙渡|小猪',
  },
 // 公告
  notice: {
    enable: true,
    content: '文章列表',
  },

  nav: [
    {
      text: '导航',
      link: '/projects',
      items: [
        { text: '项目列表', link: '/projects' },
        { text: 'AI导航', link: '/links' },
        { text: '网址导航', link: '/girls' },

      ],
    },
  ],

  pages: [
    {
      name: '项目列表',
      url: '/projects',
      icon: 'material-symbols--list-alt-outline',
      color: '#1c7a00',
    },
    {
      name: 'AI导航',
      url: '/links/',
      icon: 'basil--navigation-outline',
      color: '#049aa2',
    },
    {
      name: '网址导航',
      url: '/girls/',
      icon: 'basil--navigation-outline2',
      color: '#f96829',
    },

  ],

  footer: {
    since: 2025,
    beian: {
      enable: true,
      icp: '湘ICP备1314520号',
    },
    icon: {
      animated: false,
    },
  },
})
