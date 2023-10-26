import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentRequest from '../pages/StudentRequests.vue'
import StudentsOwnRequest from '../pages/StudentsOwnRequest.vue'
import Login from '../pages/LoginAccount.vue'
import CreateAccount from '../pages/CreateAccount.vue'
import UploadMaterials from '../pages/UploadMaterials.vue'
import GiveGrades from '../pages/GiveGrades.vue'
import SeeStudentRequests from '../pages/SeeStudentRequests.vue'
import SpecifyExamConducted from '../pages/SpecifyExamConducted.vue'
import SchedulePage from '../pages/SchedulePage.vue'
import AdminPage from '../pages/AdminPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/studreq',
      name: 'StudentRequest',
      component: StudentRequest
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: SchedulePage
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminPage
    },
    {
      path: '/uploadmaterials',
      name: 'UploadMaterials',
      component: UploadMaterials
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/create/account',
      name: 'CreateAccount',
      component: CreateAccount
    },
    {
      path: '/grading/givegrades',
      name: 'GiveGrades',
      component: GiveGrades
    },
    {
      path: '/requests/seerequests',
      name: 'SeeStudentRequests',
      component: SeeStudentRequests
    },
    {
      path: '/exam/examinfo',
      name: 'SpecifyExamConducted',
      component: SpecifyExamConducted
    },
    {
      path: '/requests/studreq',
      name: 'StudentsOwnRequest',
      component: StudentsOwnRequest
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
