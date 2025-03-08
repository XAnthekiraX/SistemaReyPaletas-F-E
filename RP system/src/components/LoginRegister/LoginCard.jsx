import { useState } from "react";
import Input from "../Input/Input";
import { EmailIcon } from "../../icons/FormIcons/EmailIcon";
import { PasswordIcon } from "../../icons/FormIcons/PasswordIcon";
import { EyeIcon } from '../../icons/FormIcons/EyeIcon';
import useToggle from "../../hooks/useToggle";
import UsersService from "../../services/users/UserServices";
import { useAlert } from "../../context/AlertContext";
import { useAuth } from "../../context/AuthContext";

const usersService = new UsersService(); // Evitamos crearlo en cada render

export const LoginCard = () => {
    const { showAlert } = useAlert();
    const { login } = useAuth();
    const [ciOrEmail, setCiOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useToggle(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación de campos vacíos
        if (!ciOrEmail.trim() || !password.trim()) {
            showAlert("Llene todos los campos", "warning");
            return;
        }

        try {
            const response = await usersService.getValidateUser(ciOrEmail, password);

            if (response.data.success) {
                showAlert("Datos Correctos", "success");
                login(response.data.user);
            } else {
                showAlert("Datos Erróneos", "error");
            }
        } catch (error) {
            showAlert("Datos Erróneos", "error");
            console.error("Error:", error);
        }
    };

    return (
        <div className="w-[40rem] border border-gray-200 h-auto m-3 bg-white p-2 overflow-hidden shadow-xl rounded-lg">
            <h1 className="text-[2rem] font-bold m-2">Bienvenido a Admin</h1>
            <form className="w-full h-auto py-5" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Correo o CI"
                    name="Email o CI"
                    clase="text-gray-400 border"
                    value={ciOrEmail}
                    onChangeF={(e) => setCiOrEmail(e.target.value)}
                    icon={<EmailIcon />}
                />
                <Input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Ingrese su contraseña"
                    name="Contraseña"
                    clase="text-gray-400 border"
                    value={password}
                    onChangeF={(e) => setPassword(e.target.value)}
                    icon={isPasswordVisible ? <PasswordIcon /> : <EyeIcon />}
                    change={setIsPasswordVisible}
                />
                <Input type="submit" value="Ingresar" />
            </form>
        </div>
    );
};
