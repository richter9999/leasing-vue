import request from '@/utils/request'

export function getRouterList(params) {
	return request({
		url: '/sysMenu/navigate',
		params,
	})
}