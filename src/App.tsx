import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AddTodo } from './components/addtodo';
import { TodoList } from './components/todolist';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('Loading...');

  const fetchDataAction = async () => {
    const url: string = '/api';
    const response = await fetch(url);
    const data = await response.json();
    setMessage(data.data);
  };

  useEffect(() => {
    fetchDataAction();
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>{message}</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AddTodo />
        <TodoList />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
