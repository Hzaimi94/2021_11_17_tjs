import React from "react";
import Button from "./components/Button/Button";

class App extends React.Component {
  counter = 0;
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      value: 0,
    };
  }

  componentDidUpdate() {
    console.log('%c%s', 'font-size:20pt;color:red', 'Change complete ' +this.state.counter)
  }

  render() {
    return (
      <div className="App">
        counter:{this.state.counter}
        <br />
        <Button
          text="Minus 1"
          onButtonClicked={() => {
            this.counter--;
            this.setState({counter:this.state.counter-1})
            //this.forceUpdate() à ne jamais utiliser même si ça marche
            console.log('minus log', this.state);
          }}
          bgColor="red"
        ></Button>
        <Button
          text="Plus 1"
          onButtonClicked={() => {
            this.setState({counter:this.state.counter+1})
            console.log('plus log', this.state);
          }}
          bgColor="green"
        ></Button>
      </div>
    );
  }
}

export default App;
