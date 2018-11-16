import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import { data } from './static-data'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />   
        <div className='search-input'>
          
        </div>
        <div className='explore'>

        </div>
        <div className='plus'>

        </div>
        <div className='recommended'>

        </div>
      </div>
    );
  }
}

export default App;
