import React from 'react';
//redux에서 제공하는 component... 
//이 component를 app의 root component로 만들고 이곳에 reducer 등록..
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import appState from './reducer'
import { ReduxRootComponent } from './component'

let store=createStore(appState)

export default class ReduxApp extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <ReduxRootComponent/>
            </Provider>
        )
    }
}