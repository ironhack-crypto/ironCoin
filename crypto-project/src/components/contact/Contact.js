import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import './Contact.css';
import { Link } from 'react-router-dom';
import '../components.css';
import { ExternalLink } from 'react-external-link';
import logo from './logo.favicon.jpg';
import { Button, Control, Container, Field, Image, Level, Nav } from 'reactbulma';

import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'

gsap.registerPlugin(CSSPlugin)

class Contact extends Component{

    animate=()=>{
        let tl=new TimelineMax
        for(let i=1;i<4;i++){
            tl.to(`#name${i}`,.5,{ opacity: 1, scaleX:1, marginTop: '10px'},'-=.1')
        }
    }


    componentDidMount(){
        this.animate()
    }


    render(){
        return (
            <div>
        <div>
            <div className='contDiv'>
                <div className='contContainer'>

                    <div className='contIndStyle' id='name1'>
                        <h1 className='contH1'>Anthony Gutilla</h1>
                        <p className='contP'>ABOUT: <span className='contSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span></p>
                        <div style={{ paddingTop: '30px' }}>
                        <Field groupedCentered>
                            <Control>
                                <ExternalLink href="https://github.com/antguts">
                                    <Button primary style={{ fontFamily: 'Dosis', color: 'darkViolet', fontWeight: 'bold' }}>GITHUB</Button>
                                </ExternalLink> 
                            </Control>
                            <Control>
                                <ExternalLink href="https://linkedin.com/in/agutilla">
                                    <Button primary style={{ fontFamily: 'Dosis', color: 'darkViolet', fontWeight: 'bold' }}>LINKEDIN</Button>
                                </ExternalLink>
                            </Control>
                        </Field>
                        </div>
                    </div>
                    
                    
                    
                    <div className='contIndStyle' id='name2'>
                        <h1 className='contH1'>Shane Schipper</h1>
                        <p className='contP'>ABOUT: <span className='contSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span></p>
                        <div style={{ paddingTop: '30px' }}>
                        <Field groupedCentered>
                            <Control>
                                <ExternalLink href="https://github.com/SchipDev">
                                    <Button primary style={{ fontFamily: 'Dosis', color: 'darkViolet', fontWeight: 'bold' }}>GITHUB</Button>
                                </ExternalLink> 
                            </Control>
                            <Control>
                                <ExternalLink href="https://linkedin.com/in/shane-schipper">
                                    <Button primary style={{ fontFamily: 'Dosis', color: 'darkViolet', fontWeight: 'bold' }}>LINKEDIN</Button>
                                </ExternalLink>
                            </Control>
                        </Field>
                        </div>              
                    </div>
                    
                    
                    
                    <div className='contIndStyle' id='name3'>
                        <h1 className='contH1'>Michael Rehnert</h1>
                        <p className='contP'>ABOUT: <span className='contSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span></p>
                        <div style={{ paddingTop: '30px' }}>
                        <Field groupedCentered>
                            <Control>
                                <ExternalLink href="https://github.com/killshot13">
                                    <Button primary style={{ fontFamily: 'Dosis', color: 'darkViolet', fontWeight: 'bold' }}>GITHUB</Button>
                                </ExternalLink> 
                            </Control>
                            <Control>
                                <ExternalLink href="https://linkedin.com/in/dmrehnert">
                                    <Button primary style={{ fontFamily: 'Dosis', color: 'darkViolet', fontWeight: 'bold' }}>LINKEDIN</Button>
                                </ExternalLink>
                            </Control>
                        </Field>                    
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
        <div style={{ background: '#282a36', padding: '30px', width: '100%' }}>
                    <Nav hasShadow>
                    <Container fluid>
                        <Level>
                            <Level.Item hasTextCentered>
                                <Link to="/" style={{ width: '70%', backgroundColor: '#00d1b2' }}>
                                    <Button info focused style={{ width: '100%', backgroundColor: '#00d1b2', color: 'darkviolet', fontFamily: 'Dosis', fontWeight: 'bold', letterSpacing: '6px' }}>Reload Page</Button>
                                </Link>
                            </Level.Item>
                            <Level.Item hasTextCentered>
                                <Link to="/graph" style={{ width: '70%', backgroundColor: '#00d1b2' }}>
                                    <Button info focused style={{ width: '100%', backgroundColor: '#00d1b2', color: 'darkviolet', fontFamily: 'Dosis', fontWeight: 'bold', letterSpacing: '6px' }}>Graph Analysis</Button>
                                </Link>
                            </Level.Item>
                            <Level.Item hasTextCentered>
                                <Link to="/">
                                    <Image is="32x32" src={logo} alt="" />
                                </Link>
                            </Level.Item>
                            <Level.Item hasTextCentered>
                                <Link to="/market" style={{ width: '70%', backgroundColor: '#00d1b2' }}>
                                    <Button info focused style={{ width: '100%', backgroundColor: '#00d1b2', color: 'darkviolet', fontFamily: 'Dosis', fontWeight: 'bold', letterSpacing: '6px' }}>Market Overview</Button>
                                </Link>
                            </Level.Item>
                            <Level.Item hasTextCentered>
                                <Link to="/contact" style={{ width: '70%', backgroundColor: '#00d1b2' }}>
                                    <Button info focused  style={{ width: '100%', backgroundColor: '#00d1b2', color: 'darkviolet', fontFamily: 'Dosis', fontWeight: 'bold', letterSpacing: '6px' }}>About Us</Button>
                                </Link>
                            </Level.Item>
                        </Level>
                    </Container>
                </Nav>  
            </div>

        </div>
        
        );
    }
}

export default Contact;