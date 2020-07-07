import React, { PureComponent } from 'react'
import Navbar from './components/nav/Navbar'
import './App.css'
import Home from './components/home/Home'
import 'bulma/css/bulma.css'

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Home />
        
      </div>
    )
  }
}

export default App
