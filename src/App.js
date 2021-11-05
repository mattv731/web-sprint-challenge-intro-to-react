import React, { useState, useEffect } from 'react';
import Characters from './components/Characters'
import './App.css';
import axios from 'axios';

const App = () => {
const { data, setData } = useState('');

useEffect(() => {
  axios.get(`https://swapi.dev/api/people`)
  .then(resp => {
    setData(resp.data)
  })
  .catch(err => {
    console.error('error')
  })
}, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters data={data} />
    </div>
  );
}

export default App;
