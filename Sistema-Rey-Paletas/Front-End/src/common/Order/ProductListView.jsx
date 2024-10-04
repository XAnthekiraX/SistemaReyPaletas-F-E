import PropTypes from 'prop-types'; // Importación para la validación de tipos de las props.

export const ProductViewList = ({ name, price, onClick }) => (
    <li className='flex w-full justify-between px-10 hover:bg-big-stone-400 dark:bg-big-stone-800 my-1 dark:text-white dark:hover:bg-white dark:hover:text-black rounded-sm'
        onClick={onClick}>
        <span>{name}</span> {/* Muestra el nombre del producto */}
        <span>{price}</span> {/* Muestra el precio del producto */}
    </li>
);

// Definición de los tipos de las props para 'ProductViewList'
ProductViewList.propTypes = {
    name: PropTypes.string.isRequired, // 'name' debe ser un string requerido.
    price: PropTypes.number.isRequired, // 'price' debe ser un número requerido.
    onClick: PropTypes.func.isRequired, // 'onClick' debe ser una función requerida.
};