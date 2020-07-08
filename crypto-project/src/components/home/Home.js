import React from 'react'
import homeImg from './homeImg.png'
import { Link } from 'react-router-dom';
import Navbar from './../nav/Navbar.js'


const Home = () => {
    const heroImg={
        backgroundImage: `url(${homeImg})`,
        width: '100%',
        height: '530px'
    }

    return (
        <div>
            
            <div style={heroImg}>
            </div>
            <Link to="/coin">Go to coin</Link>
        </div>
    )
}
export default Home