import Vue from 'vue'
import Vuex from 'vuex'

import {loginPost} from "@/http/user.js"

import { Message } from 'element-ui';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   
    token:sessionStorage.getItem("t") || ""
  },
  getters: {
  },
  mutations: {
    
    gaiToken(state,m){
      state.token = m;
      sessionStorage.setItem("t",m)
    }

  },
  actions: {
    
    async denglu({commit},obj){
      let {data:res}= await loginPost(obj) 
      
      if(res.meta.status == 200){
         console.log(res);
           commit("gaiToken",res.data.token)
           Message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          });
      }else{
          console.log("失败了")
          Message.error('错了哦，这是一条错误消息');
      }
    }



  },
  modules: {
  }
})
