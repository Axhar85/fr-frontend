import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  let [data, setData]= useState([])
  let [user, setUser]= useState('')

  useEffect(() => {
    fetch('http://localhost:5000/students')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  const handleForm = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/students', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        user: user
      })
    })
  }

  return (
    <div className="App">
    <h1>Wild Students</h1>
      <form onSubmit= {handleForm}>
        <input 
          value={user}
          onChange={(event) => setUser(event.target.value)}
          placeholder= 'Student name ...' />
        <button>Add student</button>
      </form>
      <h3>List of students</h3>
      {
        data.map((student, index) => (
          <p key={index}>{student.user}</p>
        ))
      }
    </div>
  );
}

export default App;
