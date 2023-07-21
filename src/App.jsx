import Controls from './components/Controls';
import ReviewList from './components/ReviewList';
import ramenReviews from './data/ramen-reviews.json';
import logo from './logo.svg';
import './App.css';

console.log(ramenReviews);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ramen Reviews</h1>
      </header>

      <hr />

      <Controls />

      <ReviewList />
    </div>
  );
}

export default App;
