
export const AlumnosListadoApp = ({value}) => {

    return (
        <>
        <h2>Alumnos</h2>
         <ul>
                  {value.map( (v, key) => {
                    return <li key={key}>{v}</li>
                  })}
            </ul>
        </>
    );
}