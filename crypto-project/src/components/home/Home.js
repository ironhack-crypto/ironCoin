import React from 'react'
import homeImg from './homeImg.png'
import { Link } from 'react-router-dom';
import Navbar from './../nav/Navbar.js'
import { LineChart, Line } from 'recharts';
import Ticker from './../Ticker'
import Graph from '../Graph'
import Parallax from 'react-rellax'
import { Button, Content, Control, Field, Nav, NavCenter, NavItem, Title } from 'reactbulma';

const Home = (props) => {
    const heroImg = {
        background: `url(${homeImg}) center no-repeat fixed`,
        backgroundColor: '#1b0574',
        backgroundSize: '275vh',
        width: '100%',
        height: '82vh',
        display: 'flex',
        alignItems: 'center'
    }

    console.log(props[0]?.quote.USD.price * (1 - (props[0]?.quote.USD.percent_change_7d/100)), props[0]?.quote.USD.price, 1 + (props[0]?.quote.USD.percent_change_7d/100))
    const getGraphData = (ind) => {
        let week = props[ind]?.quote.USD.price * (1 - (props[ind]?.quote.USD.percent_change_7d/100))
        let day = props[ind]?.quote.USD.price * (1 - (props[ind]?.quote.USD.percent_change_24h/100))
        let hour = props[ind]?.quote.USD.price * (1 - (props[ind]?.quote.USD.percent_change_1h/100))
        let curr = Math.floor(props[ind]?.quote.USD.price * 100)/100

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
,           }
        ]
        return data
    }
    // background: linear-gradient( #11999e6e, #11999e6e ), url('./images/undraw_programming_2svr.svg') center no-repeat fixed;
    // backgroundImage: `url(${homeImg})`         #424242
    console.log(getGraphData())
    return (
        <div>
            <Navbar />
            <div style={heroImg}>
                <Parallax speed={11}>
                    <p style={{ fontSize: '30px', color: 'blueviolet', backgroundColor: 'rgba(0,0,0,0.6)', width: '30vh', textAlign: 'center', marginLeft: '10vw' }}>Hack Your Crypto Portfolio</p>
                </Parallax>
            </div>
            <div style={{ backgroundColor: '#282a36', height: '600px' }}>
                <br />
                <div>
                    <Content>
                        <Field groupedCentered>
                            <Control>
                                <Title is='1' style={{ color: '#00d1b2' }}>Trending Coins</Title>
                            </Control>
                        </Field>
                    </Content>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'black'}}>
                    <Graph data={getGraphData(0)} name={props[0]?.name} />
                    <Graph data={getGraphData(1)} name={props[1]?.name} />
                    <Graph data={getGraphData(2)} name={props[2]?.name} />
                </div>
                <div style={{background: '#282a36', padding: '30px', width: '100%' }}>
                    <Nav>
                        <Nav.Item>
                            <Content>
                                <Field groupedCentered>
                                    <Control>
                                        <Link to="/coin">
                                            <Button primary style={{ color: '#000000' }}>Coin Details</Button>
                                        </Link> 
                                    </Control>
                                    <Control>
                                        <Link to="/ticker">
                                            <Button primary style={{ color: '#000000' }}>View Tickers</Button>
                                        </Link>
                                    </Control>
                                </Field>
                            </Content>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        </div>
    )
}
export default Home
