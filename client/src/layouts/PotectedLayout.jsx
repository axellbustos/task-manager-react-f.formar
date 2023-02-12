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
        <div>
            <header>
              <Header />
            </header>
          <div className="flex  align-middle ">
            <SideBar/>
            <main className="flex justify-center align-middle ">
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

