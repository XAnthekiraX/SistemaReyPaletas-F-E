import PropTypes from 'prop-types';
import Logo from "../../images/logo/logo.svg";
import { Link } from "react-router-dom";


export default function SideBar({ children }) {

    const NavElements = [
        {
            nameNav: 'DashBoard',
            dirNav: '/DashBoard',
            iconNav: <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1m-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1" /></svg>,
        },
        {
            nameNav: 'Productos',
            dirNav: '/Product',
            iconNav: <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.5V17m-4 0h8V7a4 4 0 1 0-8 0zm0-6.5L16 7m-8 7.5l8-3.5" /></svg>,
        },
        {
            nameNav: 'Pedidos',
            dirNav: '/Orders',
            iconNav: <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19V8.1L3.242 4.234l.916-.426L6.084 8.05h11.832l1.926-4.242l.916.427L19 8.1V19zm5-6.5h4q.213 0 .356-.144t.144-.357t-.144-.356T14 11.5h-4q-.213 0-.356.144t-.144.357t.144.356t.356.143" /></svg>,
        },
        {
            nameNav: 'Facturas',
            dirNav: '/Invoices',
            iconNav: <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.86 21.43L9 22l-3-2l-3 2V3h18v7.2c-.9-.38-2-.2-2.76.55l-8.38 8.38zM17 7H7v2h10zm-2 4H7v2h8zm-3.14 8.96V22h2.04l6.13-6.13L18 13.83zm9.85-6.49l-1.32-1.32a.24.24 0 0 0-.08-.06a.5.5 0 0 0-.62.04l-.02.02l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72" /></svg>,
        },

    ]



    return (

        <div className='w-full overflow-hidden h-full bg-big-stone-950  bg-opacity-90 flex flex-col px-4 justify-start items-start backdrop-blur-[1.5px] overflow-y-auto'>
            <div className=" flex text-gray-400 w-full  justify-between items-center">
                <img src={Logo} alt="Logo y Nombre del sistema" className="h-7  my-7 w-auto" />
                {children}
            </div>
            <ul className="w-full px-4 ">
                <li className="text-gray-500 text-lg my-4">Menu</li>
                {
                    NavElements.map((items, index) => {
                        return (
                            <li key={index} className="w-full h-auto flex my-2 p-3 justify-start items-center rounded-lg gap-5 text-lg text-gray-300 hover:bg-ebony-clay-700 hover:text-gray-200">
                                <div className="h-7 w-7  ">{items.iconNav}</div>
                                <Link to={items.dirNav}>{items.nameNav}</Link>
                            </li>
                        )
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