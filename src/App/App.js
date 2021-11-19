import React from "react";
import { connect } from "react-redux";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import Header from "./components/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
// Ne pas importer {} le composant deconnecté
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import Navbar from "./components/Navbar/Navbar";
import { REST_ADR, REST_RESOURCES } from "./config/config";
import { Switch, Route } from "react-router-dom";

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
        <Navbar></Navbar>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <h1>Bonjour et bienvenue</h1>
              New meme generator 2021
            </Route>
            <Route path="/thumbnail">
              <MemeThumbnail></MemeThumbnail>
            </Route>
            <Route path="/edit">
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
            </Route>
            <Route path="/">
              <h1>404 !! Not found</h1>
            </Route>
          </Switch>
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

// Je connecte state et dispatch à mon APP
export default connect(mapStateToProps, mapDispatchToProps)(App);
