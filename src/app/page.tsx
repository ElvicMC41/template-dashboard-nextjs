'use client'
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

  //La logica del componente para iniciar sesion es completamente personalizable a las necesidadaes del usuario.

  const [logeado, setLogeado] = useState(false);

  const [usuario, setUsuario] = useState("admin");
  const [pass, setPass] = useState("admin");

  const logearUsuario = (e)=> {
    e.preventDefault();
    redirect("/dashboard/home");
  };

  useEffect(() => {
   if(logeado){
     redirect("/dashboard/home")
   }
  }, [])
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Iniciar Sesión</h2>
        
        <form onSubmit={logearUsuario}>
          <div className="mb-4">
            <label 
              htmlFor="username" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              value={usuario}
              onChange={(value) => setUsuario(value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              placeholder="Ingresa tu usuario"
              required
            />
          </div>

          <div className="mb-6">
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={pass}
              onChange={(value) => setPass(value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Iniciar Sesión
          </button>
        </form>

        <p className="mt-2 text-sm text-center text-gray-600">
          ¿No tienes cuenta?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
}
