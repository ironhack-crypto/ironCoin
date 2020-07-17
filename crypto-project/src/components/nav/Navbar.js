import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Image, Level, Nav } from 'reactbulma';
import logo from './logo.favicon.jpg';
import '../components.css';
import Ticker from '../Ticker';


const Navbar = (props) => {
    const coins= props.coins

    return (
    <div style={{ width: '100%', backgroundColor: '#282a36', padding: '10px 20px' }}>
        <Nav hasShadow>
            <Container fluid>
            <Level>
                <Level.Item hasTextCentered>
                    <Link to="/" style={{ width: '70%', backgroundColor: '#00d1b2' }}>
                        <Button info focused style={{ width: '100%', backgroundColor: '#00d1b2', color: 'darkviolet', fontFamily: 'Dosis', fontWeight: 'bold', letterSpacing: '6px' }}>Home</Button>
                    </Link>
                </Level.Item>
                <Level.Item hasTextCentered>
                    <Link to="/market" style={{ width: '70%', backgroundColor: '#00d1b2' }}>
                        <Button info focused style={{ width: '100%', backgroundColor: '#00d1b2', color: 'darkviolet', fontFamily: 'Dosis', fontWeight: 'bold', letterSpacing: '6px' }}>Market</Button>
                    </Link>
                </Level.Item>
                <Level.Item hasTextCentered>
                        <Link to="/">
                            <Image is="32x32" src={logo} alt="" />
                        </Link>
                </Level.Item>
                <Level.Item hasTextCentered>
                    <Link to="/graph" style={{ width: '70%', backgroundColor: '#00d1b2' }}>
                        <Button info focused style={{ width: '100%', backgroundColor: '#00d1b2', color: 'darkviolet', fontFamily: 'Dosis', fontWeight: 'bold', letterSpacing: '6px' }}>Graphs</Button>
                    </Link>
                </Level.Item>
                <Level.Item hasTextCentered>
                    <Link to="/contact" style={{ width: '70%', backgroundColor: '#00d1b2' }}>
                        <Button info focused  style={{ width: '100%', backgroundColor: '#00d1b2', color: 'darkviolet', fontFamily: 'Dosis', fontWeight: 'bold', letterSpacing: '6px' }}>Contact</Button>
                    </Link>
                </Level.Item>
            </Level>
            </Container>
        </Nav>      
        <Ticker coins={coins}/>
    </div>
    );
}
                 
export default Navbar
    
