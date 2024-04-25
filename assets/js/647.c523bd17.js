(window.webpackJsonp=window.webpackJsonp||[]).push([[647],{991:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("br"),s("ArticleTopAd")],1),t._v(" "),s("p",[t._v("gitlab 基本上是每个公司内部代码仓库的首选，那么与之进行一些交互就是一个常见的需求了，在写了一些脚本与之交互之后，越发感受到此项目设计的成熟，因此特来记录一下相关文档。")]),t._v(" "),s("h2",{attrs:{id:"_1-物料准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-物料准备"}},[t._v("#")]),t._v(" 1，物料准备")]),t._v(" "),s("ul",[s("li",[t._v("gitlab 环境，怎么部署这里就不详述了，可参考："),s("a",{attrs:{href:"https://wiki.eryajf.net/pages/243.html#_1-%E7%8E%AF%E5%A2%83%E5%92%8C%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitlab 简单部署"),s("OutboundLink")],1),t._v("最好是 12.x 版本之后的版本，有一些接口在 11 版本中还不支持，比如项目移动分支，获取 token 的接口。")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.gitlab.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitlab 官方文档"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.gitlab.com/ee/api/api_resources.html#project-resources",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitlab-api 接口文档"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://apachecn.gitee.io/gitlab-doc-zh/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitlab-api 中文接口文档"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/xanzy/go-gitlab",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-gitlab 包"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://pkg.go.dev/github.com/xanzy/go-gitlab@v0.50.0?utm_source=gopls",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-gitlab 包接口说明文档"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"_2-初始化连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-初始化连接"}},[t._v("#")]),t._v(" 2，初始化连接")]),t._v(" "),s("p",[t._v("一般情况下，我们最好直接在管理员账号中创建一个 access_token，初始化中的认证工作都基于这个 token 来进行。")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  git       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("gitlab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client\n\ttoken     "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ceg46SwaL7yy"')]),t._v("\n\turl       "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://gitlab.test.com/api/v4"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n\tgit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gitlab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gitlab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithBaseURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"initclienterr:%v\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("panic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"初始化完成"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("p",[t._v("注意我们在开头声明一个  "),s("code",[t._v("*gitlab.Client")]),t._v("  类型的变量，初始化的时候直接将这个客户端对象赋值给这个变量，从而在全局都可以通过此变量直接与 gitlab 进行交互。")]),t._v(" "),s("p",[t._v("在源码当中，我们能看到这个对象拥有的属性如下：")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A Client manages communication with the GitLab API.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Client "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HTTP client used to communicate with the API.")]),t._v("\n\tclient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("retryablehttp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Base URL for API requests. Defaults to the public GitLab API, but can be")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set to a domain endpoint to use with a self hosted GitLab server. baseURL")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// should always be specified with a trailing slash.")]),t._v("\n\tbaseURL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("URL\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//== 中间部分省略 ==//")]),t._v("\n\n\tProjects              "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ProjectsService\n\tReleases              "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ReleasesService\n\tUsers                 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("UsersService\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("p",[t._v("这些对象都是此包给我们提供的能力，我们可以操作这些对象附带的属性，从而实现我们的需求，接下来我将通过项目这个对象来作为例子进行讲解，从而深入地认识并理解这个包的用法。")]),t._v(" "),s("h2",{attrs:{id:"_3-项目的交互"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-项目的交互"}},[t._v("#")]),t._v(" 3，项目的交互")]),t._v(" "),s("h3",{attrs:{id:"_1-熟悉结构体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-熟悉结构体"}},[t._v("#")]),t._v(" 1，熟悉结构体")]),t._v(" "),s("p",[t._v("go-gitlab 的包采用了非常优雅的面向对象编程思想，当然这其实也基源于 gitlab 官方接口文档设计的优秀。在进行一些项目相关的操作时，该包会将接口对应的返回值赋给项目这个对象，那么这个对象所拥有的一些方法就都可以直接使用了。")]),t._v(" "),s("p",[t._v("这里针对这一个示例稍微详细点讲解一下，通过编辑器代码追踪我们可以看到项目这个结构体的定义：")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Project represents a GitLab project.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GitLab API docs: https://docs.gitlab.com/ce/api/projects.html")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Project "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tID                                        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("                        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"id"`')]),t._v("\n\tDescription                               "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("                     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"description"`')]),t._v("\n\tDefaultBranch                             "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("                     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"default_branch"`')]),t._v("\n\tPublic                                    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("                       "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"public"`')]),t._v("\n\tVisibility                                VisibilityValue            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"visibility"`')]),t._v("\n\tSSHURLToRepo                              "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("                     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"ssh_url_to_repo"`')]),t._v("\n\tHTTPURLToRepo                             "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("                     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"http_url_to_repo"`')]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//== 中间部分省略 ==//")]),t._v("\n\n\tBuildCoverageRegex    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"build_coverage_regex"`')]),t._v("\n\tIssuesTemplate        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"issues_template"`')]),t._v("\n\tMergeRequestsTemplate "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"merge_requests_template"`')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("p",[t._v("go-gitlab 包非常优秀的一点在于，每一个结构体或者接口，作者都将对应的官方文档地址标注在了注释当中，从而便于我们能够直接查阅官方文档。")]),t._v(" "),s("p",[t._v("我们可以看到"),s("a",{attrs:{href:"https://docs.gitlab.com/ce/api/projects.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Project"),s("OutboundLink")],1),t._v(" 这个结构体拥有众多属性，当我们通过接口获取或者操作的时候，都可以借助于这些属性，进行非常方便的操作。")]),t._v(" "),s("h3",{attrs:{id:"_2-查项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-查项目"}},[t._v("#")]),t._v(" 2，查项目")]),t._v(" "),s("p",[t._v("查询接口是最常见最常用的，我们就先来看看这个接口怎么使用，通常，我们可能并不知道某个接口对应的方法名字叫什么，这个时候要么是去官方接口说明文档查看，要么是凭借经验，在编辑器里善用补全来进行。")]),t._v(" "),s("p",[t._v("当我们了解了 go-gitlab 这种面向对象的编程思路之后，就可以拿着开头初始化的 client 对象，来操作它里边的内容，这个时候可以输入一个 "),s("code",[t._v("git.Project.")]),t._v("  就能看到与项目相关的所有方法了：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/01/160142ea93f6326f.png",alt:""}})]),t._v(" "),s("p",[t._v("通常，查询接口的函数命名无非就是这么几个关键字： "),s("code",[t._v("List")]),t._v(" , "),s("code",[t._v("Find")]),t._v(" , "),s("code",[t._v("Select")]),t._v(" , "),s("code",[t._v("Cat")]),t._v(" …. 于是如果一开始没什么头绪的话，就可以通过关键字来进行模糊补全，这里我们往下翻可以看到 go-gitlab 使用的是 List 关键字：")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("git"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Projects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListProjects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("这个时候可以点击方法跳转到源码当中，看到如下内容：")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ListProjects gets a list of projects accessible by the authenticated user.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GitLab API docs: https://docs.gitlab.com/ce/api/projects.html#list-projects")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ProjectsService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListProjects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ListProjectsOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("RequestOptionFunc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\treq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MethodGet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"projects"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Project\n\tresp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Do")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("p",[t._v("首先还是官方接口文档的地址，以及接口的具体定义，函数定义中的三段内容简单说明如下：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("(s *ProjectsService)")]),t._v(" ：表示  "),s("code",[t._v("ProjectsService")]),t._v("  这个对象实例。")]),t._v(" "),s("li",[s("code",[t._v("ListProjects()")]),t._v(" ：表示 "),s("code",[t._v("ProjectsService")]),t._v("  这个对象拥有的 "),s("code",[t._v("ListProjects()")]),t._v("  方法。其中的两个参数都是在调用此方法时的一些附加属性。\n"),s("ul",[s("li",[s("code",[t._v("opt *ListProjectsOptions")]),t._v(" ：查询时的一些参数，通常我们会用到里边的  "),s("code",[t._v("ListOptions")]),t._v("  参数。")]),t._v(" "),s("li",[s("code",[t._v("options ...RequestOptionFunc")]),t._v(" ：自定义请求参数，一般情况下，这个参数都保持默认。")])])]),t._v(" "),s("li",[s("code",[t._v("([]*Project, *Response, error)")]),t._v(" ：返回值有三个，一个指针类型的项目切片，一个状态码，一个错误。")])]),t._v(" "),s("p",[t._v("了解了如上内容之后，我们可以简单定义如下代码：")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GetAllProject 获取所有项目")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetAllProject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("gitlab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tlbo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("gitlab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ListProjectsOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ListOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gitlab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ListOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PerPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pro "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("gitlab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Project\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" git"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Projects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListProjects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lbo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"list projects failed:%v\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tpro "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pro"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\tlbo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ListOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Page"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pro"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("p",[t._v("通过官方 client 包，我们可以做一个获取全部项目的方法，该方法不接收参数，然后返回所有项目的切片。")]),t._v(" "),s("p",[t._v("这里需要注意的是查询的参数，这种用法是一种比较常见的查询接口的用法，一般接口都不会直接将所有数据返回，而会设计出分页的装置，gitlab 亦是如此，一开始我在使用  "),s("code",[t._v("git.Projects.ListProjects()")]),t._v("  方法想要获取所有项目时，发现总是只拿到了固定的五十个项目信息，就是因为这个方法默认也是使用了分页的机制。")]),t._v(" "),s("p",[t._v("当我们用如上方法拿到所有项目之后，一般情况可以使用遍历的方法将项目遍历出来，然后利用项目的结构体对象，来获取我们关心的信息。")]),t._v(" "),s("h3",{attrs:{id:"_3-创建项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建项目"}},[t._v("#")]),t._v(" 3，创建项目")]),t._v(" "),s("p",[t._v("其实有了如上的思路之后，一般情况下，我们就可以同样借助于编辑器自动补全对应的功能。首先我们可以看到创建方法的定义：")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ProjectsService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateProject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("CreateProjectOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("RequestOptionFunc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("核心在于  "),s("code",[t._v("opt *CreateProjectOptions")]),t._v(" ，再往深处追踪，我们可以看到这个参数项，就是对应着上边 get 出来的项目的一个个属性，现在创建项目也是一样，可以通过定义这些属性，来创建一个符合预期的项目：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('func CreateProject(group, name, desc string) {\n\t\tgid, err := GetGroupID(group)\n\t\tif err != nil {\n\t\t\tfmt.Printf("get group id err:%v\\n", err)\n\t\t\treturn\n\t\t}\n\t\tp := &gitlab.CreateProjectOptions{\n\t\t\tName:                 gitlab.String(name),\n\t\t\tNamespaceID:          gitlab.Int(gid),\n\t\t\tDescription:          gitlab.String(desc),\n\t\t\tMergeRequestsEnabled: gitlab.Bool(true),\n\t\t\tJobsEnabled:          gitlab.Bool(true),\n\t\t\tWikiEnabled:          gitlab.Bool(true),\n\t\t\tSnippetsEnabled:      gitlab.Bool(true),\n\t\t\tVisibility:           gitlab.Visibility(gitlab.PrivateVisibility),\n\t\t}\n\t\tproject, _, err := git.Projects.CreateProject(p)\n\t\tif err != nil {\n\t\t\tlog.Fatal(err)\n\t\t}\n\t\tfmt.Println(project.Name)\n\t\tfmt.Println(project.WebURL)\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br")])]),s("p",[t._v("这里只是一个示例代码，并不代表能够直接运行，如果你是封装在自己的平台，或者仅仅是做一个脚本，那么可能还需要添加一些前置检测的方法来辅助，比如：")]),t._v(" "),s("ul",[s("li",[t._v("先判断传递的分组是否存在。")]),t._v(" "),s("li",[t._v("然后判断此项目是否已存在。")]),t._v(" "),s("li",[t._v("以及其他的一些你想要注入的参数。")])]),t._v(" "),s("p",[t._v("好了，关于与项目的交互就说到这里，其他的需求，只要经过合理的涉及，参考官方 api 以及 client 包的方法，都能够很方便高效地开发出来。")]),t._v(" "),s("h2",{attrs:{id:"_4-感受"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-感受"}},[t._v("#")]),t._v(" 4，感受")]),t._v(" "),s("p",[t._v("事实上我大概是为了想要写一些感受，才写了这篇文章的，什么感受呢，那就是一个项目如果有好的成熟的设计，会时时处处造福后来人！")]),t._v(" "),s("p",[t._v("真正接触了解过 gitlab-api 的同学肯定能体会到，此项目 api 设计的统一性以及优雅度，让我们无论是通过 curl 命令行与之交互，还是基于一些客户端包的交互，都感到优雅与丝滑。")]),t._v(" "),s("p",[t._v("但其实能够设计出如此成熟统一的架构，是非常困难的，可以想见 gitlab 项目的开发者一定基于很多实际开发经验，下了很多功夫对之进行设计与实现，从这个角度来说，应该致敬。")]),t._v(" "),s("p",[t._v("我想，让人感到丝滑与优雅的原因，大概是合理，统一的接口规范，是的，就是规范，当一个项目，有了统一的接口入参规范，统一的返回规范，对于使用者而言，就是一种优雅的感受。有人可能会说规范应该是一个项目要求的基础，的确是基础，但是，我们实际生产中开发维护的项目，真的能有多少是站在统一的规范之上运行的呢，就我目前接触维护的而言，实际操作起来其实真正能够在公司订立统一的规范，每个开发者又能对齐认识，并在开发中能够严格遵守的，实在少之又少。")]),t._v(" "),s("p",[t._v("很多应该在基本上就做好的，其实早都丢得一干二净，很多应该严格遵照的红线，其实无形中就在跨越。这些都是一个项目，一个团队应该时常拿出来审视自省的。")]),t._v(" "),s("p",[s("br"),s("ArticleTopAd")],1)])}),[],!1,null,null,null);s.default=e.exports}}]);