import React, { useState } from 'react';
import './Todo.css';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue === '') {
      alert('Please enter something');
    } else {
      setTasks([...tasks, { text: inputValue, id: Date.now() }]);
      setInputValue('');
    }
  };
 
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id) => {
    const newText = prompt('Enter new text:');
    if (newText !== null) {
      setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
    }
  };

  return (
    <div className="container mt-5">
      <h2 style={{ textAlign: 'center', marginTop: '70px' }}>Here you can add and delete tasks (Todo List):</h2>
      <div className="hero">
        <label>Enter Task :</label>
        <input
          type="text"
          id="textcontect"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus
        />
        <button onClick={addTask}>Add</button>
        <ol id="main">
          {tasks.map(task => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button className="editbtn" onClick={() => editTask(task.id)}>Edit</button>
              <button className="delbtn" onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Todo;
