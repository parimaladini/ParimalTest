import React from 'react';
import './AdmissionForm.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Admission Form</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="address">Address:</label>
        <textarea id="address"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
