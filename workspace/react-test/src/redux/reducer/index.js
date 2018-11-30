import { combineReducers } from 'redux'

//app 전역에서 유지하는 데이터 표현...
//reducer는 개발자 함수이다.. redux에 의해 action 발생시 자동 호출된다..
//매개변수로 이전 app 의 상태 데이터와 지금 발생한 action 을 전달...
//action 을 분석해서 적절한 app 데이터 변경작업..
//state는 변경되는게 아니라.. 이전 state를 참조해서 새로운 state를 만드는거다
//reducer 함수는 pure function 으로 만들어야 한다..
const myReducer = (state = '', action) => {
    console.log('reducer....'+action.data)
    switch(action.type){
        case 'TEST_ACTION':
            return action.data
        default: 
            return state
    }
}

//app 전역에는 여러개의 reducer(여러 데이터..)
//모든 reducer가 계층으로 묶여서 관리되어야...
const appState=combineReducers({
    testResult: myReducer//이 reducer의 데이터를 이용하는 곳에서는 이곳에서
    //명시한 key값.. 즉 testResult로 이용...
})
export default appState