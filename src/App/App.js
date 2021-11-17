import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'

function App() {
  return (
    <div className="App">
        <Button text="OK" onButtonClicked={(arg)=>{
          alert('Vilain user, arrête de cliquer !!')
        }}/>
        <Button text="Cancel"/>
        <Button text="Don't"/>
        <Button text="You will.."/>
    </div>
  );
}

export default App;
