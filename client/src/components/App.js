import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import RestaurantNew from './restaurants/RestaurantNew';


class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return (
      <div>
          <BrowserRouter>
              <div className="container">
                  <Header />
                  <Route exact path="/" component={Landing}/>
                  <Route exact path="/dashboard" component={Dashboard}/>
                  <Route exact path="/restaurants/new" component={RestaurantNew} />
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
