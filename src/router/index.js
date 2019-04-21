import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
import Article from '../components/article.vue'
import Create from '../components/create.vue'
import View from '../components/view.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Article
    },
    {
      path: '/create/',
      component: Create
    },
    {
      path: '/edit/:noteId',
      component: Create,
      name: 'Edit'
    },
    {
      path: '/view/:noteId/',
      component: View,
      name: 'View'
    }
  ]
})
