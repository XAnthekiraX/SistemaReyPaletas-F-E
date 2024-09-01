
import PropTypes from 'prop-types';
import { IconMenu } from '../../images/icons/Icons';

export default function ButtonMenu({ onClick }) {

    const handleClick = () => {
        onClick();
    };

    return (
        <div
            className='border w-10 h-10 p-1 rounded-sm flex justify-evenly items-center overflow-hidden relative lg:w-0 lg:border-[0] dark:text-white dark:fill-white'
            onClick={handleClick}
        >
            <IconMenu/>
        </div>
    );
}

ButtonMenu.propTypes = {
    onClick: PropTypes.func.isRequired,
};