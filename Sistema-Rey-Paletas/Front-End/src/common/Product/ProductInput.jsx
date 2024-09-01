import PropTypes from 'prop-types';
export const InputProduct = ({ type, placeholder, name, accept, clase, value, onChangeF, onClickF }) => {
    return (
        <div className='mx-3 my-1.5 flex flex-col font-sans gap-2  dark:text-white dark:bg-big-stone-900'>
            <span className='text-sm font-semibold mx-1'>{name}</span>
            <input className={`outline-none focus:outline-blue-400 border text-base p-3 rounded-lg text-wrap  ${clase} dark:bg-big-stone-900`} type={type} placeholder={placeholder} accept={accept} value={value} required onChange={onChangeF} onClick={onClickF}/>
        </div>
    )
}

InputProduct.propTypes = {
    type:PropTypes.string,
    placeholder:PropTypes.string,
    name:PropTypes.string,
    accept:PropTypes.string,
    clase:PropTypes.string,
    value:PropTypes.string,
    onChangeF:PropTypes.func,
    onClickF:PropTypes.func,
};