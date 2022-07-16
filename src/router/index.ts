import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import Login from '../view/Login.vue'
import Staff from '../view/Staff.vue'
import Records from '../view/Records.vue'
import Talks from '../view/talks.vue'
import Settings from '../view/Settings.vue'

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
    let login = JSON.parse(localStorage.getItem("login"));
    
    if (to.fullPath !== "/login" && login === null) {
      next({ name: "login" });
    }

    next();
  });

export default router;