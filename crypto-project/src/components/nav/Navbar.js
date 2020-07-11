import React from 'react';
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';
import { Button, Level, Media, Nav, } from 'reactbulma';
import logo from './logo.favicon.jpg';
import '../components.css';

const Navbar = () => {
    return (
    <div style={{ background: '#282a36', position: 'fixed', padding: '10px', width: '100%', zIndex: '999' }}>
        <Nav>
            <Level>
                <Level.Item hasTextCentered>
                    <Link to="/">
                        <Button info style={{ fontFamily: 'Dosis'}}>Home</Button>
                    </Link>
                </Level.Item>
                <Level.Item hasTextCentered>
                    <Link to="/ticker">
                        <Button info style={{ fontFamily: 'Dosis'}}>Market</Button>
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
                    <Link to="/coin">
                        <Button info style={{ fontFamily: 'Dosis'}}>Graphs</Button>
                    </Link>
                </Level.Item>
                <Level.Item hasTextCentered>
                    <Link to="/contact">
                        <Button info style={{ fontFamily: 'Dosis'}}>Contact</Button>
                    </Link>
                </Level.Item>
            </Level>
        </Nav>
    </div>
    );
}
                 
export default Navbar
    
