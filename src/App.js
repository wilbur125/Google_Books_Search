import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './pages/Search';

class App extends Component {
  render() {
    return (

      <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Search/>
            </div>
          </div>
      </Router>
    );
  }
}

export default App;
