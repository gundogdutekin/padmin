import './navbar.scss'

import { BiExpand, BiSolidDashboard } from "react-icons/bi";

import { BsSearch } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import Image from 'next/image'
import { IoNotificationsOutline } from "react-icons/io5";

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='navbar'>
      <div className="logo">
        <Image
          src={'/logo.png'}
          width={20}
          height={30}
          alt='logo'
        />
        <span>admin</span>
      </div>
      <div className="icons">
        <BsSearch size={20} className="icon" />
        <BiSolidDashboard size={20} className="icon" />
        <BiExpand size={20} className="icon" />
        <div className="notification">
          <IoNotificationsOutline size={20} className="icon" />
          <span>12</span>
        </div>
        <div className="user">
          <span>TG</span>
        </div>
        <FiSettings size={20} className="icon" />
      </div>
    </div>
  )
}

export default Navbar