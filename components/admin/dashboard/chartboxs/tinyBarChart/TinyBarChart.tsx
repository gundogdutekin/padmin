"use client"

import './chartBarBox.scss'

import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, } from 'recharts';
import React, { FC } from 'react';

import Link from 'next/link'

type TinyLBarChartProps = {
  color: string,
  title: string,
  barsize: number,
  dataKey: string,
  chartData: object[],
  children: React.ReactNode
}


const TinyBarChart: FC<TinyLBarChartProps> = ({
  color,
  title,
  barsize,
  dataKey,
  chartData,
  children
}) => {
  return (
    <div className='chartBarBox'>
      <div className="chartBarInfo">

        {children}
        <span className='text'> {title}</span>


      </div>
      <div className="chartBar">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis className='xAxis' axisLine={false} dataKey='name' />
            <Tooltip
              cursor={false}
              contentStyle={{
                background: '#314263',
                border: '1px solid 2d323c',
                borderRadius: '5px',
                fontSize: '13px',
                zIndex: 20,
              }}
              labelStyle={{
                display: 'none',

              }}

            />
            <Bar
              barSize={barsize}
              dataKey={dataKey}
              fill={color}
            />
          </BarChart>
        </ResponsiveContainer>


      </div>
    </div>
  )
}

export default TinyBarChart