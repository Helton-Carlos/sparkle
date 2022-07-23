import { createRouter, createWebHistory } from 'vue-router'
import { useCookies } from "vue3-cookies";
import Home from '../view/Home.vue'
import Login from '../view/Login.vue'
import Staff from '../view/Staff.vue'
import Records from '../view/Records.vue'
import Talks from '../view/talks.vue'
import Settings from '../view/Settings.vue'

const { cookies } = useCookies();

const routes = [
    {
        path:"/",
        name:"home",
        component:Home
    },
    {
        path:"/login",
        name:"login",
        component:Login
    },
    {
        path:"/staff",
        name:"staff",
        component:Staff
    },
    {
        path:"/records",
        name:"records",
        component:Records
    },
    {
        path:"/talks",
        name:"talks",
        component:Talks
    },
    {
        path:"/settings",
        name:"settings",
        component:Settings
    }
]

const router = createRouter({
    history:  createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
   let my_cookie_value = cookies.get("myCoookie");
   if (to.fullPath !== "/login" && my_cookie_value === null) {
      next({ name: "login" });
    }

    next();
  });

export default router;