import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import CoinList from './LastApiData.json';
import Home from './components/home/Home';
import GraphPage from './components/graphPage/graphPage.js';
import Ticker from './components/Ticker';
import axios from 'axios';
import Navbar from './components/nav/Navbar';
import Contact from './components/contact/Contact';
import MarketPage from './components/marketPage/MarketPage';
import WindowDimensionsProvider from './components/windowDimensionsProvider/index';

class App extends Component {

  state = {
    coins: []
  }

  //SERVER PROMISE-REQUEST==========================================
  componentDidMount() {
    axios
      .get(// TAKE COMMENT OFF WHEN DEPLOYING AND PUT IN LIVE API!! vvvvv
        // "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=be474ff9-0c14-4391-8ae4-c85c6eabda97"
      ).then(response => {
        this.setState({ //set state to coin list. Data twice because of how the objects are designed in API
          coins: response.data.data.sort((a,b)=>{
            return b.quote.USD.price - a.quote.USD.price;
        })
        })//end setstate
      })//end then
      .catch((err) => {
        console.log(err)
        this.setState({// sets the state to default JSON file if error is returned
          coins: CoinList.sort((a,b)=>{
            return b.quote.USD.price - a.quote.USD.price;
        })
        })
      });
  }
  // =================================================================


  
  
  render() {
//CODE TO PRINT ENTIRE OBJECT FROM API CALL====================================================  
    // let str = JSON.stringify(this.state.coins);
    // str = JSON.stringify(this.state.coins, null, 4); // (Optional) beautiful indented output.
    // console.log(str); // Logs output to dev tools console.
    // alert(str);
// ================================================================================================



    return (
      <WindowDimensionsProvider>
      <div>
            <Navbar coins={this.state.coins} />
              <Switch>
                <Route exact path="/" render={(props) => <Home coins={this.state.coins} {...this.state.coins} />} />
                <Route exact path="/market" render={(props) => <MarketPage coins={this.state.coins} {...props} />} />
                <Route path="/graph" render={(props) => <GraphPage coins={this.state.coins} {...props} />} />
                <Route path="/contact" render={(props) => <Contact coins={this.state.coins}  {...props} />} />
              </Switch>
      </div>
      </WindowDimensionsProvider>
    );
  }
}

export default App;