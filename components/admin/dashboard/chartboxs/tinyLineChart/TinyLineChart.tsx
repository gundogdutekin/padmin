"use client"

import './chartBox.scss'

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, } from 'recharts';
import React, { FC } from 'react';

import Link from 'next/link'

type TinyChartProps = {
  color: string,
  title: string,
  dataKey: string,
  number: string | number,
  percentage: number,
  duration: string,
  chartData: object[],
  children: React.ReactNode
}


const TinyLineChart: FC<TinyChartProps> = ({
  color,
  title,
  dataKey,
  number,
  percentage,
  duration,
  chartData,
  children
}) => {
  return (
    <div className='chartBox'>
      <div className="boxInfo">
        <div className="title">
          {children}
          <span className='titleText'> {title}</span>
        </div>
        <div className='number'>
          <span className='numberTitle'>Toplam</span>
          <h1>{number}</h1>
        </div>

        <Link style={{ color: color }} href={'./'} >Tümü</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>

              <Tooltip
                contentStyle={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontSize: '11px'
                }}
                /* labelStyle={{
                   display: 'none',
 
                 }}*/
                position={{ x: 10, y: 80 }}
              />
              <XAxis hide dataKey='name' />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke="#8884d8"
                strokeWidth={2}
                dot={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chartTexts">
          <span style={{ color: percentage < 0 ? 'tomato' : 'limegreen' }} className='percentage'>{percentage}</span>
          <span className="duration">{duration}</span>
        </div>
      </div>
    </div>
  )
}

export default TinyLineChart