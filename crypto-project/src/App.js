import React, { PureComponent } from 'react'
import { Link, Switch, Route } from 'react-router-dom';
import './App.css'
import 'bulma/css/bulma.css'
// import Navbar from './components/nav/Navbar'
import Home from './components/home/Home'
import CoinPage from './components/coinPage/CoinPage.js'
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
      <div >
        {/* No Renders in App.js. Routes only */}
        <Switch>
          <Route exact path="/" render={(props)=><Home {...props}/>} />
          <Route path="/coin" render={CoinPage} />
        </Switch>
      </div>
    );
  
}

export default App;