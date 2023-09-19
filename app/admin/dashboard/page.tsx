import './dashboard.scss'

import { TinyBarBoxPage, TinyBarBoxPerMonthPage, TinyChartBoxUser, TinyPieBox } from './data'

import { FiUsers } from "react-icons/fi";
import TinyBarChart from '@/components/admin/dashboard/chartboxs/tinyBarChart/TinyBarChart'
import TinyLineChart from '@/components/admin/dashboard/chartboxs/tinyLineChart/TinyLineChart'
import TinyPieChart from '@/components/admin/dashboard/chartboxs/tinyPieChart/TinyPieChart';
import TopBox from '@/components/admin/dashboard/topbox/TopBox'

type Props = {}

const Dashboard = (props: Props) => {

  return (
    <div className='home'>
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2"><TinyLineChart {...TinyChartBoxUser} ><FiUsers /></TinyLineChart></div>
      <div className="box box3"><TinyLineChart {...TinyChartBoxUser} ><FiUsers /></TinyLineChart></div>
      <div className="box box4"> <TinyPieChart {...TinyPieBox} ><FiUsers /></TinyPieChart> </div>
      <div className="box box5"><TinyLineChart {...TinyChartBoxUser} ><FiUsers /></TinyLineChart></div>
      <div className="box box6"><TinyLineChart {...TinyChartBoxUser} ><FiUsers /></TinyLineChart></div>
      <div className="box box7"><TinyBarChart {...TinyBarBoxPerMonthPage} ><FiUsers /></TinyBarChart></div>
      <div className="box box8"><TinyBarChart {...TinyBarBoxPage} ><FiUsers /></TinyBarChart></div>
      <div className="box box9"><TinyBarChart {...TinyBarBoxPage} ><FiUsers /></TinyBarChart></div>
    </div>
  )
}

export default Dashboard