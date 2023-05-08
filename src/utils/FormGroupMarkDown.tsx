import { Field, useFormikContext } from "formik";
import ReactMarkdown from "react-markdown";
import './FormGroupMarkDown.css'

export default function FormGroupMarkDown(props:FormGroupMarkDownProps) {

    const {values} = useFormikContext<any>();

    return (
        <div className="form-group form-markdown">

            <div>
                <label htmlFor={props.campo}>{props.label}</label>
                <div>
                    <Field className="form-textarea"
                    as="textarea"
                    name={props.campo}></Field>
                </div>
            </div>
            <div>
                <label>{props.label}</label>
                <div className="markdown-container">
                    <ReactMarkdown>{values[props.campo]}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

interface FormGroupMarkDownProps{
    campo: string;
    label: string;
}