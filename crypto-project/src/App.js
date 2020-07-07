import React, { PureComponent } from 'react'
import Navbar from './components/nav/Navbar'
import './App.css'
import Home from './components/home/Home'
import 'bulma/css/bulma.css'
import axios from 'axios'

const App =()=> {
  
  //SERVER PROMISE-REQUEST==========================================

  axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=16e97361-585c-4270-bb8b-1f2a39fc956a"
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  // =================================================================


  
  
  
  
    return (
      <div>
        <Navbar />
        <Home />
        
      </div>
    );
  
}

export default App;