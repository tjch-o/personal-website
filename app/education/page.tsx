"use client"

import React from 'react'
import NavBar from '@/components/navigation bar/NavBar'
import Timeline from '@/components/education/Timeline'
import "./education.css"

function Education() {
  return (
    <div className="bg-rhino-blue">
        <NavBar/>
        <Timeline/>
    </div>
  )
}

export default Education