import React, { Component, useRef } from 'react';
import Navbar from './nav/Navbar.js'
import { TimelineMax, TweenMax, Power3 } from 'gsap';


const Ticker =(props)=>{
    

    const coinGroup1= props.coins.filter((each,ind)=>{
        return ind<11
    })
    const coinGroup2= props.coins.filter((each,ind)=>{
        return ind<21 && ind>10
    })
    const coinGroup3= props.coins.filter((each,ind)=>{
        return ind<31 && ind>20
    })
    
    const tickWindow =()=>{

        return coinGroup1.map((eachCoin,val)=>{
            return (
                <div key={eachCoin.id} className={'test'+val} style={{display: 'inline-flex', width: '100%'}}>
                    <h1>{eachCoin.symbol}</h1>
                    <span id={'sp'+val} style={{marginLeft: '20px'}}>(${eachCoin.quote.USD.price.toFixed(2)})</span>
                </div>                
            )
        })
    }//end display


    //GSAP animations==============================================================
    const changeSymbol=()=>{
        // tickWindow(coinGroup3)
        for(let i=0;i<10;i++){
            document.querySelector('.test'+i+' h1').innerHTML=coinGroup2[i].name
            document.querySelector('.test'+i+' span').innerHTML='('+coinGroup2[i].quote.USD.price.toFixed(2)+')'
        }
    }//end



    const fadeOut =()=>{
        let tl=new TimelineMax        
        tl.to('.test0',.5,{opacity: 0, x:5})

        for(let i=1;i<11;i++){
          tl.to('.test'+i,.5,{opacity: 0, x:5},'-=.2')
        }
        //delays function call to change inner information until elements aren't visible
        setTimeout(changeSymbol,3000)

        tl.to('.test0',.5,{opacity: 1, x:0},'-=.5')
        for(let i=1;i<11;i++){
            tl.to('.test'+i,.5,{opacity: 1, x:0},'-=.2')
          }
    }
    // ========================================================================================

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