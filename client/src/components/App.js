import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const MongNew = () => <h2>Mong New</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
  render(){
    return (
      <div>
          <BrowserRouter>
              <div className="container">
                  <Header />
                  <Route exact path="/" component={Landing}/>
                  <Route exact path="/restaurants" component={Dashboard}/>
                  <Route exact path="/new_Mong" component={MongNew} />
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
