import logo from './logo.svg';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const items = useSelector(state => state);

  function onAddCalback(event) {
    const data = new FormData(event.target)
    
  }

  return (
    <div className="App">
      <form onSubmit={onAddCallback}>
        <input type="text" name="text" required/>
        <button>Add</button>
      </form>
      <ul>

      </ul>
    </div>
  );
}

export default App;



