import React, { Component, useRef } from 'react';
import Navbar from './nav/Navbar.js'
import { TimelineMax, TweenMax, Power3 } from 'gsap';


const Ticker =(props)=>{
    


    const tickWindow =()=>{
        return props.coins.map((eachCoin,val)=>{
            return (
                <div key={eachCoin.id} className={'test'+val}>
                    <h3>Price: <span>${eachCoin.quote.USD.price.toFixed(2)}</span></h3>
                    <h1>{eachCoin.symbol}</h1>
                </div>                
            )
        })
    }//end display
    

    const fadeOut =()=>{
        let tl=new TimelineMax
        tl.to('.test0',2,{opacity: 0})
          .to('.test1',2,{opacity: 0},'-=1')
          .to('.test2',2,{opacity: 0},'-=1');
    }
    


    return (
        <div>
            <Navbar />
            <br/>
            <button onClick={()=>fadeOut()}>fade</button>
            <div className='window'>
                {tickWindow()}
            </div>
        </div>
    );

}

export default Ticker;