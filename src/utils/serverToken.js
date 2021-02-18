import{ storage, serverTokenName } from '@/config'

/**
 * @author 元亨智通科技
 * @description 获取 本地Token
 * @returns {string}
 */
export function getServerToken() {
	if(storage)
		if('localStorage' === storage)
			return localStorage.getItem(serverTokenName)
		else
			return sessionStorage.getItem(serverTokenName)
	else
		return localStorage.getItem(serverTokenName)
}

/**
 * @author 元亨智通科技
 * @description 存储 accessToken
 * @param accessToken
 * @returns {void|*}
 */
export function setServerToken(accessToken){
	if(storage)
		if('localStorage' === storage)
			return localStorage.setItem(serverTokenName, accessToken)
		else
			return sessionStorage.setItem(serverTokenName, accessToken)
	else
		return localStorage.setItem(serverTokenName, accessToken)
}

export function removeServerToken() {
	if(storage)
		if('localStorage' === storage)
			return localStorage.removeItem(serverTokenName)
		else
			return sessionStorage.clear()
	else
		return localStorage.removeItem(serverTokenName)
}