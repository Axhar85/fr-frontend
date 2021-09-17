import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Students</h1>
      <form>
        <input placeholder= 'Student name ...' />
        <button>Add student</button>
      </form>
      <h3>List of students</h3>
    </div>
  );
}

export default App;
