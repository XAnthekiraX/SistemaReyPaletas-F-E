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
    const [message, setMessage] = useState("");

    const categoryService = new CategoryService();

    const cleanForm = () => {
        setCodCategory("");
        setNameCategory("");
        setDescription("");
    };

    const saveCategory = async (e) => {
        e.preventDefault();

        // Crear el objeto addCategory con los valores del formulario
        const addCategory = { codCategory, nameCategory, description, codFranchise };

        // Validar si alguno de los campos está vacío
        if (!codCategory || !nameCategory || !description || !codFranchise) {
            setMessage("Por favor, rellene todos los datos.");
            return; // Si algún campo está vacío, salir de la función
        }

        try {
            // Si todos los campos están completos, ejecutar la función de guardado
            await categoryService.postUserSave(addCategory);
            setMessage("");

            // Si la solicitud es exitosa, limpiar el formulario y cerrar la tarjeta
            cleanForm();
            closeCard();
        } catch (error) {
            console.error("Error al guardar la categoría:", error);
        }
    };

    const AlertElement = ({ mensaje, clase }) => {
        return (
            <div className={`p-4 mb-4 text-sm ${clase} text-center`} role="alert">
                <span className="font-medium">{mensaje}</span>
            </div>
        );
    };

    AlertElement.propTypes = {
        mensaje: PropTypes.string,
        clase: PropTypes.string,
    }

    function renderMensaje() {
        if (message === "") {
            return <h1></h1>;
        } else if (message === "Registro Exitoso") {
            return (
                <AlertElement
                    mensaje={message}
                    clase="text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                />
            );
        } else {
            return (
                <AlertElement
                    mensaje={message}
                    clase="text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                />
            );
        }
    }

    const closeAllCard=()=>{

        closeCard(),
        setMessage('')
    }

    return (
        <form className='border w-96 h-auto grid grid-cols-1 gap-2 bg-white dark:bg-big-stone-900 flex-col dark:text-white p-3 rounded-lg'>
        {
            renderMensaje()
        }
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
                <div className='border rounded-lg p-3 mx-4 bg-red-500' onClick={closeAllCard}>Cancelar</div>
                <div className='border rounded-lg p-3 mx-4 bg-blue-500' onClick={saveCategory}>Guardar</div>
            </div>
        </form>
    );
}

CardNewCategory.propTypes = {
    closeCard: PropTypes.func.isRequired,
};
