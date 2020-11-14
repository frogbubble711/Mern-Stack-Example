import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Index from './components/index.component';
import Favourites from "./components/favourites.component";
import Login from './components/Login'
import Register from './components/Register'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={'/'} className="navbar-brand">Favourite Movies APP</Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to={'/index'} className="nav-link">Movies List</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/favourites'} className="nav-link">Favourites</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
                            <Route path='/index' component={ Index } />
              <Route path='/favourites' component={ Favourites } />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
