import './global.scss'

import Footer from '@/components/admin/templates/footer/Footer'
import { Inter } from 'next/font/google'
import Menu from '@/components/admin/templates/menu/Menu'
import type { Metadata } from 'next'
import Navbar from '@/components/admin/templates/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Panel',
  description: 'Admin panel',
}


type Props = {
  children: React.ReactNode
}
const AdminLayout = ({ children }: Props) => {

  return (
    <div className={`${inter.className} main`} >
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AdminLayout