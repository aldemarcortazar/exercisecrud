import { useState, useEffect, FC, ChangeEvent } from "react";
import { User } from "../interfaces/interfaces";


interface CrudFormProps {
    createData : ( data: User  ) => void,
    updateData: ( user: User ) => void,
    dataToEdit: (User | null),
    setDataToEdit: Function
}

const initialForm: User = {
    name: '',
    constellation: '',
    id: null,
}

const CrudForm: FC<CrudFormProps> = ( { createData, updateData, dataToEdit, setDataToEdit } ) =>{

    const [ form, setForm ] = useState<User>( initialForm );

    useEffect( () => {

        if( dataToEdit ){
            setForm( dataToEdit )
        }else{
            setForm( initialForm );
        }



    }, [dataToEdit] );

    const handleChange = ( e: ChangeEvent<HTMLInputElement> ) => {
        setForm( {
            ...form,
            [e.target.name]: e.target.value
        } )
    }

    const handleSubmit = ( e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if( !form.name || !form.constellation ){
            alert( 'datos incompletos' );
            return;
        }

        if( form.id === null ){
            createData( form );
        } else{
            updateData( form );
        }

        handleReset();

    }

    const handleReset = ( ) => {
        setForm( initialForm );
        setDataToEdit( null );
    }


    return(
        <div>
            <h3> { dataToEdit ? 'editar': 'Agregar' }  </h3>
            <form
                onSubmit={ handleSubmit }
            >
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Nombre" 
                    onChange= { handleChange }
                    value={ form.name }
                />

                <input 
                    type="text" 
                    name="constellation" 
                    placeholder="constelacion" 
                    onChange={ handleChange }
                    value={ form.constellation }
                />

                <input 
                    type="submit" 
                    value="Enviar" 
                />

                <input 
                    type="reset" 
                    value="Resetear"
                    onClick={ handleReset }
                />
            </form>
        </div>
    );
}

export default CrudForm;