import React from 'react'
import homeImg from './homeImg.png'
import { Link } from 'react-router-dom';
import Navbar from './../nav/Navbar.js'
import { LineChart, Line } from 'recharts';
import Graph from '../Graph'

const Home = () => {
    const heroImg = {
        backgroundImage: `url(${homeImg})`,
        width: '100%',
        height: '530px'
    }

    const data = [{ name: 'Page A', uv: 400 }, { name: 'Page B', uv: 400 }, { name: 'Page C', uv: 400 }, { name: 'Page D', uv: 425 }];


    return (
        <div>
            <Navbar />
            <div style={heroImg}>
            </div>
            <Link to="/coin">Go to coin</Link>
            {/* <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart> */}
            <Graph />
            <h1>Hello</h1>
        </div>
    )
}
export default Home