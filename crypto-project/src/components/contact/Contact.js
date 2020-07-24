import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import './Contact.css';
import { ExternalLink } from 'react-external-link';
import logo from './logo.favicon.jpg';
import { Button, Control, Container, Field, Section } from 'reactbulma';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import Footer from '../footer/Footer.js';



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
                    <Section>
                    <div className='contIndStyle' id='name1'>
                        <h1 className='contH1'>Anthony Gutilla</h1>
                        <p className='contP'>I am a focused individual looking to improve my skill set within the IT community. I have attended Ironhack's web development bootcamp in Miami while also earning a bachelors in IT forensics at PBSC. I work as a freelance web developer.</p>
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
                    </Section>
                    <Section>
                    <div className='contIndStyle' id='name2'>
                        <h1 className='contH1'>Shane Schipper</h1>
                        <p className='contP'>I am an undergraduate student at Virginia Tech studying Computational Modeling and Data Analytics, Mathematics, and Computer Science. My passion lies in machine learning and artificial intelligence and I strongly believe that the mastery of these fields is humanities ticket into the future.</p>
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
                    </Section>
                    <Section>
                    <div className='contIndStyle' id='name3'>
                        <h1 className='contH1'>Michael Rehnert</h1>
                        <p className='contP'>I empower my customers, my clients, and the companies I work for to establish and secure their online interests. From web design to cloud encryption, my business is you! I desire a company culture that is driven, innovative, and respectable.</p>
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
                    </Section>  
                </div>
                 <Section>
        <div style={{ background: '#282a36', padding: '30px', width: '100%' }}>
                <Footer />
            </div> 
            </Section> 
            </div>
        </div> 
          
        </div>
        
        );
    }
}

export default Contact;