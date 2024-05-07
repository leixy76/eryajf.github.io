(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{697:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("br"),t("ArticleTopAd")],1),s._v(" "),t("p",[s._v("很多时候，在构建的过程中，我们会取系统当前时间戳作为一个参照，融入到构建过程中，在原来自由风格中，都是基于 Linux 系统级别的  "),t("code",[s._v("date")]),s._v("  命令进行的定义，现在来到流水线里边，突然发现想要定义一个全局的时间戳变量，似乎并不容易，尽管知道流水线脚本就是 groovy 语言，然而因为不会开发，一时间也不知道从何下手，原来用的如下方式进行获取的时间戳：")]),s._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[s._v("pipeline"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    agent any\n    stages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'timestamp'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                script "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'========================'")]),s._v("\n                        # 如果想要定义并获取时间戳变量，最好写到这里，实测写到environment是违规的语法\n                        sh "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version=`date +%Y%m%d%H%M%S`"')])]),s._v("\n                        sh "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"printenv"')])]),s._v("\n                        echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'========================'")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'========================'")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/93f04bae072e7740.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("后来的使用中，深深觉得这种定义十分不方便，因此不死心的再到网上各种搜罗，看了不少的案例，似乎也都没有找到让自己满意的结果，最后在一个示例当中找到了，并做了一下简单调整，从而符合自己的需求。")]),s._v(" "),t("div",{staticClass:"language-groovy line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义一个版本号作为当次构建的版本，输出结果 20191210175842_69")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yyyyMMddHHmmss'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BUILD_ID")]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\npipeline "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    agent any\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可在 environment 引入上边定义的函数，以便于全局调用")]),s._v("\n    environment "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        _version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    stages "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        stage "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token interpolation-string"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                echo "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("_version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("这样就实现了自己想要的全局时间戳变量了。")]),s._v(" "),t("p",[t("br"),t("ArticleTopAd")],1)])}),[],!1,null,null,null);t.default=e.exports}}]);