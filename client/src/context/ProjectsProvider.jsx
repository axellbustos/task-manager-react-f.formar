//busca y trae todos los projectos relacionados a el usuario logeado
import React, {createContext, useState} from 'react'
import { clientAxios } from '../config/clientAxios';
import { useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

const ProjectsContext = createContext()
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
 const ProjectsProvider = ({children}) => {
    const navigate = useNavigate()
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
    const storeProject = async (project)=>{
        try {
            const token = sessionStorage.getItem('token')
            if (!token) {
                return null
            }
            const config  ={
                headers: {
                    "Content-Type":"application/json",
                    Authorization : token
                }
            }
            if (project.id) {
                const {data}=await clientAxios.put(`/projects/${project.id}`, project, config)
            console.log(data);
            
            const projectUpdated = projects.map(projectState =>{
                if (projectState._id === data.projectUpdate._id) {
                    return data.projectUpdate
                }
                return projectState
            })

            setProjects(projectUpdated)

            Toast.fire({
                icon : 'success',
                title : data.msg
            });  
            }else{
             const {data}=await clientAxios.post(`/projects`, project, config)
            console.log(data);
            setProjects([...projects, data.project])

            Toast.fire({
                icon : 'success',
                title : data.msg
            });   
            }
            
            navigate('/projects')

        } catch (error) {
            console.error(error);
            handleShowAlert(error.response ? error.response.data.msg : "error ...")
        }
    }
  return (
    <ProjectsContext.Provider value={{loading, alert, handleShowAlert, projects, getProjects, project, getProject, storeProject}}>
        {children}
    </ProjectsContext.Provider>
  )
}
export {ProjectsProvider}
export default ProjectsContext