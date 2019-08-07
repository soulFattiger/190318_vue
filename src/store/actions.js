/* 
    包含n个间接更新状态数据的方法的对象
*/
import {
    reqAddress,
    reqCategorys,
    reqShops
} from '../api'
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutation-types'
export default{
    /*
        获取当前地址信息的异步action 
     */
    async getAddress({commit,state}) {
        const {longitude,latitude} = state
        const result = await reqAddress(longitude,latitude)
        if (result.code===0){
            const address = result.data
            commit(RECEIVE_ADDRESS,address)
        }
    },
    /* 
        获取商品分类列表的异步action
    */
   async getCategorys ({commit},callback){
       const result = await reqCategorys()
       if(result.code===0){
           const categorys = result.data
           commit(RECEIVE_CATEGORYS,categorys)
           typeof callback==='function' && callback()
       }
   },

   /* 
    获取商家列表的异步action
   */
  async getShops ({commit,state}) {
      const {longitude,latitude} = state
      const result = await reqShops({longitude,latitude})
      if(result.code===0){
          const shops = result.data
          commit(RECEIVE_SHOPS,shops)
      }
  }
}