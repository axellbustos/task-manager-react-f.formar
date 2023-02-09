import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../components/Header";
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
          <main className="flex justify-center align-middle ">
            <Outlet />
          </main>
        </div>
      ):(
        <Navigate to="/login" />
      )}
    </>
  );
};
