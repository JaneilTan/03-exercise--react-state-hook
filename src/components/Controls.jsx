import './Controls.css';

const Controls = (props) => {
  const { counter, setCounter } = props;

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <div className="controls">
      <p>Reviews to display: {counter}</p>

      <div className="control-btn-group">
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
      </div>
    </div>
  );
};

export default Controls;
