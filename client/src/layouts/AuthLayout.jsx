import React from 'react'
import {Outlet} from 'react-router-dom'
import { Header } from "../components/Header"
export const AuthLayout = () => {
  return (
    
        <div >
          <header>
            <Header/>
          </header>
          <main className="flex justify-center align-middle">
            <Outlet/>
          </main>
            
        </div>
  )
}
