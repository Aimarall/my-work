import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const items = useSelector(state => state);

  function onAddCallback(event) {
    const data = new FormData(event.target);
    dispatch({ type: "ADD_TODO", text: data.get('text') });

    event.preventDefault();
  }

  function onRemoveCallback(id) {
    dispatch({ type: "REMOVE_TODO", id: id });
  }

  function onToggleCallback(id) {
    dispatch({ type: "TOGGLE_TODO", id: id });
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