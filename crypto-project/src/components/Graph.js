import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './components.css';
import 'bulma/css/bulma.css';



export default class Graph extends Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <div>
        <h2 style={{fontFamily: 'Dosis', fontSize: '30px', fontWeight: '700', color: 'blueviolet', textAlign: 'center'}}>{this.props.name}</h2>
        <LineChart
          style={{fontFamily: 'Lato'}}
          width={450}
          height={300}
          data={this.props.data}
          padding={{
            top: '30px', right: '30px', left: '30px', bottom: '10px',
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={['dataMin', 'dataMax']} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pr" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </div>
    );
  }
}
