import React, {Component}  from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css'
import AllApp from './component/AllApp.jsx'
class App extends Component {
  render(){
  return (
    <div className="App">
      <AllApp />
    </div>
  );
  }
}

export default App;
