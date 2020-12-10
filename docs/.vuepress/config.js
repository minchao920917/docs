module.exports = {
  head: [["link", { rel: "icon", href: "/logo.ico" }]],
  // 设置网站标题
  title: "mch-ui",
  // 设置输出目录
  dest: "./dist",
  // 设置站点根路径，如果你在访问的地址是 'www.xxxx.com/wxDocs' 那么就设置成 '/wxDocs/'
  // repo: ''

  themeConfig: {
    // 添加导航栏
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "组件", link: "/components/" },
      { text: "博客", link: "http://minchao.me" },
      {
        text: "github",
        // 这里是下拉列表展现形式。
        items: [
          { text: "mch-ui", link: "https://github.com/minchao920917/mch-ui" },
          { text: "docs", link: "https://github.com/minchao920917/docs" },
        ],
      },
    ],
    // 为以下路由添加侧边栏
    // 侧边栏
    sidebar: ["/guide/","/components/"],
    sidebarDepth: 2, // 默认 1 提取到 h2，0 为禁用，2 为 h2，h3
    displayAllHeaders: false, // 默认值：false 侧边栏只会显示由当前活动页面的标题组成的链接
    activeHeaderLinks: true, // 默认值：true 滚动时通过 hash 高亮侧边栏标题
  },
};
