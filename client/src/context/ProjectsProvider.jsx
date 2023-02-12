//busca y trae todos los projectos relacionados a el usuario logeado
import React, {createContext, useState} from 'react'
import { clientAxios } from '../config/clientAxios';

const ProjectsContext = createContext()

 const ProjectsProvider = ({children}) => {
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState({});
    const [alert, setAlert] = useState({});
    const [loading, setLoading] = useState(true);


    const handleShowAlert = (msg) => {
        setAlert({ msg });
        setTimeout(() => {
          setAlert({});
        }, 2000);
      };
    const getProjects= async ()=>{
        try {
            const token = sessionStorage.getItem('token')
            if (!token) {
                setLoading(false)
                return null
            }
            const config  ={
                headers: {
                    "Content-Type":"application/json",
                    Authorization : token
                }
            }

            const {data}=await clientAxios.get('/projects', config)
            console.log(data);
            setProjects(data.projects)

        } catch (error) {
            console.error(error);
            handleShowAlert(error.response ? error.response.data.msg : "error ...")
        }finally{
            setLoading(false)
        }
    }
    const getProject= async (id)=>{
        try {
            const token = sessionStorage.getItem('token')
            if (!token) {
                setLoading(false)
                return null
            }
            const config  ={
                headers: {
                    "Content-Type":"application/json",
                    Authorization : token
                }
            }

            const {data}=await clientAxios.get(`/projects/${id}`, config)
            console.log(data);
            setProject(data.project)

        } catch (error) {
            console.error(error);
            handleShowAlert(error.response ? error.response.data.msg : "error ...")
        }finally{
            setLoading(false)
        }
    }
  return (
    <ProjectsContext.Provider value={{loading, alert, handleShowAlert, projects, getProjects, project, getProject}}>
        {children}
    </ProjectsContext.Provider>
  )
}
export {ProjectsProvider}
export default ProjectsContext