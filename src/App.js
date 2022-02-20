import * as React from 'react';
import logo from "./logo.svg";
import "./App.css";
// function App() {
//   const handleClick = (value) => console.log(value);
//   return (
//     <div className="container" onClick={handleClick}>
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </div>
//   );
// }

// console.log(document.getElementById("root")._reactRootContainer);
// class AppClass extends React.Component {
//   render() {
//     return <p>KaSong</p>;
//   }
// }
// console.log("这是ClassComponent：", AppClass);
// console.log("这是Element：", <AppClass />);

// function AppFunc() {
//   return <p>KaSong</p>;
// }
// console.log("这是FunctionComponent：", AppFunc);
// console.log("这是Element：", <AppFunc />);

class App extends React.Component {
  state = { number: 0 };
  handleClick = () => {
    debugger;
    this.setState({ number: this.state.number + 1 }, () => {
      console.log("callback1", this.state.number);
    });
    console.log(this.state.number);
    this.setState({ number: this.state.number + 1 }, () => {
      console.log("callback2", this.state.number);
    });
    console.log(this.state.number);
    this.setState({ number: this.state.number + 1 }, () => {
      console.log("callback3", this.state.number);
    });
    console.log(this.state.number);
  };
  componentDidMount() {
    // debugger;
  }
  render() {
    return (
      <div>
        {this.state.number}
        <button onClick={this.handleClick}>number++</button>
      </div>
    );
  }
}
export default App;
