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
      "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=a54b0c17-c6cd-43c8-8610-c34563bd6028"
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));


  // const rp = require('request-promise');
  // const requestOptions = {
  //   method: 'GET',
  //   uri: 'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  //   qs: {
  //     'start': '1',
  //     'limit': '5000',
  //     'convert': 'USD'
  //   },
  //   headers: {
  //     'X-CMC_PRO_API_KEY': 'a54b0c17-c6cd-43c8-8610-c34563bd6028'
  //   },
  //   json: true,
  //   gzip: true
  // };
  
  // rp(requestOptions).then(response => {
  //   console.log('API call response:', response);
  // }).catch((err) => {
  //   console.log('API call error:', err.message);
  // });

  // ======================================================================
  
  
  
  
    return (
      <div>
        <Navbar />
        <Home />
        
      </div>
    );
  
}

export default App;