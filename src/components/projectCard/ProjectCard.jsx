import './ProjectCard.css'
import { Link } from 'react-router-dom'
import {projects} from '../../data'
import { Icon } from '@iconify/react';

function ProjectCard() {
    const slideLeft = ()=>{
        var slider = document.getElementById('slide')
        slider.scrollLeft = slider.scrollLeft - 500
      }
      const slideRight = ()=>{
        var slider = document.getElementById('slide')
        slider.scrollLeft = slider.scrollLeft + 500
      }
  return (
    <div className="categoryContainer">
          <h2>Inspiring work made on Fiverr</h2>
          <div className="category">
                <Icon icon="mingcute:left-line" width="48" color="orangered" onClick={slideLeft}/>
              <div className="projects" id='slide'>
                {projects.map((project)=>(
                  <Link to='/gigs?cat=design' className='link' key={project.id}>
                    <div className="project">
                      <div className='projectImage'>
                        <img src={project.img} alt="projectImage" />  
                      </div>
                      <div className='lowerPart'>
                        <span className='profilePic'>
                            <img src={project.pp} alt="profile photo" />
                        </span>
                        <div className='text'>
                            <span className='cat'>{project.cat}</span>
                            <span className='username'>{project.username}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
                <Icon icon="mingcute:right-line" width="48" color="orangered" onClick={slideRight}/>
          </div>
        </div>
  )
}

export default ProjectCard