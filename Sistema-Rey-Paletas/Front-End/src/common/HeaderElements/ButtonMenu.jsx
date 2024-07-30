
import PropTypes from 'prop-types';

export default function ButtonMenu({ onClick }) {

    const IconMenu = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-all w-full h-full `}
            viewBox="0 0 512 512"
        >
            <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="35" d="M88 152h336M88 256h336M88 360h336" />
        </svg>
    );

    const handleClick = () => {
        onClick();
    };

    return (
        <div
            className='border w-10 h-10 p-1 rounded-sm flex justify-evenly items-center overflow-hidden relative lg:w-0 lg:border-[0] dark:text-white dark:fill-white'
            onClick={handleClick}
        >
            <IconMenu />
        </div>
    );
}

ButtonMenu.propTypes = {
    onClick: PropTypes.func.isRequired,
};