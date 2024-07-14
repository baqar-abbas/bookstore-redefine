/* eslint-disable */
import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='layout'>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
