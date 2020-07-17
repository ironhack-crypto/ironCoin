import React, { Component } from 'react';
import './footer.css'

const Footer=()=>{
    



        return (
            <div>
                <div className='footerContain'>
                
                {/* <p>Ironcoin is a group collaboration with the purpose of showing the highest priced coins and how well those coins are doing in the market. The site utilizes ‘Coin Market’ API for real time coin info. The latest news articles regarding the market are also imported using the ‘Crypto Control’ API.</p>  */}
                <h2>Technologies: <i>React, HTML/CSS, Bulma, GSAP</i></h2>
                <h2>APIs: <i>Coin Market, Crypto Control</i></h2>
                <span>©2020</span>
                </div>

            </div>
        );
    
}

export default Footer;