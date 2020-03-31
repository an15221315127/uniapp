import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/**
 * 引入模块开始_______________________________________________
 */
import config from './modules/config.js'




/**
 * 引入结束___________________________________________________
 */


/**
 * 导出store
 */
export default new Vuex.Store({
  modules: {
	  config
  }
})
