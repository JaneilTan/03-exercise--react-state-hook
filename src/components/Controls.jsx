
import './Controls.css';

const Controls = ({ limit, setLimit }) => {
  // const { counter, setCounter } = props;
  
  
  
  const handleChange = async (event) => {
    const selectedValue = event.target.value;
    setLimit(Number(selectedValue));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  }

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  // const decrement = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1);
  //   }        
  // }
  return (
    <div className="controls">
      <p>Reviews to display: {limit}</p>
      <form form onSubmit={handleSubmit}>
        <label htmlFor="limit">
          <div className="control-btn-group">
            <select id="limit" value={limit} onChange={handleChange}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
        </label>
          {/* <div>
            <button onClick={decrement}>-1</button>
            <button onClick={increment}>+1</button>

          </div> */}
      </form>
    </div>
  );
};

export default Controls;
