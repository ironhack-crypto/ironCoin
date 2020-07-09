import React, { Component, useRef } from 'react';
import Navbar from './nav/Navbar.js'
import { TimelineMax, TweenMax, Power3 } from 'gsap';


const Ticker =(props)=>{
    


    const tickWindow =()=>{
        return props.coins.map((eachCoin,val)=>{
            return (
                <div key={eachCoin.id} className={'test'+val}>
                    <h1>{eachCoin.symbol}</h1>
                    <h3>Price: <span>${eachCoin.quote.USD.price.toFixed(2)}</span></h3>
                </div>                
            )
        })
    }//end display
    
    const changeSymbol=()=>{
        document.querySelector('.test1 h1').innerHTML='TESTER'
    }//end

    const fadeOut =()=>{
        let tl=new TimelineMax
        tl.to('.test0',2,{opacity: 0, x:5})
          .to('.test1',2,{opacity: 0, x:5},'-=1')
          .to('.test2',2,{opacity: 0, x:5},'-=1')
          .add(changeSymbol(),"-+3")
        //   .to('h1',0,{})

          .to('.test0',2,{opacity: 1, x:0},'-=1')
          .to('.test1',2,{opacity: 1, x:0},'-=1')
          .to('.test2',2,{opacity: 1, x:0},'-=1');
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