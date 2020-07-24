import React, { useState } from 'react';
import CoinDetail from '../coindetail/CoinDetail';
import { Button, Container, Control, Field, Heading, Hero, SubTitle, Title } from 'reactbulma';
import Footer from '../footer/Footer';

const GraphPage = (props) => {

    const[state, setState] = useState({})

    const animate = () => {
    }
    const displayInfo = () => {    
        return props.coins.map((eachCoin) => {
            return (
                <div key={eachCoin.id} style={{ borderBottom: '2px solid #00d1b2' }}>
                    <div>
                        <Title>
                            <h1 style={{ fontFamily: 'Dosis', height: '5vh', margin: '3%' }}>{eachCoin.name} / {eachCoin.symbol}</h1>
                        </Title>
                    </div>
                    <Heading style={{ color: 'gainsboro', marginLeft: '1%' }}>Price: <span>${eachCoin.quote.USD.price.toFixed(2)}</span></Heading>
                    <Heading style={{ color: 'gainsboro', marginLeft: '2%' }}>Last Updated: <span>{eachCoin.last_updated}</span></Heading>
                    <Heading style={{ color: 'gainsboro', marginLeft: '3%' }}>Circulating Supply: <span>{eachCoin.circulating_supply}</span></Heading>
                    <Heading style={{ color: 'gainsboro', marginLeft: '4%' }}>Total Supply: <span>{eachCoin.total_supply}</span></Heading>
                    <Heading style={{ color: 'gainsboro', marginLeft: '5%', marginBottom: '3%' }}>Max Supply: <span>{eachCoin.max_supply}</span></Heading>
                    <Field groupedRight>
                        <Control>
                            <Button info focused style={{ width: '100%', backgroundColor: '#00d1b2', color: 'darkviolet', fontFamily: 'Dosis', fontWeight: 'bold', letterSpacing: '4px', marginBottom: '10px', paddingRight: '30px' }} 
                            info onClick={() => {setState({...eachCoin}); animate()}}>More</Button>
                        </Control>
                    </Field> 
                </div>
            )
        })
    }

    return (
        <div >
        <div style={{ backgroundColor: '#1b0574' }}>
        <div style={{ backgroundColor: '#1b0574', height: '100px' }}>
            </div>
        <div>
        <Hero medium bold style={{ backgroundColor: '#282a36'}}>
            <Hero.Body>
                <Container>
                    <Title style={{ fontFamily: 'Dosis', color: '#00d1b2', borderBottom: '2px solid darkViolet' }}>
                       By The Numbers
                    </Title>
                        <SubTitle style={{ fontFamily: 'Lato', color: 'gainsboro' }}>
                            Explore Your Favorite Coins In Detail
                        </SubTitle>
                </Container>
            </Hero.Body>
        </Hero> 
        </div>
            <div style={{ display: 'flex'  }}>
                <br />
                <div style={{ fontFamily: 'Lato', backgroundColor: '#282a36', width: '50%', display: 'block', marginTop:'100px'  }}>
                    <div>
                        {displayInfo()}
                    </div>
                </div>
            <CoinDetail {...state}/>
            </div>
            <div style={{ background: '#282a36', padding: '30px', width: '100%' }}>
                <Footer />
            </div>
        </div>
    </div>
    );
}

export default GraphPage;