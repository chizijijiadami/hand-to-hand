import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const _import = file => () => import('@/pages/' + file + '.vue')

export default new Router({
    routes: [
        {
            path: '',
            redirect: '/index'
        },
        {
            path: '/index',
            component: _import('Index/index')
        },
        {
            path: '/list',
            component: _import('List/index'),
            children: [
                {
                    path: 'detail',
                    component: _import('List/Detail/index')
                },
                {
                    path: 'feature',
                    component: _import('List/Feature/index')
                }
            ]
        },
        {
            path: '/404',
            component: _import('ErrorPages/404')
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})