"use client";
import React ,{useState} from 'react'

export default function Skills() {
  const  [activeTab , setActiveTab] = useState('soft')
  
  const setBg = (active:string) => (activeTab === active ? 'bg-yellow-500':"bg-gray-400");
  return (
    <div className='flex '>
      {['soft','hard'].map((el) => (<button key={el} type="button" className={`btn ${setBg (el)}`}
      onClick = { () => setActiveTab(el)}>{el} Skills</button>))}

    </div>
  )
}
