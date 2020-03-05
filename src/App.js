import React from "react";
import "./App.css";
import InputanUang from "./InputanUang";
const BASE_URL = "https://api.exchangeratesapi.io/latest ";

class App extends React.Component {
  state = {
    tukarUangOptions: []
  };

  componentDidMount() {
    fetch(BASE_URL)
      .then(respon => respon.json())
      .then(data => {
        console.log(data);
        this.setState({
          tukarUangOptions: [data.base, ...Object.keys(data.rates)]
        });
      });
  }

  render() {
    console.log(this.state.tukarUangOptions);
    return (
      <React.Fragment>
        <h1>Money Changer</h1>;
        <InputanUang tukarUangOptions={this.state.tukarUangOptions} />
        <h1>=</h1>
        <InputanUang tukarUangOptions={this.state.tukarUangOptions} />;
      </React.Fragment>
    );
  }
}

export default App;
