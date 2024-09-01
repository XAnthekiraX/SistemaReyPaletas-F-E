import { IconNotification } from "../../images/icons/Icons";

export default function ButtonNotification() {

    

    return (
        <div className=' p-2 bg-gray-200 dark:bg-big-stone-900 dark:text-white flex justify-center items-center rounded-full relative cursor-pointer'>
            <div className='h-2 w-2 bg-red-500 rounded-full mb-6 absolute right-0 top-[0.5px] animate-ping animate-infinite animate-ease-linear'></div>
            <div className='h-1.5 w-1.5 bg-red-500 rounded-full mb-6 absolute right-0 top-0 '></div>
            <IconNotification/>
        </div>
    )
}
