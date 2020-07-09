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
        backgroundColor: '#1b0574',
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
                    <p style={{ fontSize: '30px', color: 'blueviolet', backgroundColor: 'rgba(0,0,0,0.6)', width: '30vh', textAlign: 'center', marginLeft: '10vw' }}>Hack Your Crypto Portfolio</p>
                </Parallax>
            </div>
            <div style={{ backgroundColor: '#424242', height: '726px' }}>
                <br />
                <h1 style={{textAlign: 'center', color: 'blueviolet', marginBottom: '2vh'}}>Trending Coins</h1>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Graph />
                    <Graph />
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <Link to="/coin" style={{padding: '20px'}}>Go to coin</Link>
                <Link to="/ticker" style={{padding: '20px'}}>Go to ticker</Link>
                </div>
            </div>


        </div>
    )
}
export default Home