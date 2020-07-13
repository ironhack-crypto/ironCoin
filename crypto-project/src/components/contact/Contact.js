import React, { Component } from 'react';
import logo from './../nav/logo.favicon.jpg';
import { TimelineMax, TweenMax, Power3 } from 'gsap';
import './Contact.css';


class Contact extends Component{

    animate=()=>{
        let tl=new TimelineMax
        
        tl.to(`#name1`,1,{ opacity: 1, marginTop: '10px'},'-=.3')
        tl.to(`#name3`,1,{ opacity: 1, marginTop: '10px'},'-=.3')
        tl.to(`#name2`,1,{ opacity: 1, marginTop: '10px'},'-=.5')
    }

    componentDidMount(){
        this.animate()
    }

    render(){
        return (
            <div>
                <div className='container'>

                    <div className='indStyle' id='name1'>
                        <h1>Anthony Gutilla</h1>
                        <h2>GITHUB: </h2>
                        <h2>LINKEDIN: </h2>
                        <p>ABOUT: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
                    </div>
                    <div className='indStyle' id='name2'>
                        <h1>Shane Schipper</h1>
                        <h2>GITHUB: </h2>
                        <h2>LINKEDIN: </h2>
                        <p>ABOUT: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
                    </div>
                    <div className='indStyle' id='name3'>
                        <h1>Michael Rehnert</h1>
                        <h2>GITHUB: </h2>
                        <h2>LINKEDIN: </h2>
                        <p>ABOUT: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}

export default Contact;