import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Task } from "../components/Task";
import { Collaborator } from "../components/Collaborator";
import { useProjects } from "../hooks/useProjects";

export const Project = () => {
  const { id } = useParams();
  const { loading, alert, getProject, project } = useProjects();
  const { name, description, dateExpire, client, _id } = project;

  useEffect(() => {
    getProject(id);
  }, [id]);

  return (
    <>
      {loading ? (
        <p>Cargando ...</p>
      ) : (
        <div className="projectDetail ">
          <div className="border rounded-md p-2 m-2 flex justify-between">
            <h1 >{name}</h1>
            <div>
               <p>Editar</p>
            <Link to={`/projects/editProject/${_id}`} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-edit"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                <line x1="16" y1="5" x2="19" y2="8" />
              </svg>
            </Link>
            </div>
           
          </div>
          <div className="border rounded-md p-2 m-2 flex justify-between">
            <p>Tareas del proyecto</p>
            <div
            /* onClick={} */
            >
              <p>Nueva tarea</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-check"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </div>
          </div>
          {[1, 2].map((task) => {
            <Task />;
          })}
          <div className="border rounded-md p-2 m-2 flex justify-between">
            <p>Colaboradores</p>
            <div>
              <button
            /* onClick={}  */
            ><p>Agregar colaborador</p>
            </button>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-users"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
            </div>
            
          </div>
          {[1, 2].map((collaborator) => {
            <Collaborator />;
          })}
        </div>
      )}
    </>
  );
};
