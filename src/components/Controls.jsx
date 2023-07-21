import './Controls.css';

const Controls = () => {
  return (
    <div className="controls">
      <p>Reviews to display: 50</p>

      <div className="control-btn-group">
        <button>-1</button>
        <button>+1</button>
      </div>
    </div>
  );
};

export default Controls;
