import React from "react";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import MemeForm from "./components/MemeForm/MemeForm";
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
        <FlexLayout>
        <MemeViewer
          meme={{
            titre: "First meme",
            text: "Stop cheating",
            x: 370,
            y: 530,
            fontSize: 27,
            fontWeight: "900",
            underline: true,
            italic: true,
            frameX: 0,
            frameY: 0,
            color: "red",
          }}
          image={{
            id: 0,
            url: "img/empty1.jpg",
            titre: "meme1",
            h: 778,
            w: 736,
          }}
        ></MemeViewer>
        <MemeForm></MemeForm>
        </FlexLayout>
      </div>
    );
  }
}

export default App;
