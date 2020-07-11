import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css';
import Home from './components/home/Home';
import CoinPage from './components/graphPage/graphPage.js';
import Ticker from './components/Ticker';
import axios from 'axios';

class App extends Component {

  state = {
    coins: []
  }

  //SERVER PROMISE-REQUEST==========================================
  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=16e97361-585c-4270-bb8b-1f2a39fc956a"
      ).then(response => {
        this.setState({ //set state to coin list. Data twice because of how the objects are designed in API
          coins: response.data.data
        })//end setstate
      })//end then
      .catch((err) => console.log(err));
  }
  // =================================================================


  
  
  render() {
    
    // coins.forEach(coin=>{
    //   console.log('{id:'+coin.id+', name: '+coin.name+'')
    // })

    return (
      <div >
        {/* <Home coins={this.state.coins} /> */}
        <Ticker coins={this.state.coins} />
        {/* <Home coins={this.state.coins} /> */}

        {/* No Renders in App.js. Routes only */}
        <Switch>
          <Route exact path="/" render={(props) => <Home coins={this.state.coins} {...this.state.coins} />} />
          <Route exact path="/ticker" render={(props) => <Ticker coins={this.state.coins} {...props} />} />
          <Route path="/coin" render={(props) => <CoinPage coins={this.state.coins} {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;