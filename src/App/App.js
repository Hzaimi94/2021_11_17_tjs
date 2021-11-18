import React from "react";
import MemeViewer from "./components/MemeViewer/MemeViewer";

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
    console.log(
      "%c%s",
      "font-size:20pt;color:red",
      "Change complete " + this.state.counter
    );
  }

  render() {
    return (
      <div className="App">
        <MemeViewer
          meme={{
            titre: "First meme",
            text: "Stop cheating",
            x: 200,
            y: 600,
            fontSize: 18,
            fontWeight: "200",
            underline: true,
            italic: true,
            frameX: 0,
            frameY: 0,
            color: "black",
          }}
          image={{
            id: 0,
            url: "img/empty1.jpg",
            titre: "meme1",
            h: 778,
            w: 736,
          }}
        ></MemeViewer>
      </div>
    );
  }
}

export default App;
