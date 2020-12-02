import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './pages/Search';

class App extends Component {
  render() {
    return (

      <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <h1>(React) Google Books Search</h1>
              <h3>Search for and Save Books of Interest</h3>
              <Route path="/Search" exact={true} component={Search} />
              {/* <Route path="/Saved" exact={true} component={Saved} /> */}
            </div>
          </div>
      </Router>
    );
  }
}

export default App;
