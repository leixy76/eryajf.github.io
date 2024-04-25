(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{574:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("br"),s("ArticleTopAd")],1),t._v(" "),s("p",[t._v("当我们负责的项目有越来越多的人加入进行协作之后，将贡献者添加到 README 中是一个很好的激励作用，很多大的项目也都是这么做的，本文就来讲一下，如何借助 Github Actions 自动将项目贡献者列表添加到 README 中。")]),t._v(" "),s("p",[t._v("所用 Actions： "),s("a",{attrs:{href:"https://github.com/akhilmhdh/contributors-readme-action",target:"_blank",rel:"noopener noreferrer"}},[t._v("contributors-readme-action"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，这里说一两个需要注意的地方。")]),t._v(" "),s("p",[t._v("首先需要在将要生成目录的文件内，指定目录生成位置，通常是  "),s("code",[t._v("README.md")]),t._v(" ，在要生成的地方添加如下内容：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("## 贡献者\n\n\x3c!-- readme: collaborators,contributors -start --\x3e\n\x3c!-- readme: collaborators,contributors -end --\x3e\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("然后添加 Actions 配置文件，e.g.  "),s("code",[t._v(".github/workflows/reademe-contributors.yml")]),t._v(" ：")]),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Generate a list of contributors\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contrib-readme-en-job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" A job to automate contrib in readme\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Contribute List\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" akhilmhdh/contributors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("readme"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@v2.3.4\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GITHUB_TOKEN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.CONTRIBUTORS_TOKEN "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("p",[t._v("配置文件中用到了 GITHUB_TOKEN，我的这篇文章有详细介绍如何生成以及配置，可直接参考： "),s("a",{attrs:{href:"https://wiki.eryajf.net/pages/47a507/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.eryajf.net/pages/47a507/"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("接下来就是当 main 分支 push 代码之后，就会自动生成贡献者列表到 readme 中了。我这边测试项目生成效果如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/9dc0fcdcc6ebd0c2.jpg",alt:""}})]),t._v(" "),s("p",[t._v("当然，如果觉得如上配置比较麻烦，可以直接采用如下方式，会更加简单一些，直接添加如下内容到 README 就会自动生成：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('## 贡献者\n\n<a href="https://github.com/eryajf/learn-github/graphs/contributors">\n  <img src="https://contrib.rocks/image?repo=eryajf/learn-github" />\n</a>\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("实际展示效果如下：")]),t._v(" "),s("a",{attrs:{href:"https://github.com/eryajf/learn-github/graphs/contributors"}},[s("img",{attrs:{src:"https://contrib.rocks/image?repo=eryajf/learn-github"}})]),t._v(" "),s("p",[t._v("点击之后会自动跳转到贡献者列表详情中。")]),t._v(" "),s("p",[t._v("另外：")]),t._v(" "),s("p",[t._v("我的博客即将同步至腾讯云 + 社区，邀请大家一同入驻："),s("a",{attrs:{href:"https://cloud.tencent.com/developer/support-plan?invite_code=3trzr4tra4aoc",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cloud.tencent.com/developer/support-plan?invite_code=3trzr4tra4aoc"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("br"),s("ArticleTopAd")],1)])}),[],!1,null,null,null);s.default=e.exports}}]);