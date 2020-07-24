import React from 'react';
import { Container, Level, Nav } from 'reactbulma';
import { ExternalLink } from 'react-external-link';

const Footer = () => {
    
    return (
        
            <div style={{ width: '100%', bottom: '0vh', backgroundColor: '282a36', padding: '10px 20px', borderBottom: '2px solid #00d1b2' }}>
                <Nav hasShadow>
                    <Container fluid>
                        <Level>
                            <Level.Item hasTextCentered>
                                <p style={{ color: 'gainsboro', fontFamily: 'Lato', fontStyle: 'italic' }}>APIs --
                                <ExternalLink href="https://coinmarketcap.com/api/"> CoinMarketCap </ExternalLink>|
                                <ExternalLink href="https://cryptocontrol.io/en/developers/apis"> Crypto Control</ExternalLink>
                                </p>
                            </Level.Item>
                            <Level.Item hasTextCentered>
                                <p style={{ color: 'gainsboro', fontFamily: 'Lato', fontStyle: 'italic' }}>
                                Tech Stack -- React.js | Node.js | REST API | npm | Bulma CSS | GSAP | json</p>
                            </Level.Item>
                            <Level.Item hasTextCentered>
                                <p style={{ color: 'gainsboro', fontFamily: 'Lato', fontStyle: 'italic' }}>©2020 ironCoin</p>
                            </Level.Item>
                        </Level>
                    </Container>
                </Nav>
            </div> 
    );
}

export default Footer;

