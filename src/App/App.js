import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Button text="OK" style={{fontSize:'40pt'}}/>
      <Button text="Cancel" color="yellow" />
      <Button
        text="Don't"
        bgColor="tomato"
        onButtonClicked={(arg) => {
          alert("Vilain user, arrête de cliquer !!");
        }}
      />
      <Button text="You will.." />
    </div>
  );
}

export default App;
