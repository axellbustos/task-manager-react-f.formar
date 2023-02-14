import React from 'react'
import {Link} from 'react-router-dom'

export const ProjectPreview = ({name,_id, client}) => {
  return (
    <div className='border rounded-md p-2 m-2 bg-sky-600 '>
        <p className="text-lg">{name} <span className="text-base text-gray-400">| {client}</span></p>
        <Link to={`/projects/${_id}`} className="text-sm">Ver proyecto</Link>
    </div>
  )
}
