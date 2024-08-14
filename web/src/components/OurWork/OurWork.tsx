import React from 'react'
import './OurWork.css'

//import image from "../assets/project1.png";

const projects = [
  {
    title: 'DAPPR',
    description: 'WEB APP DESIGN',
    imageUrl: "../assets/project1.png",
    projectUrl: '#',
  },
  {
    title: 'WEIHU',
    description: 'ADMIN DASHBOARD DESIGN',
    imageUrl: '../assets/project02.png',
    projectUrl: '#',

  },
  {
    title: 'NIKE INC.',
    description: 'SALES DATA WAREHOUSE DASHBOARD',
    imageUrl: '../assets/project03.png',
    projectUrl: '#',

  },
  {
    title: 'TASKERO',
    description: 'WEB APP / ADMIN DASHBOARD',
    imageUrl: '../assets/project04.png',
    projectUrl: '#',

  },
  {
    title: 'SCHEDULEE',
    description: 'MOBILE APP DESIGN',
    imageUrl: '../assets/project05.png',
    projectUrl: '#',

  },
  {
    title: 'INVEST',
    description: 'MOBILE APP DESIGN',
    imageUrl: '../assets/project06.png',
    projectUrl: '#',

  },
]
// all the examples were hard coded, but in a real world scenario, you would fetch this data from a database


const OurWork = () => {

  return (
    <>
    <h1></h1>
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
    </>
  )
}

export default OurWork
