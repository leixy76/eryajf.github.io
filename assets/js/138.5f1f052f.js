(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{506:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("br"),e("ArticleTopAd")],1),t._v(" "),e("p",[t._v("新配置好的 zabbix，一般会针对服务器有一个报警。不理会也没有什么，但是有一个黄黄的报警在那儿看着总是让人不爽，因此来解决一下。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/bffa496f6c7c2b93.jpg",alt:"image"}})]),t._v(" "),e("p",[t._v("报的问题说的是内存过大，然后轮训忙。")]),t._v(" "),e("p",[t._v("那么解决办法无非就是调大内存，或者关闭轮训。")]),t._v(" "),e("p",[t._v("内存的设置在服务器端配置文件进行更改：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("vim /etc/zabbix/zabbix_server.conf\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/70242d23ee0c233a.jpg",alt:"image"}})]),t._v(" "),e("p",[t._v("原来默认数据是 1。现在更改成 5 就可以了，然后重启一下。\n这个数值的大小，一般根据内存的大小来设置。")]),t._v(" "),e("p",[t._v("然后重启一些服务。")]),t._v(" "),e("p",[t._v("或者就是 "),e("code",[t._v("关闭掉自动发现")]),t._v(" ，等会儿就好了。")]),t._v(" "),e("p",[e("br"),e("ArticleTopAd")],1)])}),[],!1,null,null,null);e.default=r.exports}}]);