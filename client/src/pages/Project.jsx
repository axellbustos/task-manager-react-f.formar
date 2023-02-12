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
        <div className="text-white">
          <div>
            <h1>{name}</h1>
            <Link to={`/projects/editProject/${_id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-list-details"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 5h8" />
                <path d="M13 9h5" />
                <path d="M13 15h8" />
                <path d="M13 19h5" />
                <rect x="3" y="4" width="6" height="6" rx="1" />
                <rect x="3" y="14" width="6" height="6" rx="1" />
              </svg>
            </Link>
            <p>Editar</p>
          </div>
          <div>
            <p>Tareas del proyecto</p>
            <div
            /* onClick={} */
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-check"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              <p>Nueva tarea</p>
            </div>
          </div>
          {[1, 2].map((task) => {
            <Task />;
          })}
          <div>
            <p>Colaboradores</p>
            <button
            /* onClick={}  */
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-users"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
              <p>Agregar colaborador</p>
            </button>
          </div>
          {[1, 2].map((collaborator) => {
            <Collaborator />;
          })}
        </div>
      )}
    </>
  );
};
