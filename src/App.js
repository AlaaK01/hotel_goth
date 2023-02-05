import React from 'react';
import './App.css';
import Footer from './Components/Footer.js'
import Header from './Components/Header.js'
import Main from './Components/Main.js'

class App extends React.Component {
  render() { 
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
