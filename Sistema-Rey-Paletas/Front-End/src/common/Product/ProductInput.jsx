import PropTypes from 'prop-types';
export const InputProduct = ({ type, placeholder, name, accept, clase, value }) => {
    return (
        <div className='mx-3 my-1.5 flex flex-col font-sans gap-2 dark:text-white dark:bg-big-stone-900'>
            <span className='text-sm font-semibold mx-1'>{name}</span>
            <input className={`outline-1 border text-base p-3 rounded-lg text-wrap bg-transparent dark:border-big-stone-700  ${clase}`} type={type} placeholder={placeholder} accept={accept} value={value} required/>
        </div>
    )
}

InputProduct.propTypes = {
    type:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    accept:PropTypes.string.isRequired,
    clase:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
};