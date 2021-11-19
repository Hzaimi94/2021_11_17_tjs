import React from "react";
import { connect } from "react-redux";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import Header from "./components/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import Navbar from "./components/Navbar/Navbar";
import { REST_ADR, REST_RESOURCES } from "./config/config";

import store, {
  currentInitialState,
  resourcesInitialState,
} from "./store/store.js";

class App extends React.Component {
  // componentDidMount() {
  //   fetch(REST_ADR + REST_RESOURCES.images, { method: "GET" })
  //     .then((f) => {
  //       return f.json();
  //     })
  //     .then((arr) => this.setState({ images: arr }));
  // }

  componentDidUpdate() {
    // console.log(
    //   "%c%s",
    //   "font-size:20pt;color:red",
    //   "Change complete " + this.state.counter
    // );
    //console.log(JSON.stringify(this.state));
  }

  // C'est obligatoirement 1 composant parent, pas de siblings !!!!
  // Donc solution encapsuler dans <> </> pas de DIV !!!!
  render() {
    console.log("App", this.props);
    return (
      <>
        <Header />
        <div className="App">
          <FlexLayout>
            <MemeViewer
              meme={this.props.current}
              image={this.props.images.find(
                (e) => e.id === this.props.current.imageId
              )}
            ></MemeViewer>
            <MemeForm
              meme={this.props.meme}
              onMemeChange={(meme) => {
                this.setState({ current: meme });
              }}
              images={this.props.images}
            ></MemeForm>
          </FlexLayout>
        </div>
      </>
    );
  }
}

function mapStateToProps(state, own) {
  return {
    ...own,
    current: state.current,
    images: state.resource.images,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

// Je connect state et dispatch à mon APP
export default connect(mapStateToProps, mapDispatchToProps)(App);
