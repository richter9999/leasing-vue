### 一. 项目开发环境的搭建需求

#### 	1. 本项目

```
    前后端分离开发, 前端路由与后端路由分开, 后端只提供 JSON数据,权限验证通过JWT 
    (1). 前端: Vue3.0 + VueRouter4.0 + VueX4.0 + Ant Design Vue2.0
    (2). 后端: SpringBoot2.4 + Redis5.0(集群) + MySQL8.0(集群-1主2从) + MyBatis-Plus3.0 + RabbitMQ3.85
```

#### 	2. 操作系统

```
 	Windows 或者 Linux 根据公司的个人喜好
```

#### 	3. Web服务器

```
	1-4台 安装4个独立的 TomCat9.0 + 1个Nginx1.18(反向代理服务器) + RabbitMQ3.85 
```

#### 	4. DB服务器

```
	需要 2-3台独立的 安装 2- 3个 MySQL8.0 , Redis5.0 进行 集群配置 做到 读写分离
```



### 二. 前端项目的配置

#### 	1. 安装 WebStorm 2020.3 x64

```
    打开插件中心 File -> Settings -> Manage Plugins Reposito，设置插件中心仓库，如下图所示
    设置仓库地址：https://repo.idechajian.com ，如下图所示
    点击OK，便可以在插件中心，搜索关键字 “ BetterIntellij ”，如下图所示	
```

#### 	2. 安装 Vue脚手架,并创建项目

```
	npm i -g VueCli 
```

``` 
	vue create projectName
```

#### 	3. 选择项目所需的库(生产环境)

```
	Vue3.0, VueRouter4.0, VueX4.0, Axios0.21 , Ant Design Vue2.0, 
```

```
	npm i --save vue 
	npm i --save vue-router
	npm i --save vuex
	npm i --save axios
	npm i --save ant-design-vue@next
```

#### 	4. GitHub上创建 Git 库并同步

```
	git remote add origin 仓库地址 http://github.com/richter9999/XXX.git
	git push -u origin master
```

```
    git add .
    git commit -m '备注'
    git push
```

#### 	5. 目录划分

```
├── README.md            项目介绍

├── index.html           入口页面


├── src               源码目录 

│  ├── main.js             入口js文件

│  ├── App.vue             根组件

│  ├── config           配置文件目录

│  │  └── index.js

│  ├── utils           工具类目录

│  │  └── *.js		   工具类

│  ├── components           公共组件目录

│  │  └── vue

│  ├── assets             资源目录，这里的资源会被wabpack构建

│  │  └── img

│  │    └── .png

│  │  └── css

│  │    └── .css

│  ├── routes             前端路由

│  │  └── index.js

│  ├── store              应用级数据（state）

│  │  └── index.js

│  ├── views              页面目录

│  ├── network            网络封装目录

│    └── request.js		   对Axios的封装	

│  ├── api            	   网络请求基本数据的

│    └── icon.js		   获取icon列表
│    └── router.js		   获取router菜单
│    └── table.js		   table表格的 基本网络请求
│    └── user.js		   user信息 网络请求封装


```





### 三. 后端项目的配置

#### 	1. 安装VS-CODE,并安装插件

```
    (1)Java Extension Pack, Language Support for Java(TM) (0.74版本)   -------java运行
    (2)Lombok Annotations Support for VS Code	------Java 对象（POJO） @Data实现
    (3)Prettier - Code formatter	------代码格式化
    (4)Tabnine Autocomplete	------ AI智能化代码 
    (5)Path Autocomplete	------ 路径自动完成
    (6)Bracket Pair Colorizer 2	------ 括号自动对色
    (7)Auto Complete Tag		------ 自动完成Tag
    (8)Auto Close Tag	------- 自动完成 关闭 Tag
    (9)Auto Rename Tag	------- 自动重命名
    (10)Chinese (Simplified) Language Pack for Visual Studio Code
    (11)Guides	------ 对齐参考线
    (12)vscode-icons	------- 项目图标
    (13)Material Theme	------- 项目主体
```

#### 	2. 创建SpringBoot项目

```
	(1) Ctrl + Shift + P  输入 Spring 选择 创建 Maven 项目选择 JAVA -> SpringBoot2.4 -> 包名 DevTools,Web,Lombok,Thymeleaf,cache
		Security,Aop, MySQL,Redis, Rabbit
		
	(2) 编辑 根目录下 pom.xml 添加 所需项目依赖支持
	(3) 配置 main/resource 目录下 application.properties 
```

#### 3. 目录划分

```

```









