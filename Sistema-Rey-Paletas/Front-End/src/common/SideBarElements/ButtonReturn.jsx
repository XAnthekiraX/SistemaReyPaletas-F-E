import PropTypes from 'prop-types';
//OnClick => recibe la función declarada  y se la pasa al elemento
const ButtonReturn = ({ onClick }) => {
    return (
        <svg className="h-7 w-7 cursor-pointer lg:w-0" onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z" />
        </svg>
    );
};

ButtonReturn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default ButtonReturn;
