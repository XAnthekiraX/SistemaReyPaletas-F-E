import { useState } from "react";
import { setGlobalVariable } from "../../cookies/cookieManajer";
import { InputLog } from "./InputLog";
import PropTypes from 'prop-types';
import UsersService from "../../services/users/UserServices";
import { EmailIcon, PasswordIcon } from "../../images/icons/Icons";

const AlertElement = ({ mensaje, clase }) => {
    return (
        <div className={`p-4 mb-4 text-sm ${clase}`} role="alert">
            <span className="font-medium">{mensaje}</span>
        </div>
    );
};

AlertElement.propTypes = {
    mensaje: PropTypes.string,
    clase: PropTypes.string,
}


export const LoginCard = () => {
    const [aviso, setAviso] = useState("");
    const [ciOrEmail, setCiOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const usersService = new UsersService



    const handleSubmit = (e) => {
        e.preventDefault();
        usersService.getAllUser(ciOrEmail, password)
            .then(response => {
                setAviso("Registro Exitoso")
                console.log(response);
                setGlobalVariable("loginStatus", response.data.success)
                setGlobalVariable("name", response.data.user.firstName)
                setGlobalVariable("secName", response.data.user.lastName)
                setGlobalVariable("email", response.data.user.email)
                setGlobalVariable("ci", response.data.user.ci)
                setGlobalVariable("role", response.data.user.role)
                setGlobalVariable("codFranchise", response.data.user.codFranchise)
                window.location.reload();
            })
            .catch(error => {
                setAviso("Datos Incorrectos")
                console.error('Error:', error);
            });
    };


    function renderAviso() {
        if (aviso === "") {
            return <h1></h1>;
        } else if (aviso === "Registro Exitoso") {
            return (
                <AlertElement
                    mensaje={aviso}
                    clase="text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                />
            );
        } else {
            return (
                <AlertElement
                    mensaje={aviso}
                    clase="text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                />
            );
        }
    }



    return (
        <div className='w-full h-auto border m-3 bg-white p-2 overflow-hidden shadow-xl rounded-lg'>
            <h1 className="text-[2rem] font-bold m-2"> Bienvenido a Admin</h1>
            {renderAviso()}
            <form className="w-full h-auto py-5 ">
                <InputLog type='text' placeholder='Correo o CI' name='Email' clase="text-gray-400 border" onChangeF={(e) => setCiOrEmail(e.target.value)} icon={<EmailIcon/>} />
                <InputLog type='password' placeholder='Ingrese su contraseña' name='Contraseña' clase="text-gray-400 border" onChangeF={(e) => setPassword(e.target.value)} icon={<PasswordIcon/>} />
                <InputLog type='submit' placeholder='Ingrese su correo' clase='bg-blue-500 text-white border-[0px]' value='Ingresar' onClickF={handleSubmit} />
            </form>
        </div>
    )
}
