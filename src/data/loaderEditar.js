import { getCliente } from "./clientes";

export async function loaderEditar ({params}) {
    const cliente = await getCliente(params.ClienteId);
    if (Object.values(cliente).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'No hay resultados'
        })
    }
    
    return cliente
}