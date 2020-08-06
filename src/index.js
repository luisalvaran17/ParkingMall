import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render(){  
        return (
            <div>
                <h1>Hola mundo</h1><span><i></i></span>
                <h2>Hola mundo2</h2>
            </div>
        );
    }
}

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  
  