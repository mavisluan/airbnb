import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import { data } from './static-data'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />   
        <div className='explore'>
          <h2>Explore Airbnb</h2>
          <div className='categories'>
            {data.explore.map( category => (
              <div className='category'>
                <img 
                  src={category.src} 
                  alt={category.name}
                  width='100px'
                  height='70px'
                />
                <span>{category.name}</span>
              </div>
            ))}
          </div>
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
