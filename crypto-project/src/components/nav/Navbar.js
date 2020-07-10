import React from 'react'
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';
import { Button, Control, Field, Nav, NavCenter, NavItem, NavLeft, NavRight, NavToggle } from 'reactbulma';

const Navbar = () => {
    return (
    <div style={{background: '#282a36', position: 'fixed', padding: '10px', width: '100%' }}>
        <Nav>
            <Nav.Center>
                <Nav.Item>
                    <Field groupedCentered>
                        <Control>
                            <Link to="/coin">
                                <Button dark inverted outlined>View Coins</Button>
                            </Link>   
                        </Control>
                        <Control>
                            <Link to="/ticker">
                                <Button dark inverted outlined>View Tickers</Button>
                            </Link>
                        </Control>
                    </Field>
                </Nav.Item>
            </Nav.Center>
        </Nav>
    </div>
    );
}
                 
export default Navbar
    
