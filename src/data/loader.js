import { getClientes } from "./clientes";

export function loader() {
    const clientes = getClientes();

    return clientes
}
