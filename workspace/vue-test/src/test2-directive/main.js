import Vue from 'vue';

//custom directive... 선언과 동시에 global 로 등록..
Vue.directive('aDirective', {
    //directive가 특정 element에 추가되었을대...
    inserted:function(el){
        console.log('aDirective....'+el.tagName)
    }
})

new Vue({
    template:`
        <div>
            <h3>v-if test...</h3>
            <template v-if="loginType==='username'">
                <label>name</label>
                <input placeholder="user name......"/>
            </template>
            <template v-else>
                <label>email</label>
                <input placeholder="email name......"/>
            </template>

            <template v-if="loginType==='username'">
                <label>name</label>
                <input placeholder="user name......" key="username"/>
            </template>
            <template v-else>
                <label>email</label>
                <input placeholder="email name......" key="email"/>
            </template>

            <button @click="loginTypeChange">change</button>

            <h3>v-for test...</h3>
            <ul>
                <li v-for="(item, index) in items">
                    {{index}} - {{item.message}}
                </li>
            </ul>
            <ul>
                <li v-for="(value, key, index) in object">
                    {{index}} - {{key}} - {{value}}
                </li>
            </ul>

            <h3>event test...</h3>
            <button @click.once="onceClick">once</button>
            <br/>
            <input @keyup.enter.space="keyEvent"/>
            <br/>
            <input @keyup.ctrl.67="keyEvent"/>

            <h3>Custom Directive</h3>
            <div v-aDirective>{{count}}</div>
            <div v-bDirective:foo="msg"></div>
            <button @click="dataUpdate">data change</button>
        </div>
    `,
    el:'#app',
    data(){
        return {
            loginType:'username',
            items:[{
                message:'hello'
            },{
                message:'world'
            }],
            object:{
                firstName:'gildong',
                lastName:'hong',
                age: 30
            },
            msg: 'helloworld',
            count:0
        }
    },
    methods:{
        loginTypeChange(){
            if(this.loginType === 'username') this.loginType='email'
            else this.loginType='username'
        },
        onceClick(){
            console.log('once....')
        },
        keyEvent(){
            console.log('keyEvent...')
        },
        dataUpdate(){
            this.count++
        }
    },
    directives:{//local directive.....
        bDirective:{
            inserted(el, binding){
                console.log('bDirective...'+el.tagName+','+
                    el.parentElement.tagName)
                var s=JSON.stringify
                el.innerHTML=
                    'name:'+s(binding.name)+'<br/>'+
                    'value:'+s(binding.value)+'<br/>'+
                    'expression:'+s(binding.expression)+'<br/>'+
                    'argument:'+s(binding.arg)
            }
        }
    }
})