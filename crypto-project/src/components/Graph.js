import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Monday', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Tuesday', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Wendsday', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Thursday', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Friday', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Saterday', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Sunday', uv: 3490, pv: 4300, amt: 2100,
  },
];

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
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pr" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </div>
    );
  }
}
