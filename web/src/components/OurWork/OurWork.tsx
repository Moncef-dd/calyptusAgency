import React from 'react'
import './OurWork.css'

const projects = [
  {
    title: 'DAPPR',
    description: 'WEB APP DESIGN',
    imageUrl: '/path/to/dappr-image.png',
    projectUrl: '#',
  },
  {
    title: 'WEIHU',
    description: 'ADMIN DASHBOARD DESIGN',
    imageUrl: '/path/to/weihu-image.png',
    projectUrl: '#',

  },
  {
    title: 'NIKE, INC.',
    description: 'SALES DATA WAREHOUSE DASHBOARD',
    imageUrl: '/path/to/nike-image.png',
    projectUrl: '#',

  },
  {
    title: 'TASKERO',
    description: 'WEB APP / ADMIN DASHBOARD',
    imageUrl: '/path/to/taskero-image.png',
    projectUrl: '#',

  },
  {
    title: 'SCHEDULEE',
    description: 'MOBILE APP DESIGN',
    imageUrl: '/path/to/schedulee-image.png',
    projectUrl: '#',

  },
  {
    title: 'INVEST',
    description: 'MOBILE APP DESIGN',
    imageUrl: '/path/to/invest-image.png',
    projectUrl: '#',

  },
]
// all the examples were hard coded, but in a real world scenario, you would fetch this data from a database


const OurWork = (

) => {
  return (
    <div className='project-grid-container'>

    <div className="project-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.imageUrl} alt=''/>

          <div className="project-card-content">
            <a href={project.projectUrl}>
              <h3>{project.title}  →</h3></a>
            <p>{project.description}</p>

          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default OurWork