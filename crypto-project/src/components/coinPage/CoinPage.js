import React, { Component } from 'react';
import Navbar from './../nav/Navbar'


const CoinPage =(props)=> {


    const displayInfo =()=>{
        // let c=props.coins[0];
        // let lastUpdate=new Date(c.last_updated)
        return props.coins.map((eachBeer)=>{
            return (
                <div style={{marginBottom: '15px'}} kay={eachBeer.id}>
                    <h1>{eachBeer.name}</h1>
                    <h3>Price: <span>${eachBeer.quote.USD.price.toFixed(2)}</span></h3>
                    <h3>Last Updated: <span>{eachBeer.last_updated}</span></h3>
                    <h3>Circulating Supply: <span>{eachBeer.circulating_supply}</span></h3>
                    <h3>Total Supply: <span>{eachBeer.total_supply}</span></h3>
                    <h3>Max Supply: <span>{eachBeer.max_supply}</span></h3>
                    <h1>{eachBeer.symbol}</h1>
                </div>                
            )
        })
    }//end display


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