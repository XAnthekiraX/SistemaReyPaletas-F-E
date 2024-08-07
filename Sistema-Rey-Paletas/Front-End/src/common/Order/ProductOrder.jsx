import PropTypes from 'prop-types'; // Importa PropTypes para validar los tipos de propiedades de los componentes.

// Componente para el ícono de más (+)
const PLusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m-7-7h14" />
    </svg>
);

// Componente para el ícono de menos (-)
const MinusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
        <path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" />
    </svg>
);


// Componente que muestra los productos seleccionados con botones para incrementar o decrementar la cantidad
export const ProductOrder = ({ name, count, onIncrement, onDecrement }) => (
    <li className='w-full  grid grid-cols-1 dark:text-white'>
        <span className='w-full flex justify-center items-center'>{name}</span> {/* Muestra el nombre del producto seleccionado */}
        <div className='flex justify-center items-center gap-3'>
            <div className='p-1 rounded-full border border-black dark:border-white' onClick={onDecrement}>
                <MinusIcon /> {/* Botón para decrementar la cantidad */}
            </div>
            <span>{count}</span> {/* Muestra la cantidad actual del producto */}
            <div className='p-1 rounded-full border border-black dark:border-white' onClick={onIncrement}>
                <PLusIcon /> {/* Botón para incrementar la cantidad */}
            </div>
        </div>
        <span className=' w-full flex justify-center items-center'> 123</span>
    </li>
);

// Definición de los tipos de propiedades para ProductOrder
ProductOrder.propTypes = {
    name: PropTypes.string.isRequired, // El nombre debe ser una cadena y es obligatorio
    count: PropTypes.number.isRequired, // La cantidad debe ser un número y es obligatorio
    onIncrement: PropTypes.func.isRequired, // onIncrement debe ser una función y es obligatorio
    onDecrement: PropTypes.func.isRequired, // onDecrement debe ser una función y es obligatorio
    price: PropTypes.number.isRequired // onDecrement debe ser una función y es obligatorio
};