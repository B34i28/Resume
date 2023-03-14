import React from 'react'
import ProfessionalExperience from './professional-experience'
import Skills from './Skills'

export default function AboutMe () {
  return (
    <div>
        <h1 className='uppercase text-black'>About Me</h1>
        <p className='text-black'>As i am motivated</p>
        <Skills />
    </div>
  )
}
