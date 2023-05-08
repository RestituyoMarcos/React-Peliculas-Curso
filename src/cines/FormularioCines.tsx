import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";

export default function FormularioCines(props:FormularioCinesProps) {
    return(
        <Formik
    
    initialValues={props.modelo}
    onSubmit={props.onSubmit}
    validationSchema={Yup.object({
        nombre: Yup.string().required("Este escapo es requerido").primeraLetraMayuscula()
    })}
    >

        {(formikProps) => (

            <Form>

                <FormGroupText campo="nombre" label="nombre" />

                <Button disabled={formikProps.isSubmitting}
                    type="submit"
                >Guardar</Button>

                <Link className="btn btn-secondary" to="/cines">Cancelar</Link>

            </Form>

        )}

    </Formik>
    )
    
}

interface FormularioCinesProps{
    modelo: cinesCreacionDTO;
    onSubmit (valores: cinesCreacionDTO, acciones: FormikHelpers<cinesCreacionDTO>): void;
}