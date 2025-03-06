import React from 'react'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'

const Dashboard: React.FC = () => {
  return (
    <>
        <main className="px-2">
            <Outlet />
        </main>

        <Navbar />
    </>
  )
}

export default Dashboard