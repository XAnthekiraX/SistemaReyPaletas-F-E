import { InputLog } from "./InputLog";
import PropTypes from 'prop-types';




export const LoginCard =() =>{
    return (
        <div className='w-full h-auto border m-3 bg-white p-2 overflow-hidden shadow-xl rounded-lg'>
            <h1 className="text-[2rem] font-bold m-2"> Bienvenido a Admin</h1>
            <form className="w-full h-auto py-5 ">
                <InputLog type='email' placeholder='Correo o CI' name='Email' clase="text-gray-400 border" icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/></svg>} />
                <InputLog type='Email' placeholder='Ingrese su contraseña' name='Contraseña' clase="text-gray-400 border"  icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M13.35 16H2.65C1.74 16 1 15.26 1 14.35v-7.7C1 5.74 1.74 5 2.65 5h10.7c.91 0 1.65.74 1.65 1.65v7.69c0 .91-.74 1.65-1.65 1.65ZM2.65 6c-.36 0-.65.29-.65.65v7.69c0 .36.29.65.65.65h10.7c.36 0 .65-.29.65-.65V6.65c0-.36-.29-.65-.65-.65z"/><path fill="currentColor" d="M12.54 6H3.46V4.54C3.46 2.04 5.5 0 8 0s4.54 2.04 4.54 4.54zM4.46 5h7.08v-.46C11.54 2.59 9.95 1 8 1S4.46 2.59 4.46 4.54z"/><circle cx="12" cy="10.5" r="1" fill="currentColor"/><circle cx="8" cy="10.5" r="1" fill="currentColor"/><circle cx="4" cy="10.5" r="1" fill="currentColor"/></svg>}  />
                <InputLog type='submit' placeholder='Ingrese su correo' clase='bg-blue-500 text-white border-[0px]' value='Ingresar'/>
            </form>
        </div>
    )
}

LoginCard.propTypes = {
    setCiOrEmail:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ciOrEmail:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    setPassword:PropTypes.string,
    password:PropTypes.string,
    validate:PropTypes.func,
};