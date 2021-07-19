import React, { Component }from 'react';

import CountButton from './CountButton'

// function App() {
//   return (
//     <div className="App">
//      hola
//     </div>
//   );
// }

export class App extends Component {
  state = {
    nombre: 'Cori',
    count: 0,
  }
  handle_increment = () => {
    this.setState({count: this.state.count + 1});
  }
  handle_decrement = () => {
     this.setState({count: this.state.count - 1});
  }
  render= () => {
    return (
      <div>
        <CountButton 
          handle_function={this.handle_decrement} 
          text="-" />
        {this.state.count}
        <CountButton 
          handle_function={this.handle_increment} 
          text="+" />
       
      </div>
    );
  };
}

export default App;
