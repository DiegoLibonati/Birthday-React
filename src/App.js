import './App.css';
import data from './data.js';
import React, { useState } from 'react';
import { List } from './components/List';

function App() {

  const [people, setPeople] = useState(data)

  const handleClear = () => {
    setPeople([])
  }

  return (
   <>
   <div className='main_container'>
      <h2>{people.length} birthdays today</h2>

      <List people = {people}></List>

      <button onClick={handleClear}>
        Clear ALL
      </button>
   </div>
   </>
  );
}

export default App;
