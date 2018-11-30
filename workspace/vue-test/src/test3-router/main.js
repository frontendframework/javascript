import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './Home.vue';
import Info from './Info.vue';

Vue.use(VueRouter)

const router=new VueRouter({
    routes:[
        {path:'/', component: Home},
        {path:'/home', component: Home},
        {path:'/info/:userName', component: Info}
    ]
})

new Vue({
    template:`
        <div>
            <div>
                <ul>
                    <router-link to="/home">home</router-link>
                    <router-link to="/info/kkang">info</router-link>
                </ul>
            </div>
            <router-view></router-view>  
        </div>
    `,
    el:'#app',
    router
})