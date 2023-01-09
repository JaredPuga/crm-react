import { useNavigate, Form, useActionData } from "react-router-dom"
import { Formulario, ErrorForm } from "../components";

export const NuevoCliente = () => {

  const navigate = useNavigate();
  const errores = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo cliente</h1>
      <p className="mt-3 ">LLena todos los campos para registrar un nuevo cliente</p>

      <div className="flex justify-end">
        <button 
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate('/')}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {
          errores?.length && errores.map( (error, i) => (
            <ErrorForm key={i}>{error}</ErrorForm>
          ))
        }
        <Form
          method="post"
          noValidate
        >
          <Formulario />
        
          <input 
            type='submit'
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg hover:bg-blue-600 cursor-pointer"
            value='Registrar Cliente'
          />
        </Form>
      </div>
    </>
  )
}
