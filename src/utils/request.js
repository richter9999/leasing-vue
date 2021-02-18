import axios from 'axios'
import { baseURL, contentType, debounce, requestTimeout, successCode, tokenName, } from '@/config'
import store from '@/store'
import router from '@/router'
import { message } from 'ant-design-vue'
import { isArray } from '@/utils/validate'
import qs from 'qs'

let loadingInstance

/**
 * @author 元亨智通科技
 * @description 处理Code异常
 * @param code
 * @param msg
 */
const handleCode = (code, msg) => {
	switch (code) {
		case 401:
			message.error(msg || '登录失效')
			store.dispatch('user/resetAll').catch(() => {})
			break
		case 403:
			router.push({ path: '/401' }).catch(() => {})
			break
		default:
			message.error(msg || `后端接口${code}异常`)
			break
	}
}

/**
 * @description axios初始化
 * @type {AxiosInstance}
 */
const instance = axios.create({
	baseURL,
	method: 'GET',
	timeout: requestTimeout,
	headers: {
		'Content-Type': contentType,
	},
})

/**
 * @author 元亨智通科技
 * @description axios 请求拦截器
 */
instance.interceptors.request.use(
	(config) =>{
		if(store.getters['user/accessToken'])
			config.headers[tokenName] = store.getters['user/accessToken']
		if(config.data && config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8')
			config.data = qs.stringify(config.data)
		if(debounce.some((item) => config.url.includes(item))){
			//加载动画
		}
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

instance.interceptors.response.use(
	(response) => {
		if(loadingInstance) loadingInstance.close()
		const { data, config } = response
		const { code, msg } = data
		//操作正常的数组
		const codeVerificationArray = isArray(successCode)?[...successCode]:[...[successCode]]
		//是否正常
		if(codeVerificationArray.includes(code))
			return data
		else {
			handleCode(code, msg)
			return Promise.reject('axios拦截异常' + JSON.stringify({ url: config.url, code, msg }) || 'Error')
		}
	},
	(error) => {
		if(loadingInstance) loadingInstance.close()
		const{ response, message } = error
		if(error.response && error.response.data){
			const {status, data} =response
			handleCode(status, data.msg || message)
			return Promise.reject(error)
		} else {
			let { message } = error
			if(message === 'Network Error')
				message = '后端网络异常'
			if(message.includes('timeout'))
				message = '后端请求超时'
			if(message.includes('Request failed with status code')){
				const code = message.substr(message.length - 3)
				message = '后端' + code + '异常'
			}
			message.error(message || '后端未知异常')
			return Promise.reject(error)
		}
	}
)

export default instance