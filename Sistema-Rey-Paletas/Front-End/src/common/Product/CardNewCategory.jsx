import PropTypes from 'prop-types';
import { InputProduct } from './ProductInput';
import { useState } from 'react';
import CategoryService from '../../services/category/categoryServices';
import { getGlobalVariable } from '../../cookies/cookieManajer';

export default function CardNewCategory({ closeCard }) {
    const [codCategory, setCodCategory] = useState("");
    const [nameCategory, setNameCategory] = useState("");
    const [description, setDescription] = useState("");
    const codFranchise = getGlobalVariable('codFranchise')
    const categoryService = new CategoryService();

    const cleanForm = () => {
        setCodCategory("");
        setNameCategory("");
        setDescription("");
    };

    const saveCategory = async (e) => {
        e.preventDefault();
        const addCategory = { codCategory, nameCategory, description, codFranchise};

       
            const response = await categoryService.postUserSave(addCategory);
            console.log(response);
            // Si la solicitud es exitosa, limpia el formulario y cierra la tarjeta
            console.log("Categoría guardada:");
            cleanForm();
            closeCard();
        
    };

    return (
        <form className='border w-96 h-auto grid grid-cols-1 gap-2 bg-white dark:bg-big-stone-900 flex-col dark:text-white p-3 rounded-lg'>
            <span className='text-2xl font-bold m-auto'>Agregar Categoría</span>
            <InputProduct 
                type="text" 
                name="Codigo Categoria" 
                placeholder="Código" 
                value={codCategory} 
                onChangeF={(e) => setCodCategory(e.target.value.toUpperCase())}
                clase='uppercase' 
            />
            <InputProduct 
                type="text" 
                name="Nombre" 
                placeholder="Nombre" 
                value={nameCategory} 
                onChangeF={(e) => setNameCategory(e.target.value.toUpperCase())}
                clase='uppercase' 
            />
            <InputProduct 
                type="text" 
                name="Descripción" 
                placeholder="Descripción" 
                value={description} 
                onChangeF={(e) => setDescription(e.target.value.toUpperCase())}
                clase='uppercase' 
            />
            <div className='w-full grid grid-cols-2 text-center'>
                <div className='border rounded-lg p-3 mx-4 bg-red-500' onClick={closeCard}>Cancelar</div>
                <div className='border rounded-lg p-3 mx-4 bg-blue-500' onClick={saveCategory}>Guardar</div>
            </div>
        </form>
    );
}

CardNewCategory.propTypes = {
    closeCard: PropTypes.func.isRequired,
};
