import PropTypes from 'prop-types';
import Logo from "../../images/logo/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavElements } from '../../common/SideBarElements/NavElements';

export default function SideBar({ children }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [visibleSubElements, setVisibleSubElements] = useState({});

    const handleItemClick = (index) => {
        setSelectedIndex(index);
    };

    const handleSubElementClick = (index) => {
        setVisibleSubElements(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className='w-full overflow-hidden h-full bg-big-stone-950 dark:bg-big-stone-900 transition-all flex flex-col px-4 justify-start items-start overflow-y-auto z-3'>
            <div className="flex text-gray-400 w-full justify-between items-center">
                <img src={Logo} alt="Logo y Nombre del sistema" className="h-7 my-7 w-auto" />
                {children}
            </div>
            <ul className="w-full px-4 gap-2 flex flex-col">
                <li className="text-gray-500 text-lg my-4">Menu</li>
                {
                    NavElements.map((items, index) => {
                        const activeClass = index === selectedIndex ? 'bg-big-stone-700 text-gray-200 border-b' : 'hover:bg-big-stone-800 text-gray-300'; 
                        return (
                            <div key={index} className="w-full border rounded-lg overflow-hidden ">
                                <div onClick={() => handleSubElementClick(index)} className='bg-big-stone-900 '>
                                    <Link
                                        
                                        className={`w-full h-auto flex p-3 justify-start items-center rounded-lg gap-5 text-lg ${activeClass}`}
                                        onClick={() => handleItemClick(index)}
                                    >
                                        <div className="h-7 w-7">
                                            {items.iconNav}
                                        </div>
                                        <li>
                                            {items.nameNav}
                                        </li>
                                    </Link>
                                </div>
                                {items.subNav && (
                                    <ul className={`${visibleSubElements[index] ? ' h-auto' : 'h-0 overflow-hidden'}`}>
                                        {items.subNav.map((subItem, subIndex) =>{
                                            return(
                                            <Link
                                                to={subItem.dirSubNav}
                                                key={subIndex}
                                                className="w-full h-auto flex p-3 justify-start items-center rounded-lg gap-5 text-base text-gray-300 hover:bg-big-stone-700"
                                                onClick={() => handleItemClick(index)}
                                            >
                                                <div className="h-5 w-5 ml-5">
                                                    {subItem.iconSubNav}
                                                </div>
                                                <li>
                                                    {subItem.nameSubNav}
                                                </li>
                                            </Link>
                                        )})}
                                    </ul>
                                )}
                            </div>
                        );
                    })
                }
            </ul>
        </div>
    );
}

// Validación de las props
SideBar.propTypes = {
    children: PropTypes.node.isRequired,
};
