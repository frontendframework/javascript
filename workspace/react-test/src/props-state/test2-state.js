import React, { Component } from 'react';

export class StateTestMain extends Component {
    constructor(props){
        super(props)
        this.state={num:0, sum:0}//state 값 초기화는 생성자에서...
    }

    onClick(){
        //state값 변경은 꼭 setState() 함수로..
        //state 값 변경되면 화면 다시 render....
        //setState 함수는 비동기 함수이다..
        //변경후 변경된 값을 이용하려면 꼭 setState 함수에 callback 등록해서
        //그곳에서..
        this.setState({
            num: this.state.num +1,
            sum: this.state.sum + this.state.num
        },()=>{
            console.log(`state changed callback.. ${this.state.num}, ${this.state.sum}`)
        });
        //state 값 변경후 변경된 값으로 바로 이용하고 싶은경우...
        console.log(`state changed.. ${this.state.num}, ${this.state.sum}`)
    }
    render(){
        return (
            <div>
                <h3>state test...</h3>
                <span>num: {this.state.num}, sum:{this.state.sum}</span>
                <button onClick={this.onClick.bind(this)}>click</button>
            </div>
        )
    }
}