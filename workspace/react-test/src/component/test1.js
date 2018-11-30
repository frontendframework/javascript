import React from 'react'
import ReactDOM from 'react-dom'

const name="kkang"
const user = {
    firstName:'gildong',
    lastName:'hong'
}
function formatName(obj){
    return obj.firstName+' '+obj.lastName
}

//JSX 의 구문.. expression(결과가 양산되는 구문..)...추가 가능..
const element =
    <div>
        <h3>JSX Test</h3>
        <div>Hello, {name}</div>
        <div>{user.firstName} {user.lastName}</div>
        <div>{10 + 20}</div>
        <div>{formatName(user)}</div>
    </div>;

ReactDOM.render(
    element,
    document.getElementById('test1')
);