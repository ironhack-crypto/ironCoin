import React, { useState, useEffect } from 'react';
import newHomeImg from './newHomeImg.png';
import { Link } from 'react-router-dom';
import Parallax from 'react-rellax';
import { Button, Card, Container, Content, Control, Field, Heading, Image, Level, Nav, Section, Title } from 'reactbulma';
import '../components.css';
import regression from 'regression';
import CoinMultiGraph from '../CoinMultiGraph';
import logo from './logo.favicon.jpg';

const Home = (props) => {
    const heroImg = {
        
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


    return (
            <div style={{ height: '500px'}}>
                <div style={{ backgroundColor: '#1b0574', height: '325px' }}>
                </div>
                <Card>
                    <Card.Image ratio="16by9" src={newHomeImg} alt="ironCoin Logo" />
                </Card>
                <div style={{ backgroundColor: '#1b0574', height: '325px' }}>
                </div>
                <Parallax speed={20}>
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
                            <div style={{width: '100%'}}>
                                <Heading style={{ color: 'white' }}>{props?.coins[0]?.name}</Heading>
                                <Title is='3' style={{ fontFamily: 'Lato', color: 'darkViolet' }}>{props?.coins[0]?.symbol}</Title>
                                <CoinMultiGraph marketData={getGraphData(0)} generatedData={d} predictedData={predictFutureData(0)} />
                            </div>
                        </Level.Item>
                        <Level.Item hasTextCentered>
                            <div style={{width: '100%'}}>
                                <Heading style={{ color: 'white' }}>{props?.coins[1]?.name}</Heading>
                                <Title is='3' style={{ fontFamily: 'Lato', color: 'darkViolet' }}>{props?.coins[1]?.symbol}</Title>
                                <CoinMultiGraph marketData={getGraphData(1)} generatedData={d} predictedData={predictFutureData(1)} />
                            </div>
                        </Level.Item>
                        <Level.Item hasTextCentered>
                            <div style={{width: '100%'}}>
                                <Heading style={{ color: 'white' }}>{props?.coins[2]?.name}</Heading>
                                <Title is='3' style={{ fontFamily: 'Lato', color: 'darkViolet' }}>{props?.coins[2]?.symbol}</Title>
                                <CoinMultiGraph marketData={getGraphData(2)} generatedData={d} predictedData={predictFutureData(2)} />
                            </div>
                        </Level.Item>
                        </Level>
                    </div>
                    <div style={{ background: '#282a36', padding: '30px', width: '100%' }}>
                    <Nav hasShadow>
                    <Container fluid>
                        <Level>
                            <Level.Item hasTextCentered>
                                <Link to="/" style={{ width: '70%', backgroundColor: '#00d1b2' }}>
                                    <Button info focused style={{ width: '100%', backgroundColor: '#00d1b2', color: 'darkviolet', fontFamily: 'Dosis', fontWeight: 'bold', letterSpacing: '6px' }}>Reload Page</Button>
                                </Link>
                            </Level.Item>
                            <Level.Item hasTextCentered>
                                <Link to="/graph" style={{ width: '70%', backgroundColor: '#00d1b2' }}>
                                    <Button info focused style={{ width: '100%', backgroundColor: '#00d1b2', color: 'darkviolet', fontFamily: 'Dosis', fontWeight: 'bold', letterSpacing: '6px' }}>Graph Analysis</Button>
                                </Link>
                            </Level.Item>
                            <Level.Item hasTextCentered>
                                <Link to="/">
                                    <Image is="32x32" src={logo} alt="" />
                                </Link>
                            </Level.Item>
                            <Level.Item hasTextCentered>
                                <Link to="/market" style={{ width: '70%', backgroundColor: '#00d1b2' }}>
                                    <Button info focused style={{ width: '100%', backgroundColor: '#00d1b2', color: 'darkviolet', fontFamily: 'Dosis', fontWeight: 'bold', letterSpacing: '6px' }}>Market Overview</Button>
                                </Link>
                            </Level.Item>
                            <Level.Item hasTextCentered>
                                <Link to="/contact" style={{ width: '70%', backgroundColor: '#00d1b2' }}>
                                    <Button info focused  style={{ width: '100%', backgroundColor: '#00d1b2', color: 'darkviolet', fontFamily: 'Dosis', fontWeight: 'bold', letterSpacing: '6px' }}>About Us</Button>
                                </Link>
                            </Level.Item>
                        </Level>
                    </Container>
                </Nav>  
            </div>
        </div>
        </Parallax>
    </div>
    )
}
export default Home


