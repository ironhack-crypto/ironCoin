import React from 'react'
import Graph from './Graph'


const CoinMultiGraph = (props) => {

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <strong>Market History</strong>
            <Graph data={props.marketData} />
            <strong>Simulated Market Activity(Price Change)</strong>
            <Graph data={props.generatedData} />
            <strong>Predicted Value Change</strong>
            <Graph data={props.predictedData} />
        </div>
    )
}
export default CoinMultiGraph