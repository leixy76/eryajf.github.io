(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{742:function(s,e,t){"use strict";t.r(e);var n=t(0),a=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[e("br"),e("ArticleTopAd")],1),s._v(" "),e("p",[s._v("在三个节点都安装 etcd，下面的操作需要在三个节点都执行一遍。")]),s._v(" "),e("h2",{attrs:{id:"_1-下载-etcd-安装包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载-etcd-安装包"}},[s._v("#")]),s._v(" 1，下载 etcd 安装包")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wget https://github.com/coreos/etcd/releases/download/v3.2.12/etcd-v3.2.12-linux-amd64.tar.gz")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -xvf etcd-v3.2.12-linux-amd64.tar.gz")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo mv etcd-v3.2.12-linux-amd64/etcd* /usr/local/bin")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"_2-创建工作目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建工作目录"}},[s._v("#")]),s._v(" 2，创建工作目录")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /var/lib/etcd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_3-创建-systemd-unit-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建-systemd-unit-文件"}},[s._v("#")]),s._v(" 3，创建 systemd unit 文件")]),s._v(" "),e("p",[s._v("这个地方为了避免跳坑里边，我直接三台主机的配置都贴出来了。")]),s._v(" "),e("h3",{attrs:{id:"_1-master"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-master"}},[s._v("#")]),s._v(" 1，master")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" etcd.service "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n[Unit]\nDescription=Etcd Server\nAfter=network.target\nAfter=network-online.target\nWants=network-online.target\nDocumentation=https://github.com/coreos\n\n[Service]\nType=notify\nWorkingDirectory=/var/lib/etcd/\nExecStart=/usr/local/bin/etcd "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --name master "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("         //修改此处\n  --cert-file=/etc/kubernetes/ssl/kubernetes.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --key-file=/etc/kubernetes/ssl/kubernetes-key.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --peer-cert-file=/etc/kubernetes/ssl/kubernetes.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --peer-key-file=/etc/kubernetes/ssl/kubernetes-key.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --trusted-ca-file=/etc/kubernetes/ssl/ca.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --peer-trusted-ca-file=/etc/kubernetes/ssl/ca.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --initial-advertise-peer-urls https://192.168.106.3:2380 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("     //此处\n  --listen-peer-urls https://192.168.106.3:2380 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("        //此处\n  --listen-client-urls https://192.168.106.3:2379,http://127.0.0.1:2379 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("        //此处\n  --advertise-client-urls https://192.168.106.3:2379 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("   //此处\n  --initial-cluster-token etcd-cluster-0 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --initial-cluster master=https://192.168.106.3:2380,node01=https://192.168.106.4:2380,node02=https://192.168.106.5:2380 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("        //此处 不要忽略name\n  --initial-cluster-state new "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --data-dir=/var/lib/etcd\nRestart=on-failure\nRestartSec=5\nLimitNOFILE=65536\n\n[Install]\nWantedBy=multi-user.target\nEOF")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br")])]),e("ul",[e("li",[s._v("注意 1：如上的 IP 地址 192.168.106.XXX 请逐一替换成你自己服务器的 IP。")]),s._v(" "),e("li",[s._v("注意 2：不要忽略 name, 注意中间段的配置是一行，因此每行后边都要有一个反斜杠 \\ 作为换行。")])]),s._v(" "),e("h3",{attrs:{id:"_2-node01"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-node01"}},[s._v("#")]),s._v(" 2，node01")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" etcd.service "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n[Unit]\nDescription=Etcd Server\nAfter=network.target\nAfter=network-online.target\nWants=network-online.target\nDocumentation=https://github.com/coreos\n\n[Service]\nType=notify\nWorkingDirectory=/var/lib/etcd/\nExecStart=/usr/local/bin/etcd "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --name node01 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --cert-file=/etc/kubernetes/ssl/kubernetes.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --key-file=/etc/kubernetes/ssl/kubernetes-key.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --peer-cert-file=/etc/kubernetes/ssl/kubernetes.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --peer-key-file=/etc/kubernetes/ssl/kubernetes-key.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --trusted-ca-file=/etc/kubernetes/ssl/ca.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --peer-trusted-ca-file=/etc/kubernetes/ssl/ca.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --initial-advertise-peer-urls https://192.168.106.4:2380 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --listen-peer-urls https://192.168.106.4:2380 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --listen-client-urls https://192.168.106.4:2379,http://127.0.0.1:2379 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --advertise-client-urls https://192.168.106.4:2379 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --initial-cluster-token etcd-cluster-0 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --initial-cluster master=https://192.168.106.3:2380,node01=https://192.168.106.4:2380,node02=https://192.168.106.5:2380 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --initial-cluster-state new "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --data-dir=/var/lib/etcd\nRestart=on-failure\nRestartSec=5\nLimitNOFILE=65536\n\n[Install]\nWantedBy=multi-user.target\nEOF")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br")])]),e("h3",{attrs:{id:"_3-node02"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-node02"}},[s._v("#")]),s._v(" 3，node02")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" etcd.service "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n[Unit]\nDescription=Etcd Server\nAfter=network.target\nAfter=network-online.target\nWants=network-online.target\nDocumentation=https://github.com/coreos\n\n[Service]\nType=notify\nWorkingDirectory=/var/lib/etcd/\nExecStart=/usr/local/bin/etcd "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --name node02 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --cert-file=/etc/kubernetes/ssl/kubernetes.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --key-file=/etc/kubernetes/ssl/kubernetes-key.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --peer-cert-file=/etc/kubernetes/ssl/kubernetes.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --peer-key-file=/etc/kubernetes/ssl/kubernetes-key.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --trusted-ca-file=/etc/kubernetes/ssl/ca.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --peer-trusted-ca-file=/etc/kubernetes/ssl/ca.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --initial-advertise-peer-urls https://192.168.106.5:2380 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --listen-peer-urls https://192.168.106.5:2380 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --listen-client-urls https://192.168.106.5:2379,http://127.0.0.1:2379 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --advertise-client-urls https://192.168.106.5:2379 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --initial-cluster-token etcd-cluster-0 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --initial-cluster master=https://192.168.106.3:2380,node01=https://192.168.106.4:2380,node02=https://192.168.106.5:2380 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --initial-cluster-state new "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --data-dir=/var/lib/etcd\nRestart=on-failure\nRestartSec=5\nLimitNOFILE=65536\n\n[Install]\nWantedBy=multi-user.target\nEOF")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br")])]),e("h3",{attrs:{id:"_4-好好看看注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-好好看看注释"}},[s._v("#")]),s._v(" 4，好好看看注释")]),s._v(" "),e("p",[s._v("下面给出常用配置的参数和它们的解释，方便理解：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("--name")]),s._v(" ：方便理解的节点名称，默认为 default，在集群中应该保持唯一，可以使用 hostname")]),s._v(" "),e("li",[e("code",[s._v("--data-dir")]),s._v(" ：服务运行数据保存的路径，默认为 ${name}.etcd")]),s._v(" "),e("li",[e("code",[s._v("--snapshot-count")]),s._v(" ：指定有多少事务（transaction）被提交时，触发截取快照保存到磁盘")]),s._v(" "),e("li",[e("code",[s._v("--heartbeat-interval")]),s._v(" ：leader 多久发送一次心跳到 followers。默认值是 100ms")]),s._v(" "),e("li",[e("code",[s._v("--eletion-timeout")]),s._v(" ：重新投票的超时时间，如果 follow 在该时间间隔没有收到心跳包，会触发重新投票，默认为 1000 ms")]),s._v(" "),e("li",[e("code",[s._v("--listen-peer-urls")]),s._v(" ：和同伴通信的地址，比如 "),e("a",{attrs:{href:"http://ip:2380%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%9C%89%E5%A4%9A%E4%B8%AA%EF%BC%8C%E4%BD%BF%E7%94%A8%E9%80%97%E5%8F%B7%E5%88%86%E9%9A%94%E3%80%82%E9%9C%80%E8%A6%81%E6%89%80%E6%9C%89%E8%8A%82%E7%82%B9%E9%83%BD%E8%83%BD%E5%A4%9F%E8%AE%BF%E9%97%AE%EF%BC%8C%E6%89%80%E4%BB%A5%E4%B8%8D%E8%A6%81%E4%BD%BF%E7%94%A8/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://ip:2380，如果有多个，使用逗号分隔。需要所有节点都能够访问，所以不要使用"),e("OutboundLink")],1),s._v(" localhost！")]),s._v(" "),e("li",[e("code",[s._v("--listen-client-urls")]),s._v(" ：对外提供服务的地址：比如 "),e("a",{attrs:{href:"http://ip:2379%2Chttp//127.0.0.1:2379%EF%BC%8C%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BC%9A%E8%BF%9E%E6%8E%A5%E5%88%B0%E8%BF%99%E9%87%8C%E5%92%8C",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://ip:2379,http://127.0.0.1:2379，客户端会连接到这里和"),e("OutboundLink")],1),s._v(" etcd 交互")]),s._v(" "),e("li",[e("code",[s._v("--advertise-client-urls")]),s._v(" ：对外公告的该节点客户端监听地址，这个值会告诉集群中其他节点")]),s._v(" "),e("li",[e("code",[s._v("--initial-advertise-peer-urls")]),s._v(" ：该节点同伴监听地址，这个值会告诉集群中其他节点")]),s._v(" "),e("li",[e("code",[s._v("--initial-cluster")]),s._v(" ：集群中所有节点的信息，格式为 node1=http://ip1:2380,node2=http://ip2:2380,…。注意：这里的 node1 是节点的 –name 指定的名字；后面的 ip1:2380 是 –initial-advertise-peer-urls 指定的值")]),s._v(" "),e("li",[e("code",[s._v("--initial-cluster-state")]),s._v(" ：新建集群的时候，这个值为 new；假如已经存在的集群，这个值为 existing")]),s._v(" "),e("li",[e("code",[s._v("--initial-cluster-token")]),s._v(" ：创建集群的 token，这个值每个集群保持唯一。这样的话，如果你要重新创建集群，即使配置和之前一样，也会再次生成新的集群和节点 uuid；否则会导致多个集群之间的冲突，造成未知的错误")])]),s._v(" "),e("p",[s._v("所有以 –init 开头的配置都是在 bootstrap 集群的时候才会用到，后续节点的重启会被忽略。")]),s._v(" "),e("p",[s._v("NOTE：所有的参数也可以通过环境变量进行设置，–my-flag 对应环境变量的 ETCD_MY_FLAG；但是命令行指定的参数会覆盖环境变量对应的值。")]),s._v(" "),e("p",[s._v("指定 etcd 的工作目录为 /var/lib/etcd，数据目录为 /var/lib/etcd，需在启动服务前创建这个目录，否则启动服务的时候会报错 “Failed at step CHDIR spawning /usr/bin/etcd: No such file or directory”；")]),s._v(" "),e("p",[s._v("为了保证通信安全，需要指定 etcd 的公私钥 (cert-file 和 key-file)、Peers 通信的公私钥和 CA 证书 (peer-cert-file、peer-key-file、peer-trusted-ca-file)、客户端的 CA 证书（trusted-ca-file）；")]),s._v(" "),e("p",[s._v("创建 kubernetes.pem 证书时使用的 kubernetes-csr.json 文件的 hosts 字段包含所有 etcd 节点的 IP，否则证书校验会出错；")]),s._v(" "),e("p",[s._v("–initial-cluster-state 值为 new 时，–name 的参数值必须位于 –initial-cluster 列表中；")]),s._v(" "),e("h2",{attrs:{id:"_4-启动-etcd-服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动-etcd-服务"}},[s._v("#")]),s._v(" 4，启动 etcd 服务")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" etcd.service /etc/systemd/system/\n\nsystemctl daemon-reload\n\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" etcd\n\nsystemctl start etcd\n\nsystemctl status etcd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("最先启动的 etcd 进程会卡住一段时间，等待其它节点上的 etcd 进程加入集群，为正常现象。")]),s._v(" "),e("p",[s._v("如果在执行开机自启的时候报错 "),e("code",[s._v("Bad message")]),s._v(" ，那么一般就是上边的配置信息有问题，这个时候重新检查配置信息，然后重新加载重新启动即可。")]),s._v(" "),e("p",[s._v("如上操作请确认一定要在三台机器上面都要执行（单节点 ETCD 除外）。")]),s._v(" "),e("h2",{attrs:{id:"_5-验证-etcd-服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-验证-etcd-服务"}},[s._v("#")]),s._v(" 5，验证 etcd 服务")]),s._v(" "),e("p",[s._v("在任何一个 etcd 节点执行如下命令（如果不添加密钥参数是会报错的）：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$etcdctl")]),s._v(" cluster-health\nfailed to check the health of member 4838d3e6217ff2a1 on https://192.168.106.4:2379: Get https://192.168.106.4:2379/health: x509: certificate signed by unknown authority\nmember 4838d3e6217ff2a1 is unreachable: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("https://192.168.106.4:2379"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" are all unreachable\nfailed to check the health of member d4635870b1fea87f on https://192.168.106.5:2379: Get https://192.168.106.5:2379/health: x509: certificate signed by unknown authority\nmember d4635870b1fea87f is unreachable: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("https://192.168.106.5:2379"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" are all unreachable\nfailed to check the health of member fa16f2892f13a4d6 on https://192.168.106.3:2379: Get https://192.168.106.3:2379/health: x509: certificate signed by unknown authority\nmember fa16f2892f13a4d6 is unreachable: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("https://192.168.106.3:2379"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" are all unreachable\ncluster is unhealthy\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("使用密钥方式检查集群状态：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master member"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$etcdctl")]),s._v(" --ca-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/ca.pem --cert-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/kubernetes.pem --key-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/kubernetes-key.pem cluster-health\nmember 4838d3e6217ff2a1 is healthy: got healthy result from https://192.168.106.4:2379\nmember fa16f2892f13a4d6 is healthy: got healthy result from https://192.168.106.3:2379\ncluster is healthy\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("注意，这个地方直接在 master 节点验证，一般没什么问题，检测正常，但是也可以去 node 节点检测一下，一检测，发现还是报错：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node01 k8s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$etcdctl")]),s._v(" --ca-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/ca.pem --cert-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/kubernetes.pem --key-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/kubernetes-key.pem cluster-health\nfailed to check the health of member 4838d3e6217ff2a1 on https://192.168.106.4:2379: Get https://192.168.106.4:2379/health: x509: certificate has expired or is not yet valid\nmember 4838d3e6217ff2a1 is unreachable: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("https://192.168.106.4:2379"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" are all unreachable\nfailed to check the health of member d4635870b1fea87f on https://192.168.106.5:2379: Get https://192.168.106.5:2379/health: x509: certificate has expired or is not yet valid\nmember d4635870b1fea87f is unreachable: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("https://192.168.106.5:2379"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" are all unreachable\nfailed to check the health of member fa16f2892f13a4d6 on https://192.168.106.3:2379: Get https://192.168.106.3:2379/health: x509: certificate has expired or is not yet valid\nmember fa16f2892f13a4d6 is unreachable: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("https://192.168.106.3:2379"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" are all unreachable\ncluster is unhealthy\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("ul",[e("li",[e("code",[s._v("问题原因")]),s._v(" ：可能是主机时间不同步的原因。")]),s._v(" "),e("li",[e("code",[s._v("解决办法")]),s._v(" ：令其同步，分别在三台主机上执行如下命令。")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ntp "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ntpdate "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" cn.pool.ntp.org\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_6-部署-flannel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-部署-flannel"}},[s._v("#")]),s._v(" 6，部署 Flannel")]),s._v(" "),e("p",[s._v("在三个节点都安装 Flannel，下面的操作需要在三个节点都执行一遍。")]),s._v(" "),e("p",[s._v("下载安装 Flannel：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wget https://github.com/coreos/flannel/releases/download/v0.9.1/flannel-v0.9.1-linux-amd64.tar.gz")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir flannel")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -xzvf flannel-v0.9.1-linux-amd64.tar.gz -C flannel")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo cp flannel/{flanneld,mk-docker-opts.sh} /usr/local/bin")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("向 etcd 写入网段信息，这两个命令只需要任意一个节点上执行一次就可以。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /kubernetes/network/config\n\netcdctl "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--endpoints")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://192.168.106.3:2379,https://192.168.106.4:2379,https://192.168.106.5:2379 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--ca-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/ca.pem "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--cert-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/kubernetes.pem "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--key-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/ssl/kubernetes-key.pem "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" /kubernetes/network/config "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"Network":"172.30.0.0/16","SubnetLen":24,"Backend":{"Type":"vxlan"}}\'')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("注意如上更换成自己的 IP。")]),s._v(" "),e("p",[s._v("创建 systemd unit 文件 在三台机器上面都需要执行：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flanneld.service "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n[Unit]\nDescription=Flanneld overlay address etcd agent\nAfter=network.target\nAfter=network-online.target\nWants=network-online.target\nAfter=etcd.service\nBefore=docker.service\n\n[Service]\nType=notify\nExecStart=/usr/local/bin/flanneld "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  -etcd-cafile=/etc/kubernetes/ssl/ca.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  -etcd-certfile=/etc/kubernetes/ssl/kubernetes.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  -etcd-keyfile=/etc/kubernetes/ssl/kubernetes-key.pem "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  -etcd-endpoints=https://192.168.106.3:2379,https://192.168.106.4:2379,https://192.168.106.5:2379 "),e("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  -etcd-prefix=/kubernetes/network\nExecStartPost=/usr/local/bin/mk-docker-opts.sh -k DOCKER_NETWORK_OPTIONS -d /run/flannel/docker\nRestart=on-failure\n\n[Install]\nWantedBy=multi-user.target\nRequiredBy=docker.service\nEOF")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("p",[s._v("mk-docker-opts.sh 脚本将分配给 flanneld 的 Pod 子网网段信息写入到 /run/flannel/docker 文件中，后续 docker 启动时使用这个文件中参数值设置 docker0 网桥；")]),s._v(" "),e("p",[s._v("flanneld 使用系统缺省路由所在的接口和其它节点通信，对于有多个网络接口的机器（如，内网和公网），可以用 -iface=enpxx 选项值指定通信接口。")]),s._v(" "),e("h2",{attrs:{id:"_7-启动-flannel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-启动-flannel"}},[s._v("#")]),s._v(" 7，启动 Flannel")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" flanneld.service /etc/systemd/system/\n\nsystemctl daemon-reload\n\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" flanneld\n\nsystemctl start flanneld\n\nsystemctl status flanneld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h2",{attrs:{id:"_8-检查-flannel-服务状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-检查-flannel-服务状态"}},[s._v("#")]),s._v(" 8，检查 flannel 服务状态")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/local/bin/etcdctl  --endpoints=https://192.168.106.3:2379,https://192.168.106.4:2379,https://192.168.106.5:2379  --ca-file=/etc/kubernetes/ssl/ca.pem  --cert-file=/etc/kubernetes/ssl/kubernetes.pem  --key-file=/etc/kubernetes/ssl/kubernetes-key.pem  ls /kubernetes/network/subnets")]),s._v("\n\n/kubernetes/network/subnets/172.30.31.0-24\n/kubernetes/network/subnets/172.30.63.0-24\n/kubernetes/network/subnets/172.30.76.0-24\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("由此可以看出，如上三个节点 pod 的网段！")]),s._v(" "),e("p",[s._v("部署 Flannel 网络，kubernetes 要求集群内各节点能通过 Pod 网段互联互通：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.30")]),s._v(".31.0\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.30")]),s._v(".63.0\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.30")]),s._v(".76.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("br"),e("ArticleTopAd")],1)])}),[],!1,null,null,null);e.default=a.exports}}]);