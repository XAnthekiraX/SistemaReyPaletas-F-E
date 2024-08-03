export default function ButtonNotification() {

    const IconNotification = () => {
        return (
            <svg className='' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.146 3.248a2 2 0 0 1 3.708 0A7.003 7.003 0 0 1 19 10v4.697l1.832 2.748A1 1 0 0 1 20 19h-4.535a3.501 3.501 0 0 1-6.93 0H4a1 1 0 0 1-.832-1.555L5 14.697V10c0-3.224 2.18-5.94 5.146-6.752M10.586 19a1.5 1.5 0 0 0 2.829 0zM12 5a5 5 0 0 0-5 5v5a1 1 0 0 1-.168.555L5.869 17H18.13l-.963-1.445A1 1 0 0 1 17 15v-5a5 5 0 0 0-5-5" /></svg>
        )
    }

    return (
        <div className=' p-2 bg-gray-200 dark:bg-big-stone-900 dark:text-white flex justify-center items-center rounded-full relative cursor-pointer'>
            <div className='h-2 w-2 bg-red-500 rounded-full mb-6 absolute right-0 top-[0.5px] animate-ping animate-infinite animate-ease-linear'></div>
            <div className='h-1.5 w-1.5 bg-red-500 rounded-full mb-6 absolute right-0 top-0 '></div>
            <IconNotification />
        </div>
    )
}
