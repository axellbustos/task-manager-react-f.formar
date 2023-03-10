import React from "react";
import { FormProject } from "../components/FormProject";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useProjects } from "../hooks/useProjects";

export const ProjectEdit = () => {
  const { deleteProject } = useProjects();
  const { id } = useParams();

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar el proyecto?",
      showCancelButton: true,
      confirmButtonColor: "red",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProject(id);
      }
    });
  };

  return (
    <div className="flex justify-center ">
      <div className="w-2/4 ">
        <FormProject />
      </div>
      <div className="flex  flex-col flex-wrap items-center h-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-trash"
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
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
        <button className="" onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </div>
  );
};
