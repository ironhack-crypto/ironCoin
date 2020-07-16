import React, { useState, useEffect } from 'react';
import homeImg from './homeImg.png';
import { Link } from 'react-router-dom';
import Graph from '../Graph';
import Parallax from 'react-rellax';
import { Button, Container, Content, Control, Field, Heading, Level, Nav, Section, Title } from 'reactbulma';
import '../components.css';
import regression from 'regression';
import CoinMultiGraph from '../CoinMultiGraph'

const Home = (props) => {
    const heroImg = {
        background: `url(${homeImg}) center no-repeat fixed`,
        backgroundColor: '#1b0574',
        // boxShadow: 'inset 0px 0px 40px 40px #1b0574',
        backgroundSize: '240vh',
        width: '100%',
        height: '60vh',
        display: 'flex',
        alignItems: 'center'
    }


    const [d, setD] = useState([])
    const [rd, setRd] = useState([])
    const [seconds, setSeconds] = useState(0);
    const [time, setTime] = useState(0)
    let i = 0;
    useEffect(() => {
        const interval = setInterval(() => {

            setSeconds(seconds => seconds + 1);
            setTime(time => time + 1000);

            setRd((rd) => {
                let newRd = [...rd]
                newRd.push([time, Math.random()])
                return newRd
            })
            let result = regression.polynomial(rd, { order: 2 })
            let price = result.predict(time)[1]
            setD((d) => {
                let newD = [...d]
                newD.push({ name: time, pr: price })
                return newD
            })
        }, 1000);
        return () => clearInterval(interval);
    }, [props, d, seconds, time, rd]);





    const getGraphData = (ind) => {
        let week = Math.floor(props[ind]?.quote.USD.price * (1 - (props[ind]?.quote.USD.percent_change_7d / 100)) * 100) / 100
        let day = Math.floor(props[ind]?.quote.USD.price * (1 - (props[ind]?.quote.USD.percent_change_24h / 100)) * 100) / 100
        let hour = Math.floor(props[ind]?.quote.USD.price * (1 - (props[ind]?.quote.USD.percent_change_1h / 100)) * 100) / 100
        let curr = Math.floor(props[ind]?.quote.USD.price * 100) / 100

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


    const predictFutureData = (ind) => {
        if (!props?.models[ind]?.predict) {
            return []
        }
        const data = [
            {
                name: '1 Week', pr: Math.floor(props.models[ind]?.predict(7)[1])
            },
            {
                name: '24 Hours', pr: Math.floor(props.models[ind]?.predict(6)[1])
            },
            {
                name: '1 Hour', pr: Math.floor(props.models[ind]?.predict(5)[1])
            }
        ]
        return data.reverse()
    }










    // background: linear-gradient( #11999e6e, #11999e6e ), url('./images/undraw_programming_2svr.svg') center no-repeat fixed;
    // backgroundImage: `url(${homeImg})`         #424242
    return (
        <div>
            <div style={heroImg}>
                <Section>
                <Container>
                <Parallax speed={11}>
                </Parallax>
                </Container>
                </Section>
            </div>
            <div style={{ backgroundColor: '#282a36', height: '580px' }}>
                <br />
                <div>
                    <Content>
                        <Field groupedCentered>
                            <Control>
                                <Title is='1' style={{ fontFamily: 'Dosis', color: '#00d1b2', fontWeight: '700' }}>Crypto Trends</Title>
                            </Control>
                        </Field>
                    </Content>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'black' }}>
                    <Level>
                        <Level.Item hasTextCentered>
                            <div>
                                <Heading style={{ color: 'white' }}>{props?.coins[0]?.name}</Heading>
                                <Title is='3' style={{ fontFamily: 'Lato', color: 'darkViolet' }}>{props?.coins[0]?.symbol}</Title>
                                <CoinMultiGraph marketData={getGraphData(0)} generatedData={d} predictedData={predictFutureData(0)} />
                            </div>
                        </Level.Item>
                        <Level.Item hasTextCentered>
                            <div>
                                <Heading style={{ color: 'white' }}>{props?.coins[1]?.name}</Heading>
                                <Title is='3' style={{ fontFamily: 'Lato', color: 'darkViolet' }}>{props?.coins[1]?.symbol}</Title>
                                <CoinMultiGraph marketData={getGraphData(1)} generatedData={d} predictedData={predictFutureData(1)} />
                            </div>
                        </Level.Item>
                        <Level.Item hasTextCentered>
                            <div>
                                <Heading style={{ color: 'white' }}>{props?.coins[2]?.name}</Heading>
                                <Title is='3' style={{ fontFamily: 'Lato', color: 'darkViolet' }}>{props?.coins[2]?.symbol}</Title>
                                <CoinMultiGraph marketData={getGraphData(2)} generatedData={d} predictedData={predictFutureData(2)} />
                            </div>
                        </Level.Item>
                        {/* <Level.Item hasTextCentered>
                            <div>
                                <Heading style={{ color: 'white' }}>Bitcoin</Heading>
                                <Title is='3' style={{ fontFamily: 'Lato', color: 'darkViolet' }}>BTC</Title>
                                <Graph data={predictFutureData()} />
                            </div>
                        </Level.Item> */}
                        {/* <Level.Item hasTextCentered>
                            <div>
                                <Heading style={{ color: 'white' }}>Ethereum</Heading>
                                <Title is='3' style={{ fontFamily: 'Lato', color: 'darkViolet' }}>ETH</Title>
                                <Graph data={getGraphData(1)} />
                            </div>
                        </Level.Item>
                        <Level.Item hasTextCentered>
                            <div>
                                <Heading style={{ color: 'white' }}>Ripple</Heading>
                                <Title is='3' style={{ fontFamily: 'Lato', color: 'darkViolet' }}>XRP</Title>
                                <Graph data={getGraphData(2)} />
                            </div>
                        </Level.Item> */}
                    </Level>
                </div>
                <div style={{ background: '#282a36', padding: '30px', width: '100%' }}>
                    <Nav>
                        <Field groupedCentered>
                            <Control>
                                <Link to="/market">
                                    <Button primary style={{ fontFamily: 'Dosis', color: 'darkViolet', fontWeight: '700' }}>Market Overview</Button>
                                </Link>
                            </Control>
                            <Control>
                                <Link to="/graph">
                                    <Button primary style={{ fontFamily: 'Dosis', color: 'darkViolet', fontWeight: '700' }}>Graph Analysis</Button>
                                </Link>
                            </Control>
                        </Field>
                    </Nav>
                </div>
            </div>
        </div>
    )
}
export default Home
