import React, { Component } from 'react';

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
class New1 extends Component {
    render() {
        //const { new1 } = this.props;
        const new1 = this.props.new1;
        const newoList = new1.map( newo => {
                                return(
                                    <div className="newo" key = { newo.id }>
                                        <div> Name: { newo.name }</div>
                                        <div> Age: { newo.age }</div>
                                        <div> Belt: { newo.belt }</div>
                                    </div>
                                )
                                }
                      )
    return(
        <div className = "newo-list">
            { newoList}
        </div>
    )
    }
}
export default New1;
