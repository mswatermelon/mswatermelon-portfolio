import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './routes'
import axios from '../request'

Vue.use(VueRouter);

const router =new VueRouter({
    routes
});

router.beforeEach((to, from, next)=>{
    if (to.meta.login) {
        next();
    } else {
        axios.get('user').then(({data})=>{
            console.log(data);
            next();
        }).catch(error => {
            console.log(error);
            localStorage.removeItem('token');
            router.replace('/login');
        })
    }
});
export default router;
