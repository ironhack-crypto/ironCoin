import React, { Component } from 'react';
import axios from 'axios';
import '../components.css';

const MarketPage=(props)=>{
    // state={
    //     news:[]
    // }

    // componentDidMount() {
    //     axios
    //       .get("https://cryptocontrol.io/api/v1/public/news?key=c5c485c15cb0060e490058e0f7d5d3d2").then(response =>{
    //           this.setState({
    //               news: response
    //           })
    //       })
    // }

    
    
    
        console.log(props.news)
        return (
            <div>
                <h1 style={{top: '150px', position: 'relative', fontSize: '25px'}}>Heeeerrrrrrooooooooooo!!</h1>            
            </div>
        );
    
}

export default MarketPage;