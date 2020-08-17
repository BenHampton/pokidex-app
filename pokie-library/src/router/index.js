import Vue from 'vue'
import Router from 'vue-router'
import Home from '../modules/Home/Home'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: Home },
        // { path: '/Login', name: 'Login', component: Login },
        // { path: '/create', name: 'TheCreateUser', component: TheCreateUser },
        // { path: '/timeline', name: 'TimeLine', component: TimeLine },
        // {
        //     path: '/user/:userID',
        //     name: 'UserProfile',
        //     component: UserProfile
        // },
        // {
        //     path: '/user/:userID',
        //     name: 'Friend',
        //     component: UserProfile
        // },
        { path: '*', redirect: '/' }
    ]
})
