import { redirect } from "react-router-dom";
import { deleteCliente } from "./clientes";

export async function actionDelete({params}) {
    await deleteCliente(params.ClienteId);
    return redirect('/')
}