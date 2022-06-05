import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import Login from '../view/Login.vue'
import Staff from '../view/Staff.vue'
import Records from '../view/Records.vue'
import Task from '../view/Task.vue'
import Settings from '../view/Settings.vue'

const routes = [
    {
        path:"/",
        name:"home",
        component:Home
    },
    {
        path:"/login",
        name:"Login",
        component:Login
    },
    {
        path:"/staff",
        name:"staff",
        component:Staff
    },
    {
        path:"/records",
        name:"Records",
        component:Records
    },
    {
        path:"/task",
        name:"Task",
        component:Task
    },
    {
        path:"/settings",
        name:"Settings",
        component:Settings
    }
]

const router = createRouter({
    history:  createWebHistory(),
    routes,
})

export default router;