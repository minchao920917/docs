module.exports = {
    head: [['link', { rel: 'icon', href: '/logo.ico' }]],
    // 设置网站标题
    title: 'mch-ui', 
    // 设置输出目录
    dest: './dist', 
    // 设置站点根路径，如果你在访问的地址是 'www.xxxx.com/wxDocs' 那么就设置成 '/wxDocs/'  
    // repo: '' 

    themeConfig: {
        // 添加导航栏
        nav: [

          { text: '首页', link: '/' },
          { text: '组件', link: '/components/' },
          { text: '博客', link: 'http://minchao.me' },
          {
            text: 'github',
            // 这里是下拉列表展现形式。
            items: [
              { text: 'mch-ui', link: 'https://github.com/minchao920917/mch-ui' },
              { text: 'docs', link: 'https://github.com/minchao920917/docs' }
            ]
          }
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/one/': [
             
            ],
            '/two/': [
              
            ]
          },
          sidebarDepth: '0',
      },
      
  }
  