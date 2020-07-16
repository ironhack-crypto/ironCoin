import React, { Component } from 'react';
import axios from 'axios';
import '../components.css';
import './marketPage.css';
import { ExternalLink } from 'react-external-link';


const MarketPage=(props)=>{

    let articleCnt=5    
    const displayArticles=()=>{
        let cnt=[...Array(articleCnt).keys()]
        // console.log(cnt)
        return cnt.map((val)=>{
            console.log(props.news[val])
                return(
                    <div key={props.news[val]?.title} className="articleDiv"><h1>{props.news[val]?.title}</h1><span className="source">Source: {props.news[val]?.source.name} <br/> Date: {props.news[val]?.publishedAt}</span><p className="description">{props.news[val]?.description}</p><ExternalLink href={props.news[val]?.url}><span className="articleLink">READ MORE</span></ExternalLink></div>
                    )
            })
        
    }    

    // console.log(props.news[0])
    // console.log(props.news[1])
    // console.log(props.news[2])
    // console.log(props.news[3])
    // console.log(props.news[4])


    
    return (
        <div >
            <div style={{textAlign: 'center'}}>
                <h1 style={{top: '150px', position: 'relative', fontSize: '65px'}}>
                    Latest Headlines 
                </h1>      
                {displayArticles()}
            </div>
        </div>
    );
    
}

export default MarketPage;