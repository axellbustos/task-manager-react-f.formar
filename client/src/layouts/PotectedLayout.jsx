import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import useAuth from "../hooks/useAuth";

export const ProtectedLayout = () => {
  const { auth, loading } = useAuth();
  {
    if (loading) {
      return <p className="text-white">Cargando...</p>
    }
  }

  return (
    <>
      {auth._id? (
        <div className=" h-full ">
            <header>
              <Header />
            </header>
          <div className="flex align-middle h-full ">
            <SideBar/>
            <main className="flex  flex-col align-middle w-full">
              <Outlet />
            </main>
          </div>
          
        </div>
      ):(
        <Navigate to="/login" />
      )}
    </>
  );
};

