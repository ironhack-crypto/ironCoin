import React from 'react';
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';
import { Button, Level, Media, Nav, } from 'reactbulma';
import logo from './logo.favicon.jpg';
import '../components.css';
import Ticker from '../Ticker';

const Navbar = (props) => {
    const coins= props.coins
    const btnStyle={ 
        fontFamily: 'Dosis',
        width: '90%',
        backgroundColor:'#00d1b2',
        color:'darkviolet',
        fontWeight: 'bold',
        letterSpacing: '7px'

    }

    return (
    <div style={{ background: '#282a36', position: 'fixed', padding: '10px', width: '100%'}}>
    
        <Nav>
            <Level>
                <Level.Item hasTextCentered>
                    <Link to="/"  style={btnStyle}>
                        <Button info style={btnStyle}>Home</Button>
                    </Link>
                </Level.Item>
                <Level.Item hasTextCentered>
                    <Link to="/market" style={btnStyle}>
                        <Button info style={btnStyle}>Market</Button>
                    </Link>
                </Level.Item>
                <Level.Item hasTextCentered>
                    <Media>
                        <Link to="/">
                            <img src={logo} style={{height: '40px'}} />
                        </Link>
                    </Media>
                </Level.Item>
                <Level.Item hasTextCentered>
                    <Link to="/coin" style={btnStyle}>
                        <Button info style={btnStyle}>Graphs</Button>
                    </Link>
                </Level.Item>
                <Level.Item hasTextCentered>
                    <Link to="/contact" style={btnStyle}>
                        <Button info style={btnStyle}>Contact</Button>
                    </Link>
                </Level.Item>
            </Level>
        </Nav>
        <Ticker coins={coins}/>
    </div>
    );
}
                 
export default Navbar
    
