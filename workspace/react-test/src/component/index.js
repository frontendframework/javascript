import React, { Component } from 'react';
import './test1';//단순 실행..
import './test2';
import ComponentDefMain from './test3';

class ComponentMain extends Component {
    render(){
        return (
            <div>
                <h3>Component Test</h3>
                <ComponentDefMain/>
            </div>
        )
    }
}
export default ComponentMain