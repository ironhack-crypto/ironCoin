import React, { useState } from 'react';
import CoinDetail from '../coindetail/CoinDetail';
import '../components.css';
import { Link } from 'react-router-dom';
import logo from './logo.favicon.jpg';
import { Button, Container, Image, Level, Nav } from 'reactbulma';

const GraphPage = (props) => {

    //style={{marginBottom: '15px', backgroundColor: 'lightgray'}}
    const[state, setState] = useState({})

    const animate=()=>{
        // alert('pew')
    }

    const displayInfo = () => {    
        return props.coins.map((eachCoin) => {
            return (
                <div key={eachCoin.id} className='box isDark'>
                    <h1>{eachCoin.name} / {eachCoin.symbol}</h1>
                    <h3>Price: <span>${eachCoin.quote.USD.price.toFixed(2)}</span></h3>
                    <h3>Last Updated: <span>{eachCoin.last_updated}</span></h3>
                    <h3>Circulating Supply: <span>{eachCoin.circulating_supply}</span></h3>
                    <h3>Total Supply: <span>{eachCoin.total_supply}</span></h3>
                    <h3>Max Supply: <span>{eachCoin.max_supply}</span></h3>
                    <button onClick={() => {setState({...eachCoin}); animate()}} >More</button>
                </div>
            )
        })
    }//end display


    return (
        <div >
            <div style={{ display: 'flex' }}>
                <br />
                <div style={{ width: '50%', display: 'block', marginTop:'18vh' }}>
                    {displayInfo()}
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
    );
}

export default GraphPage;