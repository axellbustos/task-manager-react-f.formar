import React, { useEffect } from 'react'
import { ProjectPreview } from '../components/ProjectPreview'
import {useProjects} from '../hooks/useProjects'

export const Projects = () => {
  const {loading, alert, projects, getProjects}=useProjects()
  useEffect(() => {
    getProjects()
  }, []);

  return (
    <div >
      <h1 className='text-white'>Proyectos</h1>
      <div className='text-white'>
        { 
        loading ? <p>Cargando ...</p> :
        projects.length ? projects.map(project=> <ProjectPreview key={project._id}{...project}/>)
      : <p>No hay proyectos agregados</p>}
        </div>
      </div>
  )
}
