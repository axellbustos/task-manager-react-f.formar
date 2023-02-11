import React from "react";
import { Link, Button } from "react-router-dom";

export const Project = () => {
  return (
    <div>
      <div>
        <h1>Nombre del proyecto</h1>
        <Link to={`/project/editProject/:id`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-list-details"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
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
            class="icon icon-tabler icon-tabler-check"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
          <p>Nueva tarea</p>
        </div>
      </div>
      <div>
        <p>Colaboradores</p>
        <Button
        /* onClick={}  */
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-users"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
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
          <p>Agregar colaborador</p>
        </Button>
      </div>
    </div>
  );
};
