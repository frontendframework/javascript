import Vue from 'vue';
import VueFileComponent from './ComponentRoot.vue';

//component 정의후 global 로 등록,..
Vue.component('global-component',{//component 태그명.. 아무곳에서나 (심지어)
    //html 에서도 이 태그로.. 바로 이용..
    template:'<p>global-component....</p>'
})
//선언 따로 등록 따로..
var MyComponent1 = Vue.extend({
    template:'<p>global-component2...</p>'
})
//선언만 된거다. .이용하려면 꼭 등록하고 이용해야 한다.. local 혹은 global로..
Vue.component('global-component2', MyComponent1)

var MyComponent2 = Vue.extend({
    template:'<p>MyComponent2...</p>'
})
var MyComponent3 = Vue.extend({
    template:'<p>MyComponent3...</p>'
})
var MyComponent4 = Vue.extend({
    template:'<p>MyComponent4...</p>'
})

const LocalComponentMain = Vue.extend({
    template:`
        <div>
            <h3>local component</h3>
            <MyComponent2></MyComponent2>
            <my-component3></my-component3>
            <HelloWorld></HelloWorld>
            <hello-world></hello-world>
        </div>
    
    `
    , components:{//local 등록..
        MyComponent2,
        'MyComponent3': MyComponent3,
        'HelloWorld':MyComponent4//이름 바꾸어 등록 가능...
    }
})

export default Vue.extend({
    template:`
        <div>
            <div><global-component></global-component></div>
            <div><global-component2></global-component2></div>
            <div><LocalComponentMain></LocalComponentMain></div>
            <h3>Vue File Component</h3>
            <div><VueFileComponent></VueFileComponent></div>
        </div>
    `,
    components:{
        LocalComponentMain,
        VueFileComponent
    }
})