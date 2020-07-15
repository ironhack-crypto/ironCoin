import React from 'react'
import Graph from './Graph'


const CoinMultiGraph = (props) => {









    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Graph data={props.marketData} />
            <Graph data={props.generatedData} />
            <Graph data={props.predictedData} margin={{  left: 200 }}/>
        </div>
    )
}
export default CoinMultiGraph