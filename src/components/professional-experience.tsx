import React from 'react'

export default function ProfessionalExperience({data}:any) {
  const {title} = data;
  return (
    <div >
        <h1>Professional Experience</h1>
        <h2>{title}</h2>
    </div>
  )
}
