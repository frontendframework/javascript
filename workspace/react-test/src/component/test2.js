import React from 'react'
import ReactDOM from 'react-dom'

//with JSX , without JSX
const element1=(
    <div className="greeting">
        Hello World
    </div>
)

const element2 = React.createElement(
    'div',
    {className: 'greeting'},
    'Hello World'
)

const element = 
    <div>
        <h3>with, without JSX</h3>
        {element1} {element2}
    </div>;

ReactDOM.render(
    element,
    document.getElementById("test2")
)