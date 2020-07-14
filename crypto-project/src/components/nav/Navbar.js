import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Level, Media, Nav, Section } from 'reactbulma';
import logo from './logo.favicon.jpg';
import '../components.css';
import Ticker from '../Ticker';


const Navbar = (props) => {
    const coins= props.coins
    const btnStyle={ 
        fontFamily: 'Dosis',
        width: '80%',
        backgroundColor: '#00d1b2',
        color: 'darkviolet',
        fontWeight: 'bold',
        letterSpacing: '7px'
    };
    const divStyle={
        position: "fixed",
        top: "0",
        width: "100%",
        height: "120px",
        backgroundColor: "#282a36",
        borderBottom: `1px solid black`,
        fontWeight: "bold",
        padding: "10px 20px",
    };

    return (
    <div style={divStyle}>
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
                    <Link to="/graph" style={btnStyle}>
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
    
