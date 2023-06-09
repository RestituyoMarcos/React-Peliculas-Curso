import { Field, Form, Formik } from 'formik';
import { generoDTO } from '../generos/generos.model.t';
import Button from './../utils/Button';

export default function FiltroPeliculas() {

    const valorInicial: filtroPeliculasForm = {
        titulo: '',
        generoId: 0,
        proximosEstrenos: false,
        enCines: false
    }

    const generos: generoDTO[] = [{id: 1, nombre: "Thriller"}, {id: 2, nombre: "Drama"}];

    return (
        <>
            <h3>Filtrar Películas</h3>

            <Formik
            
            initialValues={valorInicial}

            onSubmit={(valores) => {
                console.log(valores);
            }}

            >

                {(formikProps) => (

                    <Form>
                        
                        <div className='form-inline'>
                            <div className='form-group mb-2'>
                                <label htmlFor="titulo" className='sr-only'>Título</label>
                                <input type="text" id="titulo"
                                className='form-control' 
                                placeholder='Ej: Spider-Man'
                                {...formikProps.getFieldProps("titulo")} />
                            </div>
                            <div className='form-group mx-sm-3 mb-2'>
                                <select className='form-control'
                                    {...formikProps.getFieldProps("generoId")}
                                >
                                    <option value="0">Seleccione un Género</option>
                                    {generos.map((genero) => 
                                        <option key={genero.id} value={genero.id}>{genero.nombre}</option>
                                    )}
                                </select>
                            </div>
                            <div className='form-group mx-sm-3 mb-2'>
                                <Field className='form-check-input' id="proximosEstrenos"
                                name="proximosEstrenos" type="checkbox" />
                                <label htmlFor="proximosEstrenos" className='form-check-label'>Próximos Estrenos</label>
                            </div>
                            <div className='form-group mx-sm-3 mb-2'>
                                <Field className='form-check-input' id="enCines"
                                name="enCines" type="checkbox" />
                                <label htmlFor="enCines" className='form-check-label'>En Cines</label>
                            </div>

                            <Button className="btn btn-primary mb-2 mx-sm-3"
                            onClick={() => formikProps.submitForm()}>Filtrar</Button>
                            <Button className='btn btn-danger mb-2'
                                onClick={() => formikProps.setValues(valorInicial)}>Limpiar</Button>

                        </div>

                    </Form>

                )}

            </Formik>

        </>

    )
}

interface filtroPeliculasForm{
    titulo: string;
    generoId: number;
    proximosEstrenos: boolean;
    enCines: boolean;
}
