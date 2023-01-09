import { redirect } from "react-router-dom";
import { updateCliente } from "./";

export async function actionUpdate({request, params}) {
    const FormData =  await request.formData();
    const datos = Object.fromEntries(FormData);
    const email = FormData.get('email');

    const errores = [];
    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios')
    } 

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    if (!regex.test(email)) {
        errores.push('El email no es valido')
    }

    if(Object.keys(errores).length) {
        return errores
    }

    //Actualizar el cliente
    await updateCliente( params.ClienteId, datos );

    return redirect('/') //redirect en actions y loaders
}