import FormularioCines from "./FormularioCines";

export default function CrearCines() {
    return (
        <>
            <h3>Crear cine</h3>

            <FormularioCines 
                modelo={{nombre: '',}} 
                onSubmit={values => console.log(values)} />

        </>

    )
}