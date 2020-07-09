import React from 'react'

const CoinDetail = (props) => {
    
    
    return (
        <div style={{fontSize: '50px', backgroundColor: 'gray'}}>
            {props.name}
            <h1>{props.quote?.USD?.price}</h1>

        </div>
    )
}
export default CoinDetail