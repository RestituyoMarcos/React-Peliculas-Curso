import FormularioActores from "./FormularioActores";

export default function EditarActores() {
    return (
        <>
            <h3>Editar Actores</h3>

            <FormularioActores
                modelo={{nombre: 'Restituyo', fechaNacimiento: new Date('2000-08-11T00:00:00'), fotoURL: 'https://media.licdn.com/dms/image/C4E03AQFlcsoF6Hu1jQ/profile-displayphoto-shrink_800_800/0/1628107797364?e=1688601600&v=beta&t=1MaOn4R65vnsPzGk_2UQt-xeC8km9RpSwpgwvi8X-Jo', biografia: `# Marcos Rosario 
El **MEJOR** de esta mielda`
            }}
                onSubmit={values => console.log(values)} />

        </>

    )
}