import PropTypes from 'prop-types'; // Importa PropTypes para validar los tipos de propiedades de los componentes.

// Componente que muestra la lista de productos disponibles para seleccionar
export const ProductViewList = ({ name, price, onClick }) => (
    <li className='flex w-full justify-between px-10 hover:bg-big-stone-400 dark:bg-big-stone-800 my-1 dark:text-white dark:hover:bg-white dark:hover:text-black rounded-sm border'
        onClick={onClick}>
        <span>{name}</span> {/* Muestra el nombre del producto */}
        <span>{price}</span> {/* Muestra el precio del producto */}
    </li>
);

// Definición de los tipos de propiedades para ProductViewList
ProductViewList.propTypes = {
    name: PropTypes.string.isRequired, // El nombre debe ser una cadena y es obligatorio
    price: PropTypes.number.isRequired, // El precio debe ser un número y es obligatorio
    onClick: PropTypes.func.isRequired // onClick debe ser una función y es obligatorio
};