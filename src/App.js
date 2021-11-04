import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component{
  render(){
  return (
    <React.Fragment>
    <Navbar />
      <main className="container">

      </main>
    </React.Fragment>
    );
  }
}

export default App;
