import PropTypes from 'prop-types';
import { removeGlobalVariable } from '../../cookies/cookieManajer';
import { ConfigIcon, LogoutIcon, UserIcon } from '../../images/icons/Icons';

export default function ContentButtonArrow({ seeOptions }) {



    const logOut = (e) => {
        e.preventDefault()
        removeGlobalVariable('loginStatus');
        removeGlobalVariable('name');
        removeGlobalVariable('secName');
        removeGlobalVariable('ci');
        removeGlobalVariable('email');
        removeGlobalVariable('role');
        removeGlobalVariable('codFranchise');
        window.location.reload();
    }

    return (
        <div className={`absolute ${seeOptions ? 'h-auto' : 'h-0 overflow-hidden opacity-0'} w-72  justify-center items-center border -right-4 top-[2.70rem] bg-white text-gray-500 dark:bg-big-stone-950 dark:text-white dark:border-big-stone-800 z-10 `}>
            <div className='w-full'>
                <div className='flex w-full px-7 py-3 gap-4 justify-start items-center rounded-md hover:bg-big-stone-200 dark:hover:text-black'>
                    <UserIcon />
                    <span className='w-32'>Mi perfil</span>
                </div>
                <div className='flex w-full px-7 py-3 gap-4 justify-start items-center rounded-md hover:bg-big-stone-200 dark:hover:text-black'>
                    <ConfigIcon />
                    <span className='w-32'>Configuraciones</span>
                </div>
            </div>
            <div>
                <div type='submit' className=' border-t dark:border-big-stone-800 w-full' onClick={logOut}>
                    <div className='flex w-full px-7 py-3 gap-4 justify-start items-start rounded-md hover:bg-big-stone-200 dark:hover:text-black '>
                        <LogoutIcon />
                        <span className='w-auto'>Salir</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

ContentButtonArrow.propTypes = {
    seeOptions: PropTypes.bool.isRequired,
};
