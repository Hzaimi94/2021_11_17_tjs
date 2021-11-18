import React from "react";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import Header from "./components/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
  counter = 0;
  constructor(props) {
    super(props);
    this.state = {
      current: {
        titre: "First meme",
        text: "Stop cheating",
        x: 360,
        y: 500,
        fontSize: 27,
        fontWeight: "900",
        underline: true,
        italic: true,
        frameX: 0,
        frameY: 0,
        color: "red",
        imageId: 0,
      },
      images: [
        {
          id: 0,
          url: "img/empty1.jpg",
          titre: "meme1",
          h: 778,
          w: 736,
        },
        {
          id: 1,
          url: "img/empty2.jpg",
          titre: "meme2",
          h: 778,
          w: 736,
        },
      ],
    };
  }

  componentDidUpdate() {
    console.log(
      "%c%s",
      "font-size:20pt;color:red",
      "Change complete " + this.state.counter
    );
  }

  // C'est obligatoirement 1 composant parent, pas de siblings !!!!
  // Donc solution encapsuler dans <> </> pas de DIV !!!!
  render() {
    return (
      <>
        <Header />
        <div className="App">
          <FlexLayout>
            <MemeViewer
              meme={this.state.current}
              image={this.state.images.find(
                (e) => e.id === this.state.current.imageId
              )}
            ></MemeViewer>
            <MemeForm
              meme={this.state.current}
              onMemeChange={(meme) => {
                this.setState({ current: meme });
              }}
              images={this.state.images}
            ></MemeForm>
          </FlexLayout>
        </div>
      </>
    );
  }
}

export default App;
