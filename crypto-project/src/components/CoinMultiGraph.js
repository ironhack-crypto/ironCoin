import React from 'react';
import Graph from './Graph';
import { Container, Heading } from 'reactbulma';


const CoinMultiGraph = (props) => {

    return (
        <div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'spaceAround'}}>
            <Heading style={{ color: 'white' }}>Market History</Heading>
            <Container fluid><Graph data={props.marketData} /></Container>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'spaceAround'}}>
            <Heading style={{ color: 'white' }}>Simulated Market Activity(Price Change)</Heading>
            <Container fluid><Graph data={props.generatedData} /></Container>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'spaceAround', paddingBottom: '10px'}}>
            <Heading style={{ color: 'white' }}>Predicted Value Change</Heading>
            <Container fluid><Graph data={props.predictedData} /></Container>
        </div>
        </div>
    )
}
export default CoinMultiGraph