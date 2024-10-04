import { MinusIcon, PLusIcon } from "../../images/icons/Icons";
import PropTypes from 'prop-types'; // Importación para la validación de tipos de las props.

// Componente funcional que maneja la visualización de un producto seleccionado con su contador para agregar o quitar unidades.
export const ProductOrder = ({ name, count, onIncrement, onDecrement , totalAmount }) => {


    return (
        <li className='w-full grid grid-cols-3 dark:text-white'>
            <span className='border w-full flex text-center'>{name}</span> {/* Muestra el nombre del producto */}
            <div className='border flex justify-center items-center gap-3'>
                {/* Botón para decrementar la cantidad */}
                <div className='p-1 rounded-full border border-black dark:border-white' onClick={onDecrement} >
                    <MinusIcon /> {/* Icono de restar */}
                </div>
                <span>{count}</span> {/* Muestra la cantidad actual del producto */}
                {/* Botón para incrementar la cantidad */}
                <div className='p-1 rounded-full border border-black dark:border-white' onClick={onIncrement}>
                    <PLusIcon /> {/* Icono de sumar */}
                </div>
            </div>
            <span className='border w-full flex justify-center items-center text-center dark:text-white'>{totalAmount}</span> {/* Muestra la cantidad, por defecto en 1 */}
        </li>
    )
};

// Definición de los tipos de las props para 'ProductOrder'
ProductOrder.propTypes = {
    name: PropTypes.string.isRequired, // 'name' debe ser un string requerido.
    count: PropTypes.number.isRequired, // 'count' debe ser un número requerido.
    onIncrement: PropTypes.func.isRequired, // 'onIncrement' debe ser una función requerida para incrementar la cantidad.
    onDecrement: PropTypes.func,// 'onDecrement' debe ser una función requerida para decrementar la cantidad.
    totalAmount:PropTypes.number,
};
