import React, {Component} from 'react';
import Header from './components/Nav/Header';
import LogIn from './components/Pages/Log-In'

class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <LogIn/>

      </div>
    )
  }
}

export default App;