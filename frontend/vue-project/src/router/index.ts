import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'　多分使わない
import UserLogin from '../components/UserLogin.vue'
// import WelcomeItem from '../components/WelcomeItem.vue'　多分使わない
import LectureStatus from '../components/LectureStatus.vue'
import LectureList from '../components/LectureList.vue'
import LectureDetail from '../components/LectureDetail.vue'
import LectureManagement from '../components/LectureManagement.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: UserLogin
    },
    {
      path: '/lecture-status',
      name: 'lecture-status',
      component: LectureStatus
    },
    {
      path: '/lecture-list',
      name: 'lecture-list',
      component: LectureList
    },
    {
      path: '/lecture-detail',
      name: 'lecture-detail',
      component: LectureDetail
    },
    {
      path: '/lecture-management',
      name: 'lecture-management',
      component: LectureManagement
    }
    //以下多分使わない
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: WelcomeItem
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
