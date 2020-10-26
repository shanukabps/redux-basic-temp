import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import { selectName, setName } from './features/counter/userSlice';

function App() {

  const [input, setInput] = useState("");
  const name = useSelector(selectName)
  const dispatch = useDispatch()

  const handelClick = () => {
    // console.log("clicled", input)
    dispatch(setName(input))
  }




  return (
    <div className="App">
      <header className="App-header">

        <h2>Update the name in the redux store</h2>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text" />
        <button onClick={handelClick}>update the name</button>
        <h1>{name}</h1>



        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
