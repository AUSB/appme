import React, { Component } from 'react';
import New1 from './New1'
//import logo from './logo.svg';
//import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>My first React app!</h1>
//       <p>Welcome to my Territory:)</p>
      
//     </div>
//   );
// }

class App extends Component {
    state = {
        new1:[
            { name: 'ryu', age: 30, belt: 'black', id: 1},
            { name: 'Yoshi', age: 20, belt:'green', id: 2},
            { name: 'Crystal', age: 25, belt: 'pink', id: 3}
        ]
    }
    render() {
        return(
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome to my Territory:)</p>
        <New1 new1 = { this.state.new1 } /> 
      </div>
    );
  }
}

export default App;
