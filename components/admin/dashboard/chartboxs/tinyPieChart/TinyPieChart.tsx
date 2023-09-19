"use client"

import './chartPieBox.scss'

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, } from 'recharts';
import React, { FC } from 'react';

import Link from 'next/link'

type TinyPieChartProps = {
  title: string,
  chartData: object[],
  children: React.ReactNode
}


const TinyPieChart: FC<TinyPieChartProps> = ({
  title,
  chartData,
  children
}) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className='chartPieBox'>
      <div className="chartPieInfo">

        {children}
        <span className='text'> {title}</span>


      </div>
      <div className="chartPie">
        <ResponsiveContainer width="100%" height={500}>
          <PieChart  >
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                borderRadius: '5px'

              }} />
            <Pie
              data={chartData}
              innerRadius={'70%'}
              outerRadius={'90%'}
              paddingAngle={5}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>

        </ResponsiveContainer>
      </div>
      <div className='options'>
        {
          chartData.map((item, index) => (
            <div key={index} className="option">
              <div className="title">
                <div className="dot" style={{ background: COLORS[index] }} />
                <span className="name"> {item.name}</span>
              </div>
              <div className="value">
                {item.value}
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TinyPieChart