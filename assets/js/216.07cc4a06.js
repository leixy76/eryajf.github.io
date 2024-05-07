(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{562:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("br"),a("ArticleTopAd")],1),s._v(" "),a("h2",{attrs:{id:"_1-环境和准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境和准备工作"}},[s._v("#")]),s._v(" 1，环境和准备工作")]),s._v(" "),a("ul",[a("li",[s._v("操作系统：CentOS6 或者 7 测试都是没有问题的")]),s._v(" "),a("li",[s._v("IP 地址：192.168.106.129")])]),s._v(" "),a("h2",{attrs:{id:"_2-建立-git-用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-建立-git-用户"}},[s._v("#")]),s._v(" 2，建立 git 用户")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_3-关闭防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-关闭防火墙"}},[s._v("#")]),s._v(" 3，关闭防火墙")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl stop firewalld\nsystemctl disabled firewalld\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_4-安装依赖库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装依赖库"}},[s._v("#")]),s._v(" 4，安装依赖库")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install curl openssh-server postfix cronie")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# service postfix start")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chkconfig postfix on")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_5-安装-gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-安装-gitlab"}},[s._v("#")]),s._v(" 5，安装 Gitlab")]),s._v(" "),a("p",[a("code",[s._v("历史版本下载：")]),s._v(" "),a("a",{attrs:{href:"https://packages.gitlab.com/gitlab/gitlab-ce?filter=rpms",target:"_blank",rel:"noopener noreferrer"}},[s._v("点我跳转到 gitlab 历史版本页面。"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gitlab-ce\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("整个包有 300 多 MB，如果使用 yum 无法下载，可以直接下载 RPM 包。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" https://packages.gitlab.com/gitlab/gitlab-ce/el/6/x86_64/gitlab-ce-7.13.3-ce.1.el6.x86_64.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("若还是很慢，博主已经上传百度云盘，可以点击下边链接进行下载。")]),s._v(" "),a("ul",[a("li",[s._v("链接：https://pan.baidu.com/share/init?surl=fRPfoGXHByzRacqH8ZFD2g")]),s._v(" "),a("li",[s._v("提取码：1hg4")])]),s._v(" "),a("h2",{attrs:{id:"_6-配置-gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-配置-gitlab"}},[s._v("#")]),s._v(" 6，配置 GitLab")]),s._v(" "),a("p",[s._v("直接启动 GitLab 并不能正常工作，需要进行配置，其所有的配置都在配置文件 /etc/gitlab/gitlab.rb 中。此文件太长，太多的注释，后期研究可以查看此文档，在此从简配置。")]),s._v(" "),a("ul",[a("li",[s._v("备份")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv /etc/gitlab/gitlab.rb{,.bck}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("配置")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  /etc/gitlab/gitlab.rb "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nexternal_url 'http://192.168.106.129'\ngitlab_rails['smtp_enable'] = true\ngitlab_rails['smtp_address'] = \"smtp.163.com\"\ngitlab_rails['smtp_port'] = 25\ngitlab_rails['smtp_user_name'] = 'Linuxlql@163.com'\ngitlab_rails['smtp_password'] = \"yourpasswd\"\ngitlab_rails['smtp_domain'] = \"smtp.163.com\"\ngitlab_rails['smtp_authentication'] = :plain\n#gitlab_rails['smtp_authentication'] = \"login\"\n#gitlab_rails['smtp_enable_starttls_auto'] = true\ngitlab_rails['smtp_enable_starttls_auto'] = false\ngitlab_rails['gitlab_email_from'] = \"Linuxlql@163.com\"\nuser[\"git_user_email\"] = \"Linuxlql@163.com\"\ngit_data_dir \"/home/git\"\nEOF")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("配置之后，使用如下命令加载配置。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitlab-ctl reconfigure")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_7-测试及注册用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-测试及注册用户"}},[s._v("#")]),s._v(" 7，测试及注册用户")]),s._v(" "),a("p",[s._v("开启浏览器输入 http://192.168.106.129，应该就可以看到主界面了。")]),s._v(" "),a("p",[s._v("输入账号：root 密码：5iveL!fe 登录！")]),s._v(" "),a("p",[a("br"),a("ArticleTopAd")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);