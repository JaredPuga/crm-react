import { useLoaderData } from "react-router-dom"
import { Cliente } from "../components/Cliente";


export const IndexMain = () => {
  //El loader ya se conoce ya que se está exportando en el Principal y de ahí se pasa el loader, por lo tanto IndexMain ya conoce ese Loaderr
  const clientes = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3 ">Administra tus clientes</p>

      {
        clientes.length > 0 ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-2">Clientes</th>
                <th className="p-2">Contacto</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map(cliente => (
                <Cliente key={cliente.id} cliente = { cliente }/>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center mt-10">No hay clientes aún</p>
        )
      }
    </>
  )
}
