import React from 'react'
import "./chart.scss"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({title, data, dataKey, grid}) => {  

    return (
        <>
            <div className='chart'>
                <h3 className='chartTitle'> {title} </h3>
                <ResponsiveContainer aspect={4 / 1}>
                    <LineChart data={data} >
                        {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                        <XAxis dataKey="name" stroke='#5550bd' />
                        <Tooltip />
                        <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default Chart