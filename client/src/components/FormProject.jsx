import React, { useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";
import { useProjects } from "../hooks/useProjects";
import { Alert } from "./Alert";
import { useParams } from "react-router-dom";

export const FormProject = () => {
  const { alert, handleShowAlert, storeProject, project } = useProjects();

  const inputName = useRef(null);
  const inputDescription = useRef(null);
  const inputDateExpire = useRef(null);
  const inputClient = useRef(null);

  const { formValues, handleInputChange, reset, setformValues } = useForm({
    name: "",
    description: "",
    dateExpire: "",
    client: "",
  });
  let { name, description, dateExpire, client } = formValues;

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      // encuentra el proyecto a editar por su id y rellena los campos con el valor de la db
      /* const { name, description, dateExpire, client } = project; */
      inputName.current.value = name;
      inputDescription.current.value = description;
      inputDateExpire.current.value = dateExpire.split("T")[0];
      inputClient.current.value = client;

      setformValues({
        name: project.name,
        description: project.description,
        dateExpire: project.dateExpire.split("T")[0],
        client: project.client,
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, description, dateExpire, client].includes("")) {
      handleShowAlert("todos los campos son obligatorios");
      return null;
    }

    storeProject({ id: id ? id : null, name, description, dateExpire, client }); //si hay id lo envia para que provider decida si crea o actualiza
  };

  return (
    <form
      className="form flex  flex-col flex-wrap items-center text-white h-60 p-10 my-20 "
      onSubmit={handleSubmit}
    >
      <h1 className="w-full text-sky-600 text-center text-3xl">
        {id ? "Editar proyecto" : "Agregar nuevo proyecto"}
      </h1>
      <div>
        <label htmlFor="name">Nombre del proyecto</label>
        <input
          type="text"
          id="name"
          placeholder="Nombre del proyecto."
          value={name}
          onChange={handleInputChange}
          name="name"
          ref={inputName}
        />
      </div>
      <div>
        <label htmlFor="description">Descripcion del proyecto</label>
        <input
          type="text"
          id="description"
          placeholder="Descripcion del proyecto."
          style={{ resize: "none" }}
          value={description}
          onChange={handleInputChange}
          name="description"
          ref={inputDescription}
        />
      </div>
      <div>
        <label htmlFor="dateExpire">Fecha de entrega</label>
        <input
          type="date"
          id="data-expire"
          value={dateExpire}
          onChange={handleInputChange}
          name="dateExpire"
          ref={inputDateExpire}
        />
      </div>
      <div>
        <label htmlFor="client">Nombre cliente</label>
        <input
          type="text"
          id="client"
          placeholder="Nombre de cliente."
          value={client}
          onChange={handleInputChange}
          name="client"
          ref={inputClient}
        />
      </div>
      {alert.msg && <Alert {...alert} />}
      <button type="submit" className="button-submit disabled:bg-slate-500">
        {id ? "Actualizar cambios" : "Guardar cambios"}
      </button>
    </form>
  );
};
