(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{656:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("br"),n("ArticleTopAd")],1),s._v(" "),n("h2",{attrs:{id:"_1-前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[s._v("#")]),s._v(" 1，前言")]),s._v(" "),n("p",[s._v("提供了Python私仓之后，除了通过私仓拉包方便之外，小伙伴们难免会有往私仓传包的需求，因为稍微有点绕弯，因此这里记录一下。")]),s._v(" "),n("p",[s._v("其实用一句话来表述，就是"),n("code",[s._v("通过私服拉包的时候，走group的代理，从本地上传包的时候，要走local的仓库。")])]),s._v(" "),n("p",[s._v("接下来就记录一下配置方法并用测试包来验证下。")]),s._v(" "),n("p",[s._v("创建私服的过程这里不详述了，已知现有Python私仓，物料信息如下：")]),s._v(" "),n("ul",[n("li",[s._v("group：http://nexus.test.com/repository/pyg/")]),s._v(" "),n("li",[s._v("local：http://nexus.test.com/repository/pyg/")])]),s._v(" "),n("h2",{attrs:{id:"_2-上传"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-上传"}},[s._v("#")]),s._v(" 2，上传")]),s._v(" "),n("h3",{attrs:{id:"_1-先安装依赖包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-先安装依赖包"}},[s._v("#")]),s._v(" 1，先安装依赖包")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ pip3 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" wheel "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),s._v("\n$ pip3 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" twine "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/395aabbff10e80be.jpg",alt:"img"}})]),s._v(" "),n("h3",{attrs:{id:"_2-添加配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加配置"}},[s._v("#")]),s._v(" 2，添加配置")]),s._v(" "),n("p",[s._v("有了如上物料之后，我们首先来验证下上传功能，在本地用户家目录添加如下配置：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.pypirc\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("distutils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nindex-servers "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n    pypi\n    nexus\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pypi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nrepository:https://pypi.python.org/pypi\nusername:eryajf\npassword:test\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nexus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("repository")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://nexus.test.com/repository/pyg/\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("username")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dev\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("password")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("GVLaX-E"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("yq"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("/k\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[s._v("申明")]),s._v(" "),n("p",[n("strong",[s._v("原创文章"),n("Badge",{attrs:{text:"eryajf"}}),s._v("，未经授权，严禁转载，侵权必究！此乃文中随机水印，敬请读者谅解。")],1)]),s._v(" "),n("div",{staticClass:"custom-block right"},[n("p",[s._v("Copyright  "),n("a",{attrs:{href:"https://wiki.eryajf.net",target:"_blank",rel:"noopener noreferrer"}},[s._v("二丫讲梵"),n("OutboundLink")],1),s._v(" 版权所有")])])]),s._v(" "),n("h3",{attrs:{id:"_3-编写代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-编写代码"}},[s._v("#")]),s._v(" 3，编写代码")]),s._v(" "),n("p",[s._v("然后在本地打一个测试包")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" helloworld\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" helloworld/__init__.py\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" helloworld/demo.py\nclass Demo:\n    @staticmethod\n    def hello"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n        print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'helloworld'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("编写setup.py：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" setup.py\nfrom setuptools "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" setup\nsetup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'helloworld'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("version")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.0'")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("author")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"techlog"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("license")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MIT"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("packages")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'helloworld'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("install_requires")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("classifiers")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Topic :: Utilities"')]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Topic :: Internet"')]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Topic :: Software Development :: Libraries :: Python Modules"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("具体的 setup.py 的编写规范可以参考：https://packaging.python.org/tutorials/distributing-packages/#setup-py")]),s._v(" "),n("p",[s._v("目录结构：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ tree\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├── helloworld\n│   ├── __init__.py\n│   └── demo.py\n└── setup.py\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" directory, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" files\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"_4-打包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-打包"}},[s._v("#")]),s._v(" 4，打包")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ python3 setup.py sdist bdist_wheel\nrunning sdist\nrunning egg_info\ncreating helloworld.egg-info\nwriting helloworld.egg-info/PKG-INFO\nwriting dependency_links to helloworld.egg-info/dependency_links.txt\nwriting top-level names to helloworld.egg-info/top_level.txt\nwriting manifest "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'helloworld.egg-info/SOURCES.txt'")]),s._v("\nreading manifest "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'helloworld.egg-info/SOURCES.txt'")]),s._v("\nwriting manifest "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'helloworld.egg-info/SOURCES.txt'")]),s._v("\nwarning: sdist: standard "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" not found: should have one of README, README.rst, README.txt, README.md\nrunning check\nwarning: check: missing required meta-data: url\nwarning: check: missing meta-data: "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'author'")]),s._v(" supplied, "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'author_email'")]),s._v(" must be supplied too\ncreating helloworld-1.0\ncreating helloworld-1.0/helloworld\ncreating helloworld-1.0/helloworld.egg-info\ncopying files to helloworld-1.0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ncopying setup.py -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" helloworld-1.0\ncopying helloworld/__init__.py -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" helloworld-1.0/helloworld\ncopying helloworld/demo.py -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" helloworld-1.0/helloworld\ncopying helloworld.egg-info/PKG-INFO -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" helloworld-1.0/helloworld.egg-info\ncopying helloworld.egg-info/SOURCES.txt -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" helloworld-1.0/helloworld.egg-info\ncopying helloworld.egg-info/dependency_links.txt -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" helloworld-1.0/helloworld.egg-info\ncopying helloworld.egg-info/top_level.txt -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" helloworld-1.0/helloworld.egg-info\nWriting helloworld-1.0/setup.cfg\ncreating dist\nCreating "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" archive\nremoving "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'helloworld-1.0'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("and everything under it"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nrunning bdist_wheel\nrunning build\nrunning build_py\ncreating build\ncreating build/lib\ncreating build/lib/helloworld\ncopying helloworld/__init__.py -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" build/lib/helloworld\ncopying helloworld/demo.py -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" build/lib/helloworld\ninstalling to build/bdist.macosx-10.14-x86_64/wheel\nrunning "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\nrunning install_lib\ncreating build/bdist.macosx-10.14-x86_64\ncreating build/bdist.macosx-10.14-x86_64/wheel\ncreating build/bdist.macosx-10.14-x86_64/wheel/helloworld\ncopying build/lib/helloworld/__init__.py -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" build/bdist.macosx-10.14-x86_64/wheel/helloworld\ncopying build/lib/helloworld/demo.py -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" build/bdist.macosx-10.14-x86_64/wheel/helloworld\nrunning install_egg_info\nCopying helloworld.egg-info to build/bdist.macosx-10.14-x86_64/wheel/helloworld-1.0-py3.7.egg-info\nrunning install_scripts\ncreating build/bdist.macosx-10.14-x86_64/wheel/helloworld-1.0.dist-info/WHEEL\ncreating "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist/helloworld-1.0-py3-none-any.whl'")]),s._v(" and adding "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'build/bdist.macosx-10.14-x86_64/wheel'")]),s._v(" to it\nadding "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'helloworld/__init__.py'")]),s._v("\nadding "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'helloworld/demo.py'")]),s._v("\nadding "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'helloworld-1.0.dist-info/METADATA'")]),s._v("\nadding "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'helloworld-1.0.dist-info/WHEEL'")]),s._v("\nadding "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'helloworld-1.0.dist-info/top_level.txt'")]),s._v("\nadding "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'helloworld-1.0.dist-info/RECORD'")]),s._v("\nremoving build/bdist.macosx-10.14-x86_64/wheel\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br")])]),n("p",[s._v("打包之后，会生成一个build目录和dist目录：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ tree\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├── build\n│   ├── bdist.macosx-10.14-x86_64\n│   └── lib\n│       └── helloworld\n│           ├── __init__.py\n│           └── demo.py\n├── dist\n│   ├── helloworld-1.0-py3-none-any.whl\n│   └── helloworld-1.0.tar.gz\n├── helloworld\n│   ├── __init__.py\n│   └── demo.py\n├── helloworld.egg-info\n│   ├── PKG-INFO\n│   ├── SOURCES.txt\n│   ├── dependency_links.txt\n│   └── top_level.txt\n└── setup.py\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" directories, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" files\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h3",{attrs:{id:"_5-上传"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-上传"}},[s._v("#")]),s._v(" 5，上传")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ python3 "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" twine upload "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--repository")]),s._v(" nexus dist/*\nUploading distributions to http://nexus.test.com/repository/pygl/\nUploading helloworld-1.0-py3-none-any.whl\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".38k/4.38k "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("00:0"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v("<")]),s._v("00:00, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("46")]),s._v(".9kB/s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nUploading helloworld-1.0.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".77k/3.77k "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("00:0"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v("<")]),s._v("00:00, 112kB/s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("看到如上内容，就说明上传成功了。")]),s._v(" "),n("p",[s._v("可以浏览器上看下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d296492a494877ef.jpg",alt:"image-20201120164214736"}})]),s._v(" "),n("h2",{attrs:{id:"_3-下载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-下载"}},[s._v("#")]),s._v(" 3，下载")]),s._v(" "),n("p",[s._v("拉包就比较简单了，首先配置如下信息：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" ~/.pip\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/.pip/pip.conf "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n[global]\ntimeout = 60\ntrusted-host =  nexus.test.com\nindex-url = http://nexus.test.com/repository/pypi/simple\nEOF")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("然后直接安装对应包即可。")]),s._v(" "),n("p",[n("br"),n("ArticleTopAd")],1)])}),[],!1,null,null,null);n.default=e.exports}}]);