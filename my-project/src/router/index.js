import Vue from 'vue'
import Router from 'vue-router'
import wangeditor from '@/components/wangeditor'
import bbb from '@/components/bbb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wangeditor',
      component: wangeditor
    },
    {
      path: '/bbb',
      name: 'bbb',
      component: bbb
    }
  ]
})
