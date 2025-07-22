import React from 'react'
import LeftBar from './LeftBar'
import { Outlet } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className="flex pt-14 mt-16">
      <div className="w-1/5">
        <LeftBar />
      </div>
      <div className="w-4/5 flex justify-center">
        <Outlet />
      </div>
    </div>
  )
}

export default HeroSection
