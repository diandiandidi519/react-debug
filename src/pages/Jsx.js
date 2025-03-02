import * as React from "react";

// function FunctionApp() {
//   const [count, setCount] = React.useState(0);
//   const handleClick = (value) => {
//     setCount((value) => value + 1);
//   };
//   console.log(count);
//   return (
//     <div className="container" onClick={handleClick}>
//       <p>count:{count}</p>
//       {/* <img src={logo} className="App-logo" alt="logo" />
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
//       </a> */}
//     </div>
//   );
// }

// class Children extends React.Component {
//   render = () => <div>hello,world</div>;
// }

// const FunctionComponent = () => <div>hello,world</div>;
// /* TODO: Ref属性是一个函数 */
// export default class Index extends React.Component {
//   currentDom = null;
//   currentComponentInstance = null;
//   currentFn = null;
//   componentDidMount() {
//     console.log(this.currentDom);
//     console.log(this.currentComponentInstance);
//     console.log(this.currentFn);
//   }
//   render = () => (
//     <div>
//       <div ref={(node) => (this.currentDom = node)}>Ref模式获取元素或组件</div>
//       <Children ref={(node) => (this.currentComponentInstance = node)} />
//       <FunctionComponent ref={(node) => (this.currentFn = node)} />
//     </div>
//   );
// }

// class AppClass extends React.Component {
//   render() {
//     return <p>KaSong</p>;
//   }
// }

function AppFunc() {
  const [state, setState] = React.useState(0);
  const onClick = () => {
    setState(state + 1);
  };
  React.useEffect(() => {
    console.log("state", state);
  }, [state]);
  return <p onClick={onClick}>KaSong{state}</p>;
}
console.log("这是FunctionComponent：", AppFunc);
console.log("这是FunctionComponent Element：", <AppFunc />);

export default AppFunc;

// class App extends React.Component {
//   state = { number: 0 };
//   handleClick = () => {
//     debugger;
//     this.setState({ number: this.state.number + 1 }, () => {
//       console.log("callback1", this.state.number);
//     });
//     console.log(this.state.number);
//     this.setState({ number: this.state.number + 1 }, () => {
//       console.log("callback2", this.state.number);
//     });
//     console.log(this.state.number);
//     this.setState({ number: this.state.number + 1 }, () => {
//       console.log("callback3", this.state.number);
//     });
//     console.log(this.state.number);
//   };
//   componentDidMount() {
//     // debugger;
//   }
//   render() {
//     return (
//       <div>
//         {this.state.number}
//         <button onClick={this.handleClick}>number++</button>
//         <AppFunc count={this.state.number} />
//       </div>
//     );
//   }
// }

// console.log("这是ClassComponent：", App);
// console.log("这是ClassComponent Element：", <App />);
// console.log("这是root：", document.getElementById("root")._reactRootContainer);
// export default App;
