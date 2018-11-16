import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Explore from './Components/Explore'
import { data } from './static-data'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Explore />
        <div className='plus'>
          <h2>Introducing Airbnb Plus</h2>
          <div
            className='plus-image'
          />
        </div>
        <div className='recommended'>
          <h2>Recommended for you</h2>
          <div className='cities'>
            {data.recommended.map(city => (
              <div className='city'>
                <img 
                  className='city-image'
                  src={city.src}
                  alt={city.name}
                />
                <div className='city-info'>
                  <span>{city.name}</span>
                  <span>${city.price}/night average</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
