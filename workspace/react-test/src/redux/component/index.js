import React from 'react';
import { connect } from 'react-redux';
import { testAction } from '../action';

class Component1 extends React.Component {
    constructor(props){
        super(props)
        this.state={inputData:''}

        //이 component에서의 유저 이벤트 ....
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(event){
        //<input>이 controlled component가 되게..
        this.setState({inputData: event.target.value})
    }
    handleSubmit(event){
        //submit 버튼이 click 되면.. 입력한 데이터로 데이터 변경 흐름이 진행되야
        //즉 action 이 발생되어야..
        //이 Component는 화면출력이 주 목적인 presentation component이다..
        //여기서는 상위 함수만 호출(container component)
        //상위에서 redux에 action 발생..
        this.props.onSubmit(this.state.inputData)
        event.preventDefault()
    }
    render(){
        return (
            <div>
                <h3>Redux Test</h3>
                <form onSubmit={this.handleSubmit}>
                    name:<input type="text" value={this.state.inputData}
                        onChange={this.handleChange}/>
                    <input type="submit" value="submit"/>

                    <div>{this.props.result}</div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch) => {
    return {
        //이곳에서 리턴시킨 함수가 하위 Component에 props 로 셋팅된다..
        //onSubmit 은 개발자 임의 이름이다..
        onSubmit: (value) => {
            console.log('11111...'+value)
            //action 발생...
            dispatch(testAction(value))
        }
    }
}

//connect의 첫번째 매개변수로 지정.. redux에 의해 자동 호출..
//app 데이터를 받기 위해서..
//매개변수 값이 action 발생에 의한 reducer의 데이터이다..
const mapStateToProps = (state) => {
    return {
        //여기서 리턴 시킨 것이 하위 component 속성 즉 props 로 들어간다..
        //testResult : 는 reducer 쪽에 데이터 식별자.. 개발자가 지정한...
        result: state.testResult
    }
}

//connect... redux의 함수..
//HOC 기능...(High Order Component)
//매개변수로 component를 받았다..
//Component를 리턴시킨다..
//export 시킨 component는 Component1 이 아니라.. 새로 만들어진..
//Component1 을 하위로 사용하는 container component 이다..

//connect 의 매개변수가 두개인데..
//첫번째 매개변수가.. state 값을 받기 위한 개발자 함수.... 자동 호출..
//두번째 매개변수가 action 을 발생시키기 위한 dispath를 받기 위한 개발자 함수.. 
//자동 호출..

//아래의 결과로만 보자면..
//<Comnponent1 onSubmit="~~~~"/> 을 출력하는 Component가 만들어진거다..
const TestComponent1=connect(mapStateToProps, mapDispatchToProps)(Component1)

//stateless functional component...
//component가 render 함수에 return 만 작성되는 경우.. 축약...
//매개변수가 props 값이다.. 원래는 this.props.result 로 해야하는데 아래처럼..
const Component2 = ({result}) => (
    <div>
        I am Component2
        <br/>
        {result}
    </div>
)

//Component1과 동일한 함수를 연결햇는데.. 만약에 이 component 를 위한 데이터
//가 다르게 구성된다면.. 다른 함수 만들어서..
const TestComponent2 = connect(mapStateToProps, null)(Component2)

export const ReduxRootComponent = () => (
    <div>
        <TestComponent1/>
        <TestComponent2/>
    </div>
)
