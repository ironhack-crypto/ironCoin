import React, { Component, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './nav/Navbar.js'
import { TimelineMax, TweenMax, Power3 } from 'gsap';


const Ticker =(props)=>{   
// 3 different coin groups. 10 coins each   
    const coinGroup1= props.coins.filter((each,ind)=>{
        return ind<10
    })
    const coinGroup2= props.coins.filter((each,ind)=>{
        return ind<=20 && ind>=10
    })
    const coinGroup3= props.coins.filter((each,ind)=>{
        return ind<=30 && ind>=20
    })

    let currentGroup=coinGroup1


//STYLES===================================================================================
    const tickerWindow={
        color: 'white',
        backgroundColor: '#424242',
        width: '290px'
    }


//===========================================================================================



    const tickWindow =()=>{

        return currentGroup.map((eachCoin,val)=>{
            return (
                <div key={eachCoin.id} className={'test'+val} style={{ backgroundColor: '#53565c',width: '100%', padding: '0 15px', border: 'solid grey 1px'}}>
                    <Link to='/' style={{ color: 'inherit', display: 'inline-flex', alignItems: 'baseline', justifyContent: 'space-between', width: '100%'}}>
                        <h1 style={{fontSize: '25px', paddingRight: '20px'}}>{eachCoin.symbol}</h1>
                        <span id={'sp'+val} style={{color:'lightgreen'}}>(${eachCoin.quote.USD.price.toFixed(2)})</span>
                    </Link>
                </div>                
            )
        })        
    }//end tickWindow

    

//GSAP animations==============================================================
    const changeSymbol=()=>{
        // tickWindow(coinGroup3)
        let coin=[]
        switch(currentGroup[0]){
            case coinGroup1[0]:
                coin=coinGroup2;
                currentGroup=coinGroup2;
                break;
            case coinGroup2[0]:
                coin=coinGroup3;
                currentGroup=coinGroup3;
                break;
            default:
                coin=coinGroup1;
                currentGroup=coinGroup1;
                break;
        }

        for(let i=0;i<10;i++){
            if(coin[i]) {
                document.querySelector('.test'+i+' h1').innerHTML=coin[i].name
                document.querySelector('.test'+i+' span').innerHTML='('+coin[i].quote.USD.price.toFixed(2)+')'
            }
        }
    }//end changeSymbol



    const fadeOut =()=>{
        let tl=new TimelineMax        

        tl.to('.test0',.8,{opacity: 0, x:5})
        for(let i=1;i<11;i++){
          tl.to('.test'+i,.5,{opacity: 0, x:5},'-=.2')
        }

        //delays function call to change inner information until elements aren't visible
        setTimeout(changeSymbol,3300)

        tl.to('.test0',.5,{opacity: 1, x:0},'-=.2')
        for(let i=1;i<11;i++){
            tl.to('.test'+i,.5,{opacity: 1, x:0},'-=.2')
          }
    }//end fadeOut

    const tester=()=>{
        setInterval(fadeOut, 8000);
    }
    
// ========================================================================================

    return (
        <div>
            <Navbar />
            <div style={tickerWindow}>
                <br/>
                <div className='window'>
                    {/* <button onClick={fadeOut}>fade</button> */}
                    {tickWindow()}
                    {tester()}
                </div>
            </div>
        </div>
    );

}

export default Ticker;