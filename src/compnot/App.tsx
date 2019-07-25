import * as React from "react";
import Content from "../compnot/content";
import Header from "../compnot/Header";
import Footer from "./Footer";
import "../styles/App.css";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
