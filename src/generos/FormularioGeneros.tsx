import { Form, Formik, FormikHelpers } from "formik";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { generoCreacionDTO } from "./generos.model.t";

export default function FormularioGeneros(props:FormularioGenerosProps) {
    
    return (
        <Formik initialValues={props.modelo}
        
        onSubmit={props.onSubmit}

        validationSchema={Yup.object({
            nombre: Yup.string().required("Este campo es requerido").primeraLetraMayuscula()
        })}

        >
            {(formikProps) => (
                
            <Form>
                <FormGroupText campo="nombre" label="Nombre" placeholder="Ej: Acción" />
                <Button 
                disabled={formikProps.isSubmitting} 
                type="submit">Salvar</Button>
                <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
            </Form>

            )}
            

        </Formik>
    )

}

interface FormularioGenerosProps{
    modelo: generoCreacionDTO;
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;
}