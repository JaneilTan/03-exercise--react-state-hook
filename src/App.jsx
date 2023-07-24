import React, { useState } from 'react';
import Controls from './components/Controls';
import ReviewList from './components/ReviewList';
import ramenReviews from './data/ramen-reviews.json';
import logo from './logo.svg';
import './App.css';




function App() {
  const [reviews] = useState(ramenReviews);
  // const [counter, setCounter] = useState(10);
  const [limit, setLimit] = useState(10);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ramen Reviews</h1>
      </header>

      <hr />

      <Controls limit={limit} setLimit={setLimit} />

      <ReviewList reviews={reviews} limit={limit}/>
    </div>
  );
}

export default App;
