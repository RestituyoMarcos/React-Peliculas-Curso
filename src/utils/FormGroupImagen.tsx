import { ChangeEvent, useState } from "react";
import { useFormikContext } from 'formik';

export default function FormGroupImagen(props:FormGroupImagenProps) {
    
    const [imagenBase64, setImagenBase64] = useState("");
    const [imagenURL, setImagenURL] = useState(props.imagenURL);
    const {values} = useFormikContext<any>();

    const ManejarOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            const archivo = e.currentTarget.files[0];
            aBase64(archivo)
                .then((representacionBase64: string) => setImagenBase64(representacionBase64))
                .catch(error => console.error(error))

            values[props.campo] = archivo;
            setImagenURL('');
        }
    }

    const aBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        })
    }
    
    return (
        <div className="form-group">

            <label htmlFor={props.campo}>{props.label}</label>
            <div>
                <input type="file" name={props.campo} id={props.campo}
                    className="form-control"
                    accept=".jpg,.jpeg,.png"
                    onChange={ManejarOnChange} />
            </div>
            
            {imagenBase64 ? 
                <div style={{marginTop: "15px"}}>
                    <img src={imagenBase64} alt="Imagen seleccionada" style={{width: "250px"}} />
                </div> 
            : null}

            {imagenURL ? 
                <div style={{marginTop: "15px"}}>
                    <img src={imagenURL} alt="Imagen seleccionada" style={{width: "250px"}} />
                </div> 
            : null}

        </div>
    )
}

interface FormGroupImagenProps{
    campo: string;
    label: string;
    imagenURL: string;
}

FormGroupImagen.defaultProps = {
    imagenURL: ''
}