import { Link, useHistory } from "react-router-dom";
import Button from "../utils/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import FormGroupText from './../utils/FormGroupText';
import ConfigurarValidaciones from "../Validaciones";

ConfigurarValidaciones();

export default function CrearGenero(){
    //const history = useHistory();
    return (
        <>
        <h3>Crear Género</h3>

        <Formik initialValues={{
            nombre: ''
        }}
        
        onSubmit={async values => {
            await new Promise(r => setTimeout(r, 500));
            console.log(values);
        }}

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

        
        </>
    )
}