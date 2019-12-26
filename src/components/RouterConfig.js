import React, { Component } from 'react';  
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Footer from 'Components/sub_parts/Footer'
import Header from 'Components/sub_parts/Header'

import NotFound from 'Components/NotFound'
import HomePage from 'Components/Home/HomePage'

class RouterConfig extends Component{
 render() {
    return (
      <Router>
        <Header />
             <Switch basename={ '/' }>
                <Route exact path={'/'} component={HomePage}></Route>
                <Route  path={'/home'} component={HomePage}></Route>
                <Route  path={'/home'} component={Header}></Route>
  
                <Route component={NotFound}></Route>
              </Switch>
             <Footer />   
        </Router>
  )
 } 
}

export default RouterConfig;