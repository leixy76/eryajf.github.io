// set your global feed options - override in page frontmatter `feed`
const feed_options = {
  canonical_base: 'https://wiki.eryajf.net',
  count: 5000,
};

const autometa_options = {
  site: {
    name: 'Eryajf',
  },
  canonical_base: 'https://wiki.eryajf.net',
};

// 插件配置
module.exports = [
  // 百度自动推送
  'vuepress-plugin-baidu-autopush',
  // 鼠标点击后散开小星星
  'cursor-effects',
  // 全文搜索插件
  // 'fulltext-search',
  // 全文搜索插件 meilisearch
  [
    'vuepress-plugin-meilisearch',
    {
      hostUrl: 'https://search.eryajf.net',        // 该 URL 应该能在用户的浏览器上被访问，不能为 localhost
      apiKey: "1532eab3daa78f100fe11a10422163b2c650c4407e0f47825c24b99074550273",
      indexUid: 'wiki',
      // placeholder: 'Search as you type...',   // 在搜索栏中显示的占位符
      maxSuggestions: 6,                      // 最多显示几个搜索结果
      cropLength: 30,                         // 每个搜索结果最多显示多少个字符
    },
  ],
  // 阅读顶部进度条
  'reading-progress',

  // 自定义插件
  [
    {
      name: 'custom-plugins',
      globalUIComponents: ["PageInfo", "BlockToggle", "GlobalTip"], // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    }
  ],

  // 动态标题，官网：https://moefyit.github.io/moefy-vuepress/packages/dynamic-title.html
  [
    "dynamic-title",
    {
      showIcon:
        "https://wiki.eryajf.net/img/favicon.ico",
      showText: "ヾ(≧▽≦*)o欢迎回来！",
      hideIcon:
        "https://wiki.eryajf.net/img/favicon.ico",
      hideText: "ಥ_ಥ不要走呀！",
      recoverTime: 2000, //  持续时间
    },
  ],

  // rss 配置
  ['feed', feed_options],

  // meta优化 https://github.com/webmasterish/vuepress-plugin-autometa
  ['autometa', autometa_options],

  // 代码块复制按钮
  [
    'one-click-copy',
    {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功 🎉', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],

  // 代码块儿演示
  [
    'demo-block',
    {
      // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],

  // 放大图片
  [
    'vuepress-plugin-zooming',
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],

  // 百度统计
  [
    'vuepress-plugin-baidu-tongji',
    {
      hm: 'f8fd5c4e21ca384b4785396a87bcc468',
    },
  ],
  // Google 统计
  [
    'google-analytics-4',
    {
      gtag: 'G-PNSZ4B1K60'
    }
  ],

  // 提供mermaid图表支持
  'vuepress-plugin-mermaidjs',
  [
    'sitemap', {
      hostname: 'https://wiki.eryajf.net',
      exclude: ["/404.html"],
    },
  ],


  [
    'vuepress-plugin-vdoing-comment', // 评论
    {
      choosen: 'artalk',
      options: {
        server: 'https://comment.eryajf.net',
        site: '二丫讲梵',
        disableEmotion: false,
        disablePreview: false,
        disablePicture: true
      }
    }
  ],

  // 站点地图
  // 'robots', {
  //   host: "https://wiki.eryajf.net",
  //   disallowAll: false,
  //   allowAll: true,
  //   sitemap: "/sitemap.xml",
  // },

  // "上次更新"时间格式
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
]
