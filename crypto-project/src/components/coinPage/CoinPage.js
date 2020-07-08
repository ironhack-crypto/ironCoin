import React, { Component } from 'react';
import Navbar from './../nav/Navbar'


const CoinPage =(props)=> {


    const displayInfo =()=>{
        let c=props.coins[0];
        // let lastUpdate=new Date(c.last_updated)
        return <div>
            <h1>{c.name}</h1>
            <h3>Price: <span>${c.quote.USD.price.toFixed(2)}</span></h3>
            <h3>Last Updated: <span>{c.last_updated}</span></h3>
            <h3>Circulating Supply: <span>{c.circulating_supply}</span></h3>
            <h3>Total Supply: <span>{c.total_supply}</span></h3>
            <h3>Max Supply: <span>{c.max_supply}</span></h3>
            <h1>{c.symbol}</h1>
        </div>
    }


    const coinBanner =()=>{
        return props.coins.map((each, total)=>{
            total+= each.symbol +' '+each.quote.USD.price.toFixed(2)+'  '
        })
    }


    console.log(props.coins[0])
    return (
        <div>
            <Navbar />               
            <br />
            {displayInfo()}
            {coinBanner()}
        </div>
    );
}

export default CoinPage;