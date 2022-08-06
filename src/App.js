import './App.css';
import ToDoItemsContainer from "./components/toDoItems/ToDoItemsContainer";
import InputBarContainer from "./components/input/InputBarContainer";

function App() {
  return (
    <div className="App">
      <div className={'main-box'}>
        <InputBarContainer/>
        <ToDoItemsContainer/>
      </div>
    </div>
  );
}

export default App;
