import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import HomeVue from '../pages/Home.vue'
import ClassifyVue from '../pages/Classify.vue'
import CartVue from '../pages/Cart.vue'
import MineVue from '../pages/Mine.vue'
import ClassifyContent from '../pages/classifyComponents/classify-content.vue'
export default new Router({
  mode: 'history', //切换路径模式，变成history模式
  routes: [
    {path:'/',redirect:'/home'},
    // {path:'*',redirect:'/home'},
    {path:'/home',component:HomeVue},
    {path:'/classify',component:ClassifyVue,children:[
          //  {path:'/',redirect:'classifyContent'},
    { path:'classifyContent/:maitKey',component:ClassifyContent}

    ]},
    {path:'/cart',component:CartVue},
    {path:'/mine',component:MineVue}
  ]
})
