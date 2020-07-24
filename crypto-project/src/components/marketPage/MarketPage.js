import React from 'react';
import './marketPage.css';
import { ExternalLink } from 'react-external-link';
import { Container, Hero, Section, SubTitle, Title } from 'reactbulma';
import Footer from './../footer/Footer.js';

const MarketPage=(props)=>{

    const nameLengthCheck=(value)=>{
        let arr=value.split(' ');
        if(value){
            if(arr.length > 8){
                return arr.slice(0,7).join(' ')+'...';
            } else{
                return value
            }
        }
    }

    let articleCnt=5    
    const displayArticles=()=>{
        console.log(props.news.slice(0,5))
        let cnt=[...Array(articleCnt).keys()]
        // console.log(cnt)
        return props.news.slice(0,5).map((val)=>{
                return(    
                    <div key={val?.title} className="articleDiv">
                        <h1 className="arttitle">{nameLengthCheck(val?.title)}</h1>
                        <p className="description">{val?.description}</p>
                        <ExternalLink href={val?.url} style={{color: 'gainsboro'}}>
                        <span className="articleLink">READ MORE</span>
                        </ExternalLink>
                        <span className="source">Source: {val?.source.name} </span>
                    </div>
                    )
            })
        
    }    

    return (
        <div>
            <div style={{ backgroundColor: '#1b0574' }}>
            <div style={{ backgroundColor: '#1b0574', height: '100px' }}>
                </div>
            <div>
            <Hero medium bold style={{ backgroundColor: '#282a36'}}>
                <Hero.Body>
                    <Container>
                        <Title style={{ fontFamily: 'Dosis', color: '#00d1b2', borderBottom: '2px solid darkViolet' }}>
                            Market Overview
                        </Title>
                            <SubTitle style={{ fontFamily: 'Lato', color: 'gainsboro' }}>
                                Trending News From The Crypto Space
                            </SubTitle>
                    </Container>
                </Hero.Body>
            </Hero> 
            </div>
                <div className="articles">
                <Section>
                    {displayArticles()}
                </Section>
                <div style={{ background: '#282a36', padding: '30px', width: '100%' }}>
                <Footer />
            </div> 
                </div>   
            </div>
        </div>
    );
    
}

export default MarketPage;
