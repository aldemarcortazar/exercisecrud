import CrudTableRow from './CrudTableRow';

import { User } from '../interfaces/interfaces';


interface CrudTableProps{
    data: User[],
    setDataToEdit: Function ,
    deleteData: ( id: ( number | null) ) => boolean
}

const   crudTable:React.FunctionComponent<CrudTableProps> = (  { data, setDataToEdit, deleteData } ) => {

    return (
        <div>
            <h3>Tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>constelacion</th>
                        <th> Acciones </th>
                    </tr>
                </thead>

                <tbody>
                    {   
                        ( data.length === 0  )
                           ? <tr> <td colSpan={3}> No hay datos  </td> </tr>
                           : data.map( s => <CrudTableRow key={ s.id } user={ s } setDataToEdit={ setDataToEdit } deleteData={ deleteData } />) 
                    }
                </tbody>
            </table>
        </div>
    );
}


export default crudTable;