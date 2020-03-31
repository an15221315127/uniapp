import store from '../store/index.js';

const BaseUrl = store.state.config.BaseURL;

/**
 * 封装service层
 * @param method
 * @param url
 * @param data
 * @returns {Promise<unknown>}
 */
const service = (method,url,data)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BaseUrl + url,
			data,
			method,
			success(res) {
				switch(res.code){
					case 1:
					resolve(res.data,res.msg,res.code);
					break;
					case -1:
					uni.showToast({
						title:res.msg
					})
					uni.redirectTo({
						url:'/pages/login.vue'
					})
					break;
					case 0:
					uni.showToast({
						title:res.msg
					})
					break;
					default:
					break;
				}

			},
			fail(err) {
				reject(err);
			}
		})
	})
}
/**
 * 封装get方法
 * @param {String} url
 * @param {Object} data
 * @return {Object} {data,code,msg | error}
 */
export const get = (url,data)=>{
	return service('GET',url,data);
}

/**
 * 封装post方法
 * @param {String} url
 * @param {Object} data
 * @return {Object} {data,code,msg | error}
 */
export const post = (url,data) =>{
	return service('POST',url,data);
}
