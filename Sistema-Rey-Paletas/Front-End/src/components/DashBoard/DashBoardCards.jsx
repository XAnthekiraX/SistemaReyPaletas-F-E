import { CardsElements } from "../../common/DashBoard/CardsElements";


const DashBoardCards = () => {
    return (
        <div className='w-full h-auto justify-center gap-5 items-start grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 '>
            {
                CardsElements.map((cardItem, index)=>{
                    return(
                        <div key={index} className=' flex p-5 gap-2 items-center flex-col h-auto border bg-white shadow-lg dark:bg-big-stone-950 dark:border-big-stone-800'>
                            <div className=' h-10 w-10 rounded-full shadow-lg bg-athens-gray-200 flex items-center text-blue-600 text-xl justify-center dark:bg-big-stone-900 dark:text-white'>{cardItem.iconCard}</div>
                            <div className='text-2xl font-bold dark:text-white'>{cardItem.valueCard}</div>
                            <div className='text-xs text-athens-gray-500 dark:text-athens-gray-300'>{cardItem.nameCard}</div>
                        </div>
                    )
                })
            }
        </div>
    );
};




export default DashBoardCards;
