import React from 'react';
import Graph from '../Graph';
import '../components.css';


const CoinDetail = (props) => {


    const plotCoinData = () => {
        let week = props?.quote?.USD?.price * (1 - (props?.quote?.USD?.percent_change_7d / 100))
        let day = props?.quote?.USD?.price * (1 - (props?.quote?.USD?.percent_change_24h / 100))
        let hour = props?.quote?.USD?.price * (1 - (props?.quote?.USD?.percent_change_1h / 100))
        let curr = Math.floor(props?.quote?.USD?.price * 100) / 100

        const data = [
            {
                name: '1 Week', pr: week
            },
            {
                name: '24 Hours', pr: day
            },
            {
                name: '1 Hour', pr: hour
            },
            {
                name: 'Current', pr: curr
                ,
            }
        ]
        return data
    }
    console.log(props)

    return (
        <div style={{ backgroundColor: 'indigo', position: 'fixed', top: '0', bottom: '50', left: '0', right: '0', marginLeft: '70vw', marginTop: '20vh', fontSize: '18px' }}>
            <h1 style={{ fontFamily: 'Dosis', fontSize: '50px', margin: '20px', fontColor: 'black' }}>{props?.name}</h1>
            <Graph style={{ marginLeft: '30px', color: 'white'}} data={plotCoinData()} name={props?.name} />
            <p style={{ color: 'gainsboro' }}>Circulating Supply: {props?.circulating_supply}</p>
            <p style={{ color: 'gainsboro' }}>Maximum Supply: {props?.max_supply}</p>
            <p style={{ color: 'gainsboro' }}>Market Pairs: {props?.num_market_pairs}</p>
            <p style={{ color: 'gainsboro' }}>Slug: {props?.slug}</p>
            <div style={{ backgroundColor: '#00d1b2' }}>
                <h4 style={{textDecoration: 'underline', fontWeight: 'bold'}}>Price Information</h4>
                <p style={{ color: 'indigo', fontWeight: 'bold' }}>>Percent Change Over 7 Days: {props?.quote?.USD?.percent_change_7d}%</p>
                <p style={{ color: 'indigo', fontWeight: 'bold' }}>>Percent Change Over 24 Hours: {props?.quote?.USD?.percent_change_24h}%</p>
                <p style={{ color: 'indigo', fontWeight: 'bold' }}>>Percent Change Over 1 Hour: {props?.quote?.USD?.percent_change_1h}%</p>
                <p style={{ color: 'indigo', fontWeight: 'bold' }}>>Current Price: {props?.quote?.USD?.percent_change_24h}%</p>
                <p>Symbol: {props?.symbol}</p>
            </div>
        </div>
    )
}
export default CoinDetail