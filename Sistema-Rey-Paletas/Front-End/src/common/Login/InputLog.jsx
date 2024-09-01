import PropTypes from 'prop-types';

export const InputLog = ({ type, placeholder, name, accept, clase, value, icon, onChangeF, onClickF, change }) => {
    return (
        <div className='m-3 flex flex-col font-sans gap-2 dark:text-white dark:bg-big-stone-900'>
            <span className='text-sm font-semibold mx-1'>{name}</span>
            <div className={`text-base rounded-lg text-wrap flex justify-between items-center gap-2 ${clase} relative`}>
                <input
                    className='w-full h-full outline-none p-4 focus:text-black focus:outline-blue-500 rounded-lg'
                    type={type}
                    placeholder={placeholder}
                    accept={accept}
                    value={value}
                    onChange={onChangeF}
                    onClick={onClickF}
                    required
                />
                <div className='w-10 flex justify-center items-center absolute right-0' onClick={change}>
                    {icon}
                </div>
            </div>
        </div>
    );
}

InputLog.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    accept: PropTypes.string,
    clase: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.element,
    onChangeF: PropTypes.func,
    onClickF: PropTypes.func,
    change:PropTypes.func,
};
