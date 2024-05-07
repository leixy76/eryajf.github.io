(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{771:function(e,r,t){"use strict";t.r(r);var a=t(0),s=Object(a.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[r("br"),r("ArticleTopAd")],1),e._v(" "),r("h2",{attrs:{id:"_1-master节点。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-master节点。"}},[e._v("#")]),e._v(" 1，master 节点。")]),e._v(" "),r("p",[e._v("Master 是 Kubernetes Cluster 的大脑，运行着的 Daemon 服务有一下几个：")]),e._v(" "),r("ul",[r("li",[e._v("kube-apiserver")]),e._v(" "),r("li",[e._v("kube-scheduler")]),e._v(" "),r("li",[e._v("kube-controller-manager")]),e._v(" "),r("li",[e._v("etcd")]),e._v(" "),r("li",[e._v("Pod 网络（例如 flannel）")])]),e._v(" "),r("p",[e._v("如图所示：")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/fc3d8f6c65f46db9.jpg",alt:"image"}})]),e._v(" "),r("p",[e._v("接下来就一个一个介绍如上组件的功能。")]),e._v(" "),r("h3",{attrs:{id:"_1-api-server-kube-apiserver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-api-server-kube-apiserver"}},[e._v("#")]),e._v(" 1，API Server（kube-apiserver）")]),e._v(" "),r("p",[e._v("API Server 提供 HTTP/HTTPS RESTful API，即 Kubernetes API。API Server 是 Kubernetes Cluster 的前端接口，各种客户端工具（CLI 或 UI）以及 Kubernetes 其他组件可以通过它管理 Cluster 的各种资源。")]),e._v(" "),r("h3",{attrs:{id:"_2-scheduler-kube-scheduler"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-scheduler-kube-scheduler"}},[e._v("#")]),e._v(" 2，Scheduler（kube-scheduler）")]),e._v(" "),r("p",[e._v("Scheduler 负责决定将 Pod 放在哪个 Node 上运行。Scheduler 在调度时会充分考虑 Cluster 的拓扑结构，当前各个节点的负载，以及应用对高可用、性能、数据亲和性的需求。")]),e._v(" "),r("h3",{attrs:{id:"_3-controller-manager-kube-controller-manager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-controller-manager-kube-controller-manager"}},[e._v("#")]),e._v(" 3，Controller Manager（kube-controller-manager）")]),e._v(" "),r("p",[e._v("Controller Manager 负责管理 Cluster 各种资源，保证资源处于预期的状态。Controller Manager 由多种 controller 组成，包括 replication controller、endpoints controller、namespace controller、serviceaccounts controller 等。")]),e._v(" "),r("p",[e._v("不同的 controller 管理不同的资源。例如 replication controller 管理 Deployment、StatefulSet、DaemonSet 的生命周期，namespace controller 管理 Namespace 资源。")]),e._v(" "),r("h3",{attrs:{id:"_4-etcd"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-etcd"}},[e._v("#")]),e._v(" 4，etcd")]),e._v(" "),r("p",[e._v("etcd 负责保存 Kubernetes Cluster 的配置信息和各种资源的状态信息。当数据发生变化时，etcd 会快速地通知 Kubernetes 相关组件。")]),e._v(" "),r("h3",{attrs:{id:"_5-pod-网络"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-pod-网络"}},[e._v("#")]),e._v(" 5，Pod 网络")]),e._v(" "),r("p",[e._v("Pod 要能够相互通信，Kubernetes Cluster 必须部署 Pod 网络，flannel 是其中一个可选方案，也是 kubernetes 官方默认的一种方案。")]),e._v(" "),r("h2",{attrs:{id:"_2-node节点。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-node节点。"}},[e._v("#")]),e._v(" 2，Node 节点。")]),e._v(" "),r("p",[e._v("Node 是 Pod 运行的地方，Kubernetes 支持 Docker、rkt 等容器 Runtime。 Node 上运行的 Kubernetes 组件有：")]),e._v(" "),r("ul",[r("li",[e._v("kubelet")]),e._v(" "),r("li",[e._v("kube-proxy")]),e._v(" "),r("li",[e._v("Pod 网络（例如 flannel）")])]),e._v(" "),r("p",[e._v("如图所示：")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a8cd38fee205d0f1.jpg",alt:"image"}})]),e._v(" "),r("h3",{attrs:{id:"_1-kubelet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-kubelet"}},[e._v("#")]),e._v(" 1，kubelet")]),e._v(" "),r("p",[e._v("kubelet 是 Node 的 agent，当 Scheduler 确定在某个 Node 上运行 Pod 后，会将 Pod 的具体配置信息（image、volume 等）发送给该节点的 kubelet，kubelet 根据这些信息创建和运行容器，并向 Master 报告运行状态。")]),e._v(" "),r("h3",{attrs:{id:"_2-kube-proxy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-kube-proxy"}},[e._v("#")]),e._v(" 2，kube-proxy")]),e._v(" "),r("p",[e._v("service 在逻辑上代表了后端的多个 Pod，外界通过 service 访问 Pod。service 接收到的请求是如何转发到 Pod 的呢？这就是 kube-proxy 要完成的工作。")]),e._v(" "),r("p",[e._v("每个 Node 都会运行 kube-proxy 服务，它负责将访问 service 的 TCP/UPD 数据流转发到后端的容器。如果有多个副本，kube-proxy 会实现负载均衡。")]),e._v(" "),r("h3",{attrs:{id:"_3-pod-网络"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-pod-网络"}},[e._v("#")]),e._v(" 3，Pod 网络")]),e._v(" "),r("p",[e._v("Pod 要能够相互通信，Kubernetes Cluster 必须部署 Pod 网络，flannel 是其中一个可选方案。")]),e._v(" "),r("h2",{attrs:{id:"_3-集群架构。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-集群架构。"}},[e._v("#")]),e._v(" 3，集群架构。")]),e._v(" "),r("p",[e._v("将如上讲解的架构汇总起来，组成一个集群，就是 k8s 集群了，我们先看一张集群完整架构图：")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/83a14956e2832a07.jpg",alt:"image"}})]),e._v(" "),r("p",[e._v("这里在 k8s-master 上也加有 kubelet 和 kube-proxy ，是因为在 k8s 集群中，master 既可以作为管理节点，也能够担任 work 节点。")]),e._v(" "),r("p",[e._v("有时部署的时候也可能将 Scheduler 等控制组件部署在 node 节点，这是为了高可用着想，如此一来，集群每个节点都是 master，同时也都是 node，任意一个节点出了问题，都能够被一些高可用的方案，所避免服务的宕机。")]),e._v(" "),r("h2",{attrs:{id:"_4-通过实例理解架构工作流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-通过实例理解架构工作流程"}},[e._v("#")]),e._v(" 4，通过实例理解架构工作流程")]),e._v(" "),r("p",[e._v("现在来通过构建一个实例，来理解整个集群工作的流程。")]),e._v(" "),r("p",[e._v("执行如下命令：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("kubectl run nginx-ds --image=nginx --replicas=2\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("等待一段时间，可以查看一下部署成功：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$kubectl get pod -o wide\nNAME                                READY     STATUS    RESTARTS   AGE       IP            NODE\nnginx-ds-fbx76                      1/1       Running   0          2d        172.30.84.2   kube-node1\nnginx-ds-jbjzg                      1/1       Running   0          2d        172.30.8.2    kube-node2\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br")])]),r("p",[e._v("Kubernetes 部署了 deployment nginx-ds，有两个副本 Pod，分别运行在 kube-node1 和 kube-node2。")]),e._v(" "),r("p",[e._v("详细部署流程如图所示：")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/4d2c8de69ecfeda4.jpg",alt:"image"}})]),e._v(" "),r("ul",[r("li",[e._v("1，kubectl 发送部署请求到 API Server。")]),e._v(" "),r("li",[e._v("2，API Server 通知 Controller Manager 创建一个 deployment 资源。")]),e._v(" "),r("li",[e._v("3，Scheduler 执行调度任务，将两个副本 Pod 分发到 k8s-node1 和 k8s-node2。")]),e._v(" "),r("li",[e._v("4，k8s-node1 和 k8s-node2 上的 kubelet 在各自的节点上创建并运行 Pod。")])]),e._v(" "),r("p",[e._v("另：")]),e._v(" "),r("ul",[r("li",[e._v("应用的配置和当前状态信息保存在 etcd 中，执行 kubectl get pod 时 API Server 会从 etcd 中读取这些数据。")]),e._v(" "),r("li",[e._v("flannel 会为每个 Pod 都分配 IP。因为没有创建 service，目前 kube-proxy 还没参与进来。")])]),e._v(" "),r("p",[e._v("整理自：https://www.cnblogs.com/CloudMan6/")]),e._v(" "),r("p",[r("br"),r("ArticleTopAd")],1)])}),[],!1,null,null,null);r.default=s.exports}}]);