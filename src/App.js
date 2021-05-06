import { useDispatch, useSelector } from 'react-redux';
import { delayedAdd, remove, toggle } from './redux/actions/todo';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const items = useSelector(state => state);

  function onAddCallback(event) {
    const data = new FormData(event.target);
    dispatch(delayedAdd(data.get('text')));

    event.preventDefault();
  }

  function onRemoveCallback(id) {
    dispatch(remove(id));
  }

  function onToggleCallback(id) {
    dispatch(toggle(id));
  }

  const output = Object.keys(items).map(id => (
    <li key={id}>
      <span onClick={() => onToggleCallback(id)}
        style={{ textDecoration: items[id].done ? "line-through" : "none" }}>
        {items[id].text}
      </span>
      <button onClick={() => onRemoveCallback(id)}>Remove</button>
    </li>
  ));

  return (
    <div className="App">
      <form onSubmit={onAddCallback}>
        <input type="text" name="text" required />
        <button>Add</button>
      </form>
      <ul>
        {output}
      </ul>
    </div>
  );
}

export default App;