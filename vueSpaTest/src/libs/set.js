import Vue from 'vue'
import utils from './utils'

export const setAuth = () => {
	Vue.http.headers.common['Authorization'] = utils.getBasicAuth();
}

//ajax拦截器
export const setInterceptors = () => {
	Vue.http.interceptors.push(function() {
		//todo
		return {
			request: function(request) {
				//todo
				return request;
			},
			response: function(response) {
				//todo
				return response;
			}

		};
	});
}