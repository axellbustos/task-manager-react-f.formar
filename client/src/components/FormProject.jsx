import React from 'react'
import { useForm } from '../hooks/useForm'
import { useProjects } from '../hooks/useProjects'
import { Alert } from './Alert'

export const FormProject = () => { 
    const {alert, handleShowAlert,storeProject} = useProjects()

    const {formValues,handleInputChange,reset} = useForm({
        name:"",
        description:"",
        dateExpire:"",
        client:""
    })
    const {name,description, dateExpire, client}= formValues

    const handleSubmit =(e)=>{
        e.preventDefault()

        if ([name,description,dateExpire,client].includes("")) {
            handleShowAlert("todos los campos son obligatorios")
            return null
          }

        storeProject({name, description, dateExpire, client})
    }

  return (
    <form className='form flex  flex-col flex-wrap items-center text-white h-60 p-10 my-20 '
    onSubmit={handleSubmit}
    >
        <h1 className='w-full text-sky-600 text-center text-3xl'>Agregar Proyecto</h1>
        <div>
            <label htmlFor='name'>Nombre del proyecto</label>
            <input type="text" id='name' placeholder='Nombre del proyecto.' value={name} onChange={handleInputChange} name="name"/>
        </div>
        <div>
            <label htmlFor='description'>Descripcion del proyecto</label>
            <input type="text" id='description' placeholder='Descripcion del proyecto.' style={{resize:"none"}} value={description} onChange={handleInputChange} name="description"/>
        </div>
        <div>
            <label htmlFor='dateExpire'>Fecha de entrega</label>
            <input type="date" id='data-expire' value={dateExpire} onChange={handleInputChange} name="dateExpire" />
        </div>
        <div>
            <label htmlFor='client'>Nombre cliente</label>
            <input type="text" id='client' placeholder='Nombre de cliente.' value={client} onChange={handleInputChange} name="client"/>
        </div>
        {alert.msg && <Alert {...alert}/>}
        <button type="submit" className='button-submit disabled:bg-slate-500'>Actualizar/Guardar</button>
    </form>
  )
}
