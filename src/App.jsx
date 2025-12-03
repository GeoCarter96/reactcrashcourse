
import './App.css';
import Todo from './components/Todo.jsx';
import MyToDo from './components/MyToDo.jsx';
import Modal from './components/Modal.jsx'

function App() {
  return (
    <>
      <MyToDo />
      <div className="todo__wrapper">
      <Todo title="Finish Frotend Simplified"/>
      <Todo title="Finish Interview Section"/>
      <Todo title="Land a $100k Job"/>
      </div>
    {/*   <Modal /> */}
    </>
    
    
    
  );
}

export default App;
