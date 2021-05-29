import Todo  from './components/Todo';

function App() {
  return (
    <div className='appContainer'>
      <h1>MY TODOS</h1>
      <Todo text='Learn React'/>
      <Todo text='Explore React'/>
      <Todo text='Master React'/>
    </div>
  );
}

export default App;
