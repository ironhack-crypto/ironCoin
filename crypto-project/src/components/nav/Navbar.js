import React from 'react'
import { Link, Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import { Button, Control, Field, Icon, Nav, NavCenter, NavItem, NavLeft, NavRight, NavToggle } from 'reactbulma';

const Navbar = () => {
    return (
    <div style={{background: '#282a36', position: 'fixed', padding: '10px', width: '100%' }}>
        <Nav>
            <Nav.Center>
                <Nav.Item>
                    <Field groupedCentered>
                        <Control>
                            <Button dark inverted outlined>View Coins</Button>
                        </Control>
                        <Control>
                            <Button dark inverted outlined>View Tickers</Button>
                        </Control>
                    </Field>
                </Nav.Item>
            </Nav.Center>
        </Nav>
    </div>
    );
}
                 
export default Navbar
    
