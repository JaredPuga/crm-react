import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { IndexMain, NuevoCliente, ErrorPage, EditarCliente } from "../pages";
import { loader as clientesLoader, action as nuevoClienteAction, loaderEditar, actionUpdate, actionDelete } from "../data"; //Loaders para get datos de API's u objetos y actions para procesar entradas en un Form (componente de RRD) 




export const Principal = createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <IndexMain />,
                loader: clientesLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: '/clientes/nuevo',
                element: <NuevoCliente />,
                action: nuevoClienteAction,
                errorElement: <ErrorPage />
            },
            {
                path: '/clientes/:ClienteId/editar',
                element: <EditarCliente />,
                loader: loaderEditar,
                action: actionUpdate,
                errorElement: <ErrorPage />
            },
            {
                path: '/clientes/:ClienteId/eliminar',
                action: actionDelete,
            },
        ]
    },
])
