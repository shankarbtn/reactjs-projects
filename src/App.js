import Todo  from './components/Todo';
import Modal from './components/Modal';

function App() {
  return (
    <div className='appContainer'>
      <h1>MY TODOS</h1>
      <Todo text='Learn React'/>
      <Todo text='Explore React'/>
      <Todo text='Master React'/>
      <Modal />
    </div>
  );
}

export default App;
