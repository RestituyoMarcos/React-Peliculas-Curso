import ConfigurarValidaciones from "../Validaciones";
import FormularioGeneros from './FormularioGeneros';

ConfigurarValidaciones();

export default function CrearGenero(){
    //const history = useHistory();
    return (
        <>
        <h3>Crear Género</h3>

        <FormularioGeneros modelo={{nombre: ''}}
            onSubmit={async valores => {
                await new Promise(r => setTimeout(r, 1000))
                console.log(valores);
            }}
        />

        
        </>
    )
}