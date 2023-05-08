import FormularioCines from "./FormularioCines";

export default function EditarCines() {
    return (
        <>
            <h3>Editar cine</h3>

            <FormularioCines 
                modelo={{nombre: 'Marcos',}} 
                onSubmit={values => console.log(values)} />
        </>

    )
}