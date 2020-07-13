import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import './Contact.css';
import { Link } from 'react-router-dom';
import { Button, Control, Field } from 'reactbulma';


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
            <div className='contDiv'>
                <div className='contContainer'>

                    <div className='contIndStyle' id='name1'>
                        <h1 className='contH1'>Anthony Gutilla</h1>
                        <p className='contP'>ABOUT: <span className='contSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span></p>
                        <div style={{ paddingTop: '30px' }}>
                        <Field groupedCentered>
                            <Control>
                                <Link to="github.com/antguts">
                                    <Button primary style={{ fontFamily: 'Dosis', color: 'darkViolet', fontWeight: 'bold' }}>GITHUB</Button>
                                </Link> 
                            </Control>
                            <Control>
                                <Link to="www.linkedin.com/in/agutilla">
                                    <Button primary style={{ fontFamily: 'Dosis', color: 'darkViolet', fontWeight: 'bold' }}>LINKEDIN</Button>
                                </Link>
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
                                <Link to="github.com/SchipDev">
                                    <Button primary style={{ fontFamily: 'Dosis', color: 'darkViolet', fontWeight: 'bold' }}>GITHUB</Button>
                                </Link> 
                            </Control>
                            <Control>
                                <Link to="www.linkedin.com/in/shane-schipper">
                                    <Button primary style={{ fontFamily: 'Dosis', color: 'darkViolet', fontWeight: 'bold' }}>LINKEDIN</Button>
                                </Link>
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
                                <Link to="github.com/killshot13">
                                    <Button primary style={{ fontFamily: 'Dosis', color: 'darkViolet', fontWeight: 'bold' }}>GITHUB</Button>
                                </Link> 
                            </Control>
                            <Control>
                                <Link to="www.linkedin.com/in/dmrehnert">
                                    <Button primary style={{ fontFamily: 'Dosis', color: 'darkViolet', fontWeight: 'bold' }}>LINKEDIN</Button>
                                </Link>
                            </Control>
                        </Field>                    
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
        );
    }
}

export default Contact;