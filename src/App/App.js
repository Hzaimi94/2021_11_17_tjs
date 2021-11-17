import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'

function App() {
  return (
    <div className="App">
        <Button text="OK"/>
        <Button text="Cancel"/>
        <Button text="Don't"/>
        <Button text="You will.."/>
    </div>
  );
}

export default App;
