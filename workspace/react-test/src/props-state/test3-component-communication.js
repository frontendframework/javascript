import React, { Component } from 'react';

class Todo extends Component {
    //이벤트 함수.. 
    _onDelete(){
        //이벤트 발생시 상위에 데이터 전달해야한다...
        //속성(props)로 받은 상위의 함수를 호출해서 데이터 전달...
        this.props.onDelete(this.props.todo.id)
    }
    render(){
        return (
            <div>
                <span>{this.props.todo.text}</span>
                <button onClick={this._onDelete.bind(this)}>delete</button>
            </div>
        )
    }
}

//ajax 통신을 위한 node의 superagent 설치...
//import.. 코드 위에서 import 해도되고..
//코드 중간에서 하려면 require 함수 이용하면 되고...
var request=require('superagent')
export class CommunicationMain extends Component {
    constructor(){
        super()
        this.state={todos:[]}
    }
    //component lifecycle함수.. component가 render 된후 호출..
    componentDidMount(){
        //callback 함수에서 this가 component를 지칭하지 못해서..
        var self=this
        //서버연동..
        request.get('test.json')
            .accept('application/json')
            .end(function(err, res){
                if(err)
                    throw err
                self.setState({
                    todos: self.state.todos.concat(res.body.datas)
                })
            })

    }
    deleteTodo(id){
        this.setState({
            todos: this.state.todos.filter((todo)=>{
                return todo.id !== id
            })
        })
    }
    render(){
        var todos=this.state.todos.map((todo)=>{
            return (
                <li key={todo.id}>
                    <Todo onDelete={this.deleteTodo.bind(this)} todo={todo}/>
                </li>
                )
        })
        return (
            <div>
                <h3>Component Communication</h3>
                <ul>{todos}</ul>
            </div>
        )
    }

}