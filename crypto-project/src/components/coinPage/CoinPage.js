import React, { useState } from 'react';
import Navbar from './../nav/Navbar'
import 'bulma/css/bulma.css'
import { Link, Switch, Route } from 'react-router-dom';
import CoinDetail from '../coindetail/CoinDetail'
import '../components.css';

const CoinPage = (props) => {

    //style={{marginBottom: '15px', backgroundColor: 'lightgray'}}
    const[state, setState] = useState({})
    const displayInfo = () => {
        
        return props.coins.map((eachCoin) => {
            return (
                <div key={eachCoin.id} className='box isDark'>
                    <h1>{eachCoin.name} / {eachCoin.symbol}</h1>
                    <h3>Price: <span>${eachCoin.quote.USD.price.toFixed(2)}</span></h3>
                    <h3>Last Updated: <span>{eachCoin.last_updated}</span></h3>
                    <h3>Circulating Supply: <span>{eachCoin.circulating_supply}</span></h3>
                    <h3>Total Supply: <span>{eachCoin.total_supply}</span></h3>
                    <h3>Max Supply: <span>{eachCoin.max_supply}</span></h3>
                    <button onClick={() => setState({...eachCoin})}>More</button>
                </div>
            )
        })
    }//end display


    return (
        <div >
            <Navbar />
            <div style={{ display: 'flex' }}>
                <br />
                <div style={{ width: '50%', display: 'block', marginTop:'18vh' }}>
                    {displayInfo()}
                </div>
            <CoinDetail {...state}/>
            </div>
        </div>
    );
}

export default CoinPage;