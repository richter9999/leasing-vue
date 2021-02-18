import{ storage, tokenTableName } from '@/config'

/**
 * @author 元亨智通科技
 * @description 获取 本地Token
 * @returns {string}
 */
export function getAccessToken() {
	if(storage)
		if('localStorage' === storage)
			return localStorage.getItem(tokenTableName)
		else
			return sessionStorage.getItem(tokenTableName)
	else
		return localStorage.getItem(tokenTableName)
}

/**
 * @author 元亨智通科技
 * @description 存储 accessToken
 * @param accessToken
 * @returns {void|*}
 */
export function setAccessToken(accessToken){
	if(storage)
		if('localStorage' === storage)
			return localStorage.setItem(tokenTableName, accessToken)
		else
			return sessionStorage.setItem(tokenTableName, accessToken)
	else
		return localStorage.setItem(tokenTableName, accessToken)
}

export function removeAccessToken() {
	if(storage)
		if('localStorage' === storage)
			return localStorage.removeItem(tokenTableName)
		else
			return sessionStorage.clear()
	else
		return localStorage.removeItem(tokenTableName)
}