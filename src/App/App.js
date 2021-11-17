import React from "react";
import Button from "./components/Button/Button";

class App extends React.Component {
  counter = 0;
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        counter:{this.counter}
        <br />
        <Button
          text="Minus 1"
          onButtonClicked={() => {
            this.counter--;
            //this.forceUpdate() à ne jamais utiliser même si ça marche
            console.log(this.counter);
          }}
          bgColor="red"
        ></Button>
        <Button
          text="Plus 1"
          onButtonClicked={() => {
            this.counter++;
            console.log(this.counter);
          }}
          bgColor="green"
        ></Button>
      </div>
    );
  }
}

export default App;
