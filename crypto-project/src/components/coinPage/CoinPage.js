import React, { Component } from 'react';
import Navbar from './../nav/Navbar'


const CoinPage =()=> {


    const displayInfo =()=>{
        return <div>
            <h1>[Name]</h1>
            <h3>Price: <span>00</span></h3>
            <h3>Last Updated: <span>00</span></h3>
            <h3>Circulating Supply: <span>00</span></h3>
            <h3>Total Supply: <span>00</span></h3>
            <h3>Max Supply: <span>00</span></h3>
            <h1>[Symbol]</h1>
        </div>
    }

    return (
        <div>
            <Navbar />               
            <br />
            {displayInfo()}
        </div>
    );
}

export default CoinPage;