/**
 * 通用配置
 * @description 导出默认通用配置
 */
export const setting = {
	//开发部署的时候的URL
	publicPath: '',
	//生产环境的文件目录
	outputDir: 'dist',
	//纺织静态资源文件目录(js, css, img, fonts)的目录 相对于 outputDir的 目录 static
	assetsDir: 'static',
	//默认接口地址
	baseURL: 'http://127.0.0.1:8080',
	//标题
	title: '商租管理系统',
	//标题分隔符
	titleSeparator: '  -  ',
	//标题是否反转 如果为false:"page - title"，如果为ture:"title - page"
	titleReverse: false,
	//简写
	abbreviation: 'leasing',
	//开发端口号
	devPort: '9999',
	//版本号
	version: process.env.VUE_APP_VERSION,
	//版本copyright可随意修改
	copyright: '元亨智通科技有限公司',
	//缓存路由最大数量
	keepaliveMaxNum: 99,
	//路由模式  history, hash
	routerMode: 'history',
	//不经过Token 验证的路由
	routerWhiteList: ['/login', '/register', '/callback', '/404', '/403'],
	//加载 显示文字
	loadingText: '正在努力拉取中......',
	//前端Token名称
	tokenName: 'accessToken',
	//前端ToKen 在系统中存储的名称 Key
	tokenTableName: 'accessToken',
	//Token 在系统中的 存贮位置 localStorage cookie
	storage: 'localStorage',
	//token失效回退到登录页时是否记录本次的路由
	recordRouter: true,
	//是否显示logo，不显示时设置false，显示时请填写remixIcon图标名称，暂时只支持设置remixIcon
	logo: 'vuejs-fill',
	//语言类型zh, en
	i18n: 'zh',
	//在哪些环境下显示高亮错误
	errorLog: ['development', 'production'],
	//是否开启登录拦截
	loginInterception: true,
	//是否开启登录RSA加密
	loginRSA: false,
	//intelligence（前端导出路由）和all（后端导出路由）两种方式
	authentication: 'intelligence',
	//是否开启roles字段进行角色权限控制（如果是all模式后端完全处理角色并进行json组装，可设置false不处理路由中的roles字段）
	rolesControl: true,
	//vertical gallery comprehensive common布局时是否只保持一个子菜单的展开
	uniqueOpened: false,
	//vertical布局时默认展开的菜单path，使用逗号隔开建议只展开一个
	defaultOpeneds: ['/vab'],
	//需要加loading层的请求，防止重复提交
	debounce: ['doEdit'],
	//需要自动注入并加载的模块
	providePlugin: {},
	//npm run build时是否自动生成7z压缩包
	build7z: false,
	//代码生成机生成在view下的文件夹名称
	templateFolder: 'project',
	//是否显示终端donation打印
	donation: false,
	//画廊布局和综合布局时，是否点击一级菜单默认开启第一个二级菜单
	openFirstMenu: true,
	
	
}