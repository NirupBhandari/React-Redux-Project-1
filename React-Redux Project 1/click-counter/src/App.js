import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <div className="card">
        <h2>Count: {count}</h2>
        <button class="button1" onClick={handleIncrement}>
          Increase
        </button>
        <button class="button2" onClick={handleDecrement}>
          Decrease
        </button>
      </div>
    </>
  );
}

export default App;
