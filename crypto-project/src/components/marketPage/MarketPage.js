import React, { Component } from 'react';
import axios from 'axios';
import '../components.css';
import './marketPage.css';
import { ExternalLink } from 'react-external-link';


const MarketPage=(props)=>{

    let articleCnt=5    
    const displayArticles=()=>{
        if(props.news){
            return [...Array(articleCnt).keys()].map((each,val)=>{
                return(
                    <div key={props.news[val].title} className="articleDiv"><h1>{props.news[val].title}</h1><span className="source">Source: {props.news[val].source.name} <br/> Date: {props.news[val].publishedAt}</span><p className="description">{props.news[val].description}<ExternalLink href={props.news[val].url}><span className="articleLink">READ MORE</span></ExternalLink></p></div>
                    )
                    console.log("loop: "+val)
            })
        }
    }    

    console.log(props.news[0])
    console.log(props.news[1])
    console.log(props.news[2])

    
    return (
        <div>
            <h1 style={{top: '150px', position: 'relative', fontSize: '25px'}}>Heeeerrrrrrooooooooooo!!</h1>            
            {displayArticles()}
        </div>
    );
    
}

export default MarketPage;