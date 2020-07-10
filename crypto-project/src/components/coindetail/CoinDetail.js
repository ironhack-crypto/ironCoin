import React from 'react'
import Graph from '../Graph'

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
        <div style={{ backgroundColor: 'lightgray', marginTop: '7vh' }}>
            <h1 style={{ fontSize: '50px', marginTop: '10px', fontColor: 'black' }}>{props?.name}</h1>
            <Graph data={plotCoinData()} name={props?.name} />
            <p>Circulating Supply: {props?.circulating_supply}</p>
            <p>Maximum Supply: {props?.max_supply}</p>
            <p>Market Pairs: {props?.num_market_pairs}</p>
            <p>Slug: {props?.slug}</p>
            <div style={{ backgroundColor: 'gray' }}>
                <h4 style={{textDecoration: 'underline', fontWeight: 'bold'}}>Price Information</h4>
                <p>Percent Change Over 7 Days: {props?.quote?.USD?.percent_change_7d}%</p>
                <p>Percent Change Over 24 Hours: {props?.quote?.USD?.percent_change_24h}%</p>
                <p>Percent Change Over 1 Hour: {props?.quote?.USD?.percent_change_1h}%</p>
                <p>Current Price: {props?.quote?.USD?.percent_change_24h}%</p>
            </div>
        </div>
    )
}
export default CoinDetail