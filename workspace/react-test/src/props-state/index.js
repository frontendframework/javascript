import React, { Component } from 'react';
import { PropsTestMain } from './test1-props';
import { StateTestMain } from './test2-state';
import { CommunicationMain } from './test3-component-communication';

class ComponentDataMain extends Component {
    render(){
        return (
            <div>
                <h3>Component Data Test</h3>
                <PropsTestMain/>
                <StateTestMain/>
                <CommunicationMain/>
            </div>
        )
    }
}

export default ComponentDataMain