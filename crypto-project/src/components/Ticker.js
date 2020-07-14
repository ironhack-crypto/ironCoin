import React, { Component, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TimelineMax, TweenMax, Power3 } from 'gsap';
import { Nav, Container } from 'reactbulma'
import './components.css';
import 'bulma/css/bulma.css';
import './Ticker.css'


const Ticker =(props)=>{   
// 3 different coin groups. 10 coins each 
    // let coins = props.coins.sort((a,b)=>{
    //     return b.quote.USD.price - a.quote.USD.price;
    // })
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
        position: 'reletive',
        padding: '2vh 0 0 1vw',
        color: 'white',
        width: '100%',
        height: '65px',
        zIndex: '998'
    }


//===========================================================================================




    const tickWindow =()=>{
        return currentGroup.map((eachCoin,val)=>{
            return (
                <div key={eachCoin.id} className={'coin'+val} style={{ width: '100%', padding: '0 35px'}}>
                    <Link to='/' className="linkStyle">
                        <h1 style={{color:'#00d1b2', fontSize: '20px', paddingRight: '20px'}}>{eachCoin.symbol}</h1>
                        <span id={'sp'+val} style={{color: 'lightgrey'}}>{eachCoin.quote.USD.price.toFixed(2)}</span>
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
            res= name.split(' ')
            res= res[0] +' ('+ res[1].charAt(0)+')'
        }
        return res
    }
    
    const changeSymbol=()=>{
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
                document.querySelector('.coin'+i+' h1').innerHTML=lengthCheck(coin[i].name)
                document.querySelector('.coin'+i+' span').innerHTML=coin[i].quote.USD.price.toFixed(2)
            }
        }
    }//end changeSymbol
    


    const fadeOut =()=>{
        let tl=new TimelineMax        

        tl.to('.coin0',.8,{opacity: 0, x:5})
        for(let i=1;i<11;i++){
          tl.to('.coin'+i,.5,{opacity: 0, x:5},'-=.2')
        }

        
        setTimeout(changeSymbol,3090)//delays function call to change symbols

        tl.to('.coin0',.5,{opacity: 1, x:0})
        for(let i=1;i<11;i++){
            tl.to('.coin'+i,.5,{opacity: 1, x:0},'-=.2')
          }  
        setTimeout(fadeOut,10000) //repeats the fading  
        }//end fadeOut

    setTimeout(fadeOut,5000)//timer to start the fading after page load

    
// ========================================================================================

    return (
        <div>
            <div style={tickerWindow}>
                <div className='tickWindow'>
                    {/* <button onClick={fadeOut}>fade</button> */}
                    {tickWindow()}
                    
                </div>
            </div>
        </div>
    );

}

export default Ticker;