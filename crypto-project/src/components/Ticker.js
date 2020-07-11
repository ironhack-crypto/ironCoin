import React, { Component, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './nav/Navbar.js';
import { TimelineMax, TweenMax, Power3 } from 'gsap';
import './components.css';
import 'bulma/css/bulma.css';


const Ticker =(props)=>{   
// 3 different coin groups. 10 coins each   
    const coinGroup1= props.coins.filter((each,ind)=>{
        return ind<7
    })
    const coinGroup2= props.coins.filter((each,ind)=>{
        return ind<=13 && ind>=7
    })
    const coinGroup3= props.coins.filter((each,ind)=>{
        return ind<=20 && ind>=14
    })

    let currentGroup=coinGroup1


//STYLES===================================================================================
    const tickerWindow={
        textAlign: 'center',
        backgroundColor: '#282a36',
        position: 'fixed',
        padding: '7vh 0 0 1vw',
        color: 'white',
        // backgroundColor: '#424242',
        width: '100%',
        height: '109px',
        zIndex: '998'
    }


//===========================================================================================




    const tickWindow =()=>{
        return currentGroup.map((eachCoin,val)=>{
            return (
                <div key={eachCoin.id} className={'test'+val} style={{ width: '100%', padding: '0 15px'}}>
                    <Link to='/' style={{ color: 'inherit', display: 'inline-flex', alignItems: 'baseline', width: '200px', borderBottom: '1px solid #00d1b2'}}>
                        <h1 style={{color:'#00d1b2', fontSize: '20px', paddingRight: '20px'}}>{eachCoin.symbol}</h1>
                        <span id={'sp'+val} style={{color: 'lightgrey'}}>(${eachCoin.quote.USD.price.toFixed(2)})</span>
                    </Link>
                </div>                
            )            
        })        
    }//end tickWindow

    

//GSAP animations==============================================================
    //Shortens name length if over 10 char
    const lengthCheck=(name)=>{
        let res=name
        if(res.length>10){
            res= name.split(' ')[0];
        }
        return res
    }
    
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
        
        
        for(let i=0;i<currentGroup.length;i++){
            if(coin[i]) {
                document.querySelector('.test'+i+' h1').innerHTML=lengthCheck(coin[i].name)
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
        setTimeout(changeSymbol,3090)

        tl.to('.test0',.5,{opacity: 1, x:0})
        for(let i=1;i<11;i++){
            tl.to('.test'+i,.5,{opacity: 1, x:0},'-=.2')
          }
        //repeats the fading  
        setTimeout(fadeOut,10000)
        }//end fadeOut
    //timer to start the fading after page load
    setTimeout(fadeOut,5000)

    
// ========================================================================================

    return (
        <div>
            {/* <Navbar /> */}
            <div style={tickerWindow}>
                <div style={{display: 'inline-flex'}}>
                    {/* <button onClick={fadeOut}>fade</button> */}
                    {tickWindow()}
                    
                </div>
            </div>
        </div>
    );

}

export default Ticker;