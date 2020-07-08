import React, { Component } from 'react';
import Navbar from './../nav/Navbar'


const CoinPage =(props)=> {


    const displayInfo =()=>{
        // let c=props.coins[0];
        // let lastUpdate=new Date(c.last_updated)
        return props.coins.map((eachCoin)=>{
            return (
                <div style={{marginBottom: '15px'}} key={eachCoin.id}>
                    <h1>{eachCoin.name}</h1>
                    <h3>Price: <span>${eachCoin.quote.USD.price.toFixed(2)}</span></h3>
                    <h3>Last Updated: <span>{eachCoin.last_updated}</span></h3>
                    <h3>Circulating Supply: <span>{eachCoin.circulating_supply}</span></h3>
                    <h3>Total Supply: <span>{eachCoin.total_supply}</span></h3>
                    <h3>Max Supply: <span>{eachCoin.max_supply}</span></h3>
                    <h1>{eachCoin.symbol}</h1>
                </div>                
            )
        })
    }//end display

    // const coinBanner =()=>{
    //     return props.coins.map((each)=>{
    //         each.symbol+' '+each.quote.USD.price.toFixed(2)+'  '
    //     })
        
    // }


    return (
        <div>
            <Navbar />               
            <br />
            {displayInfo()}
            {/* {coinBanner()} */}
        </div>
    );
}

export default CoinPage;