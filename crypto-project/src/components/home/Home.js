import React from 'react'
import homeImg from './homeImg.png'
import { Link } from 'react-router-dom';
import Navbar from './../nav/Navbar.js'
import Ticker from './../Ticker'


const Home = (props) => {
    const heroImg={
        backgroundImage: `url(${homeImg})`,
        width: '100%',
        height: '530px'
    }

    return (
        <div>
            <Navbar />
            <div style={heroImg}>
            </div>
            <Link to="/coin">Go to coin</Link>
            <br/><br/>
            <Link to="/ticker">Go to ticker</Link>

        </div>
    )
}
export default Home