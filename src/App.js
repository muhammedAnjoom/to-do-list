import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css'
import createTask from './modals/createTask';

function App() {
  return (
    <div className="App">
        <TodoList/>
    </div>
  );
}

export default App;
