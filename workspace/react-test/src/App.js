import React, { Component } from 'react';

import ComponentMain from './component';//파일명 안주면 그 폴더의 index.js
import ComponentDataMain from './props-state';
import ReduxApp from './redux';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { RouterMain, Always } from './router';

class App extends Component {
  render() {
    //라우팅 조건..Route와... 라이팅을 위한 링크..Link 모두 BrowserRouter 
    //하위 태그로 만들어야...
    //라우팅 조건을 <Switch>로 묶지 않다도 되기는 하지만.. 그러면 조건 만족
    //Component가 여러개면 모두 실행.<Switch>로 묶으면 만족하는 첫번째만 실행..
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li><Link to='/'>Component</Link></li>
                <li><Link to='/props-state'>Props-State</Link></li>
                <li><Link to='/redux'>Redux</Link></li>
                <li><Link to='/router/10'>RouterParam...</Link></li>
                <li><Link to='/always'>Always</Link></li>
              </ul>
            </nav>

            <Switch>
              <Route exact path='/' component={ComponentMain}></Route>
              <Route exact path='/props-state' component={ComponentDataMain}></Route>
              <Route exact path='/redux' component={ReduxApp}></Route>
              <Route exact path='/router/:id' component={RouterMain}></Route>
              <Route exact component={Always}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
