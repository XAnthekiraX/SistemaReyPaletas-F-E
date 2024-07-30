import PropTypes from 'prop-types';

export default function ContentButtonArrow({seeOptions}) {

    const UserIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16c-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4M400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4c14.6 0 38.3 16 89.6 16c51.7 0 74.9-16 89.6-16c47.6 0 86.4 38.8 86.4 86.4zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0S80 64.5 80 144s64.5 144 144 144m0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96s-96-43.1-96-96s43.1-96 96-96" /></svg>
        )
    }

    const ConfigIcon = () => {
        return (
            <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"><path d="m24 4l-6 6h-8v8l-6 6l6 6v8h8l6 6l6-6h8v-8l6-6l-6-6v-8h-8z" /><path d="M24 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z" /></g></svg>
        )
    }

    const LogoutIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z" /></svg>
        )
    }

    return (
        <div className={`absolute ${seeOptions ? 'h-auto' : 'h-0 opacity-0'} w-72  justify-center items-center border -right-4 top-[2.70rem] bg-white text-gray-500 dark:bg-big-stone-950 dark:text-white dark:border-big-stone-800 z-0 px-4`}>
            <div className='w-auto'>
                <div className='flex w-auto gap-4 justify-start items-center my-4 mx-4'>
                    <UserIcon />
                    <span className='w-32'>Mi perfil</span>
                </div>
                <div className='flex w-auto gap-4 justify-start items-center my-4 mx-4'>
                    <ConfigIcon />
                    <span className='w-32'>Configuraciones</span>
                </div>
            </div>
            <div className=' border-t dark:border-big-stone-800 w-full'>
                <div className='flex w-auto gap-4 justify-start items-center my-4 mx-4'>
                    <LogoutIcon />
                    <span className='w-32'>Salir</span>
                </div>
            </div>

        </div>
    )
}

ContentButtonArrow.propTypes = {
    seeOptions: PropTypes.bool.isRequired,
  };
  