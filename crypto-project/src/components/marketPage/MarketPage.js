import React, { Component } from 'react';
import axios from 'axios';
import '../components.css';
import './marketPage.css';
import { ExternalLink } from 'react-external-link';


const MarketPage=(props)=>{

    let articleCnt=5    
    const displayArticles=()=>{
        console.log(props.news.slice(0,5))
        let cnt=[...Array(articleCnt).keys()]
        // console.log(cnt)
        return props.news.slice(0,5).map((val)=>{
                return(    
                    <div key={val?.title} className="articleDiv"><h1>{val?.title}</h1><p className="description">{val?.description}</p><ExternalLink href={val?.url} style={{color: 'cyan'}}><span className="articleLink">READ MORE</span></ExternalLink><span className="source">Source: {val?.source.name} </span>
                    </div>
                    )
            })
        
    }    

    
    return (
        <div >
            <div style={{textAlign: 'center'}}>
                <h1 className='latest'>
                    Latest Headlines 
                </h1> 
                <div className="articles">
                    {displayArticles()}
                </div>     
            </div>
        </div>
    );
    
}

export default MarketPage;