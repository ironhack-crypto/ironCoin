import React from 'react'
import homeImg from './homeImg.png'

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
           <h1>All of our Graphs and stuff can go here</h1>
        </div>
    )
}
export default Home