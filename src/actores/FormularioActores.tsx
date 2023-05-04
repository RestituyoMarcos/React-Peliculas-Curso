import { actorCreacionDTO } from "./actores.model";
import { Formik, FormikHelpers } from 'formik';
import { Form } from 'formik';
import FormGroupText from './../utils/FormGroupText';
import Button from './../utils/Button';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import FormGroupFecha from './../utils/FormGroupFecha';
import FormGroupImagen from './../utils/FormGroupImagen';

export default function FormularioActores(props:FormularioActoresProps) {

    return (
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required("Este campo es requerido").primeraLetraMayuscula(),
                fechaNacimiento: Yup.date().required("La fecha de nacimiento es obligatoria")
            })}
        >

        {(formikProps) => (
            <Form>

                <FormGroupText campo="nombre" label="nombre" />

                <FormGroupFecha label="Fecha Nacimiento" campo="fechaNacimiento" />

                <FormGroupImagen campo="foto" label="Imagen" imagenURL={props.modelo.fotoURL} />

                <Button disabled={formikProps.isSubmitting}
                    type="submit"
                >Guardar</Button>

                <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
            </Form>
        )}

        </Formik>
    )
    
}

interface FormularioActoresProps{
    modelo: actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>): void;
}