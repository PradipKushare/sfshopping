import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose  } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import RouterConfig from 'Components/RouterConfig';
import reducer from './reducers';

const middleware = [ thunk ];

  if (process.env.NODE_ENV == 'production') {
    middleware.push(createLogger());
    var store = createStore(reducer, compose(applyMiddleware(...middleware)))
  }else{
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    var store = createStore(reducer, composeEnhancers(
     applyMiddleware(...middleware)))
}

class App extends Component {
  render(){
    return (
    <Provider store={store}>
     	 <RouterConfig />
    </Provider>
    )
  }
}

export default App;