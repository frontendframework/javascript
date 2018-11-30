import Vue from 'vue';

export default Vue.extend({
  template: `
  <div>
    <h3>component option test...</h3>
    <div>message: {{msg}}</div>
    <!--초기 데이터가 출력이 되고 그 데이터 값이 변경되었다고 하더라도
    화면에 업데이트 안되고 싶을때... -->
    <div v-once>only one message: {{msg}}</div>
    <input type="text" v-model="msg"/>

    <div>Computed message: "{{reversedMessage1}}"</div>
    <div>Method message : "{{reversedMessage2()}}"</div>

    <div>Computed No : {{computedNo}}</div>
    <div>Method No : {{methodNo()}}</div>
    <!-- @click : v-click 의 축약형-->
    <button @click="onNoChange">no change</button>
</div>
  `,
  data(){//Component 내부에서 유지해야 하는 데이터.. template, method 등에서
    //사용가능..
      return {
        msg:'hello',
        no:0
      }
  },
  computed: {//template을 위한 data... 일정정도 로직이 수행되서 발생하는 데이터를
    //template에서 작성하지 않기 위해서 사용..
    reversedMessage1: function(){
        return this.msg.split('').reverse().join('')
    },
    computedNo: function(){
        return this.no * 10
    }

  },
  methods:{//component 함수... template, computed.. 등에서 호출가능..
    reversedMessage2: function(){
        return this.msg.split('').reverse().join('')
    },
    methodNo: function(){
        return this.no * 10
    },
    onNoChange(){
        this.no += 1
    }
  }
})