import Vue from 'vue'
import Router from 'vue-router'
import Opening from '@/views/Opening.vue'
import Main from '@/views/Main.vue'
import Burguer from '@/components/Burguer.vue'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        component: Opening
    },{
        path: '/main',
        component: Main
    },
    {
        path: '/burguer',
        component: Burguer
    }

    ]
})

export default router;