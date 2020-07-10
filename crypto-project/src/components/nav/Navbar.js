import React from 'react'
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';
import { Button, Level, Nav, NavCenter, NavItem } from 'reactbulma';
import logo from './logo.favicon.jpg';

const Navbar = (props) => {
    return (
    <div style={{background: '#282a36', position: 'fixed', padding: '10px', width: '100%', zIndex: '999' }}>
        <Nav>
            <Nav.Center>
                <Nav.Item>
                    <Level>
                        <Level.Item hasTextCentered>
                            <Link to="/">
                                <Button info>Home</Button>
                            </Link>
                        </Level.Item>
                        <Level.Item hasTextCentered>
                            <Link to="/coin">
                                <Button info>Coins</Button>
                            </Link>
                        </Level.Item>
                        <Level.Item hasTextCentered>
                            <Link to="/">
                            <img src={logo} style={{height: '40px'}} />
                            </Link>
                        </Level.Item>
                        <Level.Item hasTextCentered>
                            <Link to="/ticker">
                                <Button info>Tickers</Button>
                            </Link>
                        </Level.Item>
                        <Level.Item hasTextCentered>
                            <Link to="/contact">
                                <Button info>Contact</Button>
                            </Link>
                        </Level.Item>
                    </Level>
                </Nav.Item>
            </Nav.Center>
        </Nav>
    </div>
    );
}
                 
export default Navbar
    
