import React, { Component } from 'react'

//ES6 로 component 선언... class 로 선언하기를 권장..
class Component1 extends React.Component {
    //하나의 Component 클래스는 render라는 이름의 함수를 포함해야 하고..
    //이 함수의 리턴 값이 화면 출력이다..
    render(){
        return (
            <div>I am Component1</div>
        )
    }
}

//위의 클래스는 클래스 선언이고.. JSX에 등록해 생성하든, createElement 함수로
//생성하든.. 생성해서 사용..

//stateless functional component 정의법...
//만약 component 가 render 함수 하나만 가지고.. render 함수내에 return 구문
//만 있다면 간단하게.. 
var Component2 = ({}) => <div>I am Component2</div>;

class ComponentDefMain extends Component {
    render(){
        return (
            <div>
                <Component1/>
                <Component2/>
            </div>
        )
    }
}

export default ComponentDefMain