(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{614:function(t,a,r){"use strict";r.r(a);var e=r(0),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("br"),a("ArticleTopAd")],1),t._v(" "),a("h2",{attrs:{id:"_1-前言小叙。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言小叙。"}},[t._v("#")]),t._v(" 1，前言小叙。")]),t._v(" "),a("p",[t._v("当我还没有深入了解 VMware 虚拟化的时候，就了解到他下边事实上有不少的子产品，如果没有从中走一遍，还真的很容易绕晕在里边，毕竟有些东西会的人觉得这个太简单，没有说的必要，而不会的人也就终究不会着，百度一下，竟不乏关于这方面的问题，看到一张图，感觉还不错，借鉴过来（事实上这是 VCSA 安装完成之后首页展示的一张图）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/237689b7797076fc.jpg",alt:"image"}})]),t._v(" "),a("blockquote",[a("p",[t._v("ESXI 就是单台服务器部署的工具，当类似这样的单台服务器达到一定数量，再通过 UI 一台一台登陆来管理就有点不太现实了，因此 VCSA 就应运而生，它可以作为一台虚拟机部署在某个 ESXI 当中，并把网络中的所有 ESXI 添加进来进行集中管理，组成虚拟化集群，同理，当这样的 VCSA 多了以后，为了管理方便，Vsphere 就产生了，这些都是有道理的，而且用了之后绝对好用的。")])]),t._v(" "),a("p",[t._v("也正如上图中所展示的，最底层由多个主机（ESXI）或者虚拟机组成虚拟机群，通过 VCSA 来进行管理，而 VCSA 又是通过 Vsphere 来管理的。")]),t._v(" "),a("p",[t._v("今天就来先从最小单位的部署起，ESXi-6.5 的安装，6.5 较之之前的都有非常大的改进，不仅在各个功能上大有丰富，还加入了 web UI 的管理方式，极大的方便了日常的使用管理 ，虚拟化优选。")]),t._v(" "),a("p",[t._v("由于公司服务器已经在使用当中，因此我这里的试验就在本地的 VMware workstation 里边来进行了。")]),t._v(" "),a("p",[t._v("前边的准备工作，诸如 "),a("code",[t._v("电脑开启虚拟化")]),t._v(" ， "),a("code",[t._v("镜像")]),t._v(" （下载链接放在文末）的准备，初始步骤准备工作就不细说了，直奔安装的过程。")]),t._v(" "),a("p",[t._v("添加一台虚拟机，选中准备好的虚拟软件， "),a("code",[t._v("VMware-VMvisor-Installer-201704001-5310538.x86_64.iso")]),t._v(" ，分配 "),a("code",[t._v("4个G的内存")]),t._v(" ，开启虚拟化，就可以开机安装了。")]),t._v(" "),a("h2",{attrs:{id:"_2-打开安装界面之后首先进入这里-直接选择第一项默认就行。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-打开安装界面之后首先进入这里-直接选择第一项默认就行。"}},[t._v("#")]),t._v(" 2，打开安装界面之后首先进入这里，直接选择第一项默认就行。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/32867542e629a93c.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_3-初始化安装环境。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-初始化安装环境。"}},[t._v("#")]),t._v(" 3，初始化安装环境。")]),t._v(" "),a("p",[t._v("静静等待，一般情况不会有问题，如果报出什么异常，请根据报错进行解决。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ce00931e5356a43b.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_4-对安装主机环境进行加载。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-对安装主机环境进行加载。"}},[t._v("#")]),t._v(" 4，对安装主机环境进行加载。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2d4c1b6d7e854cde.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_5-继续加载初始化。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-继续加载初始化。"}},[t._v("#")]),t._v(" 5，继续加载初始化。")]),t._v(" "),a("p",[t._v("从这里可以看到服务器的一些信息。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/23e26fc9f2904aac.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_6-正式进入到安装界面-看到欢迎界面-。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-正式进入到安装界面-看到欢迎界面-。"}},[t._v("#")]),t._v(" 6，正式进入到安装界面，看到欢迎界面 。")]),t._v(" "),a("p",[t._v("直接 Enter 进入下一步。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/55e932a6f1c142e2.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_7-仍旧是一些信息的介绍。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-仍旧是一些信息的介绍。"}},[t._v("#")]),t._v(" 7，仍旧是一些信息的介绍。")]),t._v(" "),a("p",[t._v("按 F11 同意并进入下一步。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/bebd2ff167818ad6.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_8-开始进入安装界面。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-开始进入安装界面。"}},[t._v("#")]),t._v(" 8，开始进入安装界面。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/fe1d556476c8335a.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_9-按enter继续往下走。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-按enter继续往下走。"}},[t._v("#")]),t._v(" 9，按 Enter 继续往下走。")]),t._v(" "),a("p",[t._v("此刻读取到磁盘信息。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/03dbc62431e0cbd3.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_10-选择默认安装-enter继续。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-选择默认安装-enter继续。"}},[t._v("#")]),t._v(" 10，选择默认安装，Enter 继续。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/b9ceafdf2859d2b4.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_11-设置登录的密码。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-设置登录的密码。"}},[t._v("#")]),t._v(" 11，设置登录的密码。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/09f20aa42b409bae.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_12-按f11正式进入安装。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-按f11正式进入安装。"}},[t._v("#")]),t._v(" 12，按 F11 正式进入安装。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/0345fc843e77b358.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_13-静静等待。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-静静等待。"}},[t._v("#")]),t._v(" 13，静静等待。")]),t._v(" "),a("p",[t._v("安装速度根据服务器性能判断，一般整个过程二十分钟到半个小时。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/19be28b15966df86.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_14-安装完毕。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-安装完毕。"}},[t._v("#")]),t._v(" 14，安装完毕。")]),t._v(" "),a("p",[t._v("Enter 重启。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/cd4b4ea80e20cc5e.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_15-重启完成之后会进入到这个界面。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-重启完成之后会进入到这个界面。"}},[t._v("#")]),t._v(" 15，重启完成之后会进入到这个界面。")]),t._v(" "),a("p",[t._v("如果内网有 DHCP，那么会自动分配一个 IP 可供访问。也可以通过 F2 进行网络配置。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/cb204eda17251d6a.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_16-访问web-ui。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-访问web-ui。"}},[t._v("#")]),t._v(" 16，访问 web ui。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/bb8c58309636642e.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("17，下载链接。")]),t._v(" "),a("p",[t._v("下载的方式当然非常多了。")]),t._v(" "),a("p",[t._v("可以直接点击进入官网下载：https://www.vmware.com/cn.html")]),t._v(" "),a("p",[t._v("或者通过下边我下好的百度云盘进行下载。")]),t._v(" "),a("ul",[a("li",[t._v("链接：https://pan.baidu.com/share/init?surl=sMCO0QF3kRDvP2k5d1mpuw")]),t._v(" "),a("li",[t._v("文件提取码：wcdk")])]),t._v(" "),a("p",[a("br"),a("ArticleTopAd")],1)])}),[],!1,null,null,null);a.default=s.exports}}]);