import React from 'react'
import { Outlet } from 'react-router'
import Navigation from './components/PortFolio/Navigation/Navigation'

const Portfolio = () => {
  return (
    <>
        <div className='w-full h-screen bg-black'>
            <Outlet />
            <Navigation />
        </div>
    </>
  )
}

export default Portfolio
