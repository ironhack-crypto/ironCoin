import React from 'react'
import { Link, Switch, Route } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <Link to="/" style={{color: 'red'}}>Nav Placeholder (potentially slide menu to fill the empty purple space?)</Link>
        </nav>
    )
}
export default Navbar