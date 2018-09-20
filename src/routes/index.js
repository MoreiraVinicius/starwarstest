import Vue from 'vue'
import Router from 'vue-router'
import Opening from '@/views/Opening.vue'
import Test from '@/components/Banner.vue'
Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        component: Opening
    },
    {
        path: '/test',
        component: Test
    }
    ]
})

export default router;