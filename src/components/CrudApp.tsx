import  { FC, useState } from 'react';
import { User } from '../interfaces/interfaces';

import CrudForm from './CrudForm';
import CrudTable from './CrudTable';


const InitialDb: User[] = [
    { id: 1, name: 'Seiya', constellation: 'pegaso' },
    { id: 2, name: 'Shiryu', constellation: 'Dragon' },
    { id: 3, name: 'Hyoga', constellation: 'cisne' },
    { id: 4, name: 'shun', constellation: 'Andromeda' },
    { id: 5, name: 'Ikki', constellation: 'Fenix' },
];


const CrudApp: FC = () => {

    const [ db, setDb ] = useState( InitialDb );

    const [dataToEdit, setDataToEdit] = useState<null | User>( null );

    const createData: ( data: User ) => void = ( data: User ) => {
        data.id = Date.now();
        setDb( [...db, data] )
    }

    const updateData: ( data: User ) => void = ( data: User ):void => {
        const newData = db.map( el => el.id === data.id ? data : el );
        setDb( newData );
    }

    const deleteData: ( id: (number | null) ) => boolean = ( id: (number | null) ):boolean => {
        const resp:boolean = window.confirm( 'encerio quieres eliminar este usuario' );
        if( resp ){
            setDb( db.filter( e => e.id !== id )  );
            return true;
        }

        return false;
    }

    return (
        <div>
            <h2>CRUD APP</h2>
            <article className='grid-1-2'>
                <CrudForm 
                    createData={ createData }  
                    updateData={ updateData } 
                    dataToEdit={ dataToEdit }
                    setDataToEdit= { setDataToEdit }
                />
                <CrudTable 
                    data={ db } 
                    setDataToEdit={ setDataToEdit } 
                    deleteData={ deleteData }    
                />
            </article>
        </div>

    );
}


export default CrudApp;