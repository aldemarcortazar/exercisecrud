
import { User } from "../interfaces/interfaces";


interface CrudTableRowProps{
    user:User,
    setDataToEdit: Function,
    deleteData: ( id: ( number | null ) ) => boolean,

}

const CrudTableRow: React.FunctionComponent< CrudTableRowProps > = ( { user, setDataToEdit, deleteData } ) => {

    const { id, name, constellation} = user;
    
    return(
        <tr>
            <th> { name } </th>
            <th> { constellation } </th>
            <th> 
                <button onClick={ () => setDataToEdit( user ) }>Editar</button>
                <button onClick={ () => deleteData( id ) } > Eliminar </button>
            </th>
        </tr>
    );
}


export default CrudTableRow;