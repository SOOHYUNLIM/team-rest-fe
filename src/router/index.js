import Vue from 'vue'
import VueRouter from 'vue-router'
import EBookView from '../views/EBookView'

Vue.use(VueRouter)

const routes = [
    {
        path: '/bookPlayer',
        name: 'Book Player',
        component: EBookView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router