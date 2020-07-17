import React, { useState } from 'react';
import CoinDetail from '../coindetail/CoinDetail';
import '../components.css';
import { Link } from 'react-router-dom';
import logo from './logo.favicon.jpg';
import { Button, Container, Control, Field, Heading, Hero, Image, Level, Nav, SubTitle, Title } from 'reactbulma';

const GraphPage = (props) => {

    //style={{marginBottom: '15px', backgroundColor: 'lightgray'}}
    const[state, setState] = useState({})

    const animate=()=>{
        // alert('pew')
    }

    const displayInfo = () => {    
        return props.coins.map((eachCoin) => {
            return (
                <div key={eachCoin.id}>
                    <div>
                        <Title>
                            <h1 style={{ fontFamily: 'Dosis', height: '5vh', margin: '3%' }}>{eachCoin.name} / {eachCoin.symbol}</h1>
                        </Title>
                    </div>
                    <Heading style={{ color: 'gainsboro', marginLeft: '1%' }}>Price: <span>${eachCoin.quote.USD.price.toFixed(2)}</span></Heading>
                    <Heading style={{ color: 'gainsboro', marginLeft: '2%' }}>Last Updated: <span>{eachCoin.last_updated}</span></Heading>
                    <Heading style={{ color: 'gainsboro', marginLeft: '3%' }}>Circulating Supply: <span>{eachCoin.circulating_supply}</span></Heading>
                    <Heading style={{ color: 'gainsboro', marginLeft: '4%' }}>Total Supply: <span>{eachCoin.total_supply}</span></Heading>
                    <Heading style={{ color: 'gainsboro', marginLeft: '5%', marginBottom: '3%' }}>Max Supply: <span>{eachCoin.max_supply}</span></Heading>
                    <Field groupedCentered>
                        <Control>
                            <Button info onClick={() => {setState({...eachCoin}); animate()}} >More</Button>
                        </Control>
                    </Field> 
                </div>
            )
        })
    }//end display


    return (
        <div >
        <div style={{ backgroundColor: '#1b0574' }}>
        <div style={{ backgroundColor: '#1b0574', height: '100px' }}>
            </div>
        <div>
        <Hero medium bold style={{ backgroundColor: '#282a36'}}>
            <Hero.Body>
                <Container>
                    <Title style={{ fontFamily: 'Dosis', color: 'darkViolet'}}>
                       By The Numbers
                    </Title>
                        <SubTitle style={{ fontFamily: 'Lato', color: '#00d1b2' }}>
                            Explore Your Favorite Coins In Detail
                        </SubTitle>
                </Container>
            </Hero.Body>
        </Hero> 
        </div>
            <div style={{ display: 'flex'  }}>
                <br />
                <div style={{ fontFamily: 'Lato', backgroundColor: '#282a36', width: '60%', display: 'block', marginTop:'100px'  }}>
                    <div>
                        {displayInfo()}
                    </div>
                </div>
            <CoinDetail {...state}/>
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
    </div>
    );
}

export default GraphPage;