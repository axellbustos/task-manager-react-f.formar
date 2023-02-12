import {useContext}from 'react'
import  ProjectsContext from "../context/ProjectsProvider"//deja a nivel global los proyectos leidos

export const useProjects = () => {
  return  useContext(ProjectsContext)
}
