import React from 'react'
import homeImg from './homeImg.png'
import { Link } from 'react-router-dom';
import Navbar from './../nav/Navbar.js'
import { LineChart, Line } from 'recharts';
import Ticker from './../Ticker'
import Graph from '../Graph'
import Parallax from 'react-rellax'

const Home = () => {
    const heroImg = {
        background: `url(${homeImg}) center no-repeat fixed`,
        backgroundSize: '275vh',
        width: '100%',
        height: '72vh',
        display: 'flex',
        alignItems: 'center'
    }

    const data = [{ name: 'Page A', uv: 400 }, { name: 'Page B', uv: 400 }, { name: 'Page C', uv: 400 }, { name: 'Page D', uv: 425 }];

    // background: linear-gradient( #11999e6e, #11999e6e ), url('./images/undraw_programming_2svr.svg') center no-repeat fixed;
    // backgroundImage: `url(${homeImg})`

    return (
        <div>
            <Navbar />
            <div style={heroImg}>
                <Parallax speed={8}>
                    <p style={{ fontSize: '30px', color: 'blueviolet', backgroundColor: 'rgba(0,0,0,0.6)', width: '30vh', textAlign: 'center', marginLeft: '35vh' }}>Hack Your Crypto Portfolio</p>
                </Parallax>
            </div>
            <div style={{backgroundColor: '#424242', height: '726px'}}>
            <Link to="/coin">Go to coin</Link>
            <br />
            <Link to="/ticker">Go to ticker</Link>

            <Graph />
            </div>

            
        </div>
    )
}
export default Home