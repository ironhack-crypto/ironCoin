import React from 'react'
import { Link, Switch, Route } from 'react-router-dom';
import { Nav } from 'reactbulma';

const Navbar = () => {
    return (
        <nav>
            <Link to="/" style={{Nav}}> home </Link>
        </nav>
    )
}
export default Navbar 

