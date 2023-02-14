import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <aside className=" text-center  w-1/4 bg-sky-200 sideBar">
      <Link to="createProject" className="p-1 flex m-1 justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-plus"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#000000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        Agregar Proyecto
      </Link>
    </aside>
  );
};
