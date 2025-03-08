import { useEffect, useState } from 'react';
import Input from '../Input/Input';
import { BlockEyeIcon } from '../../icons/FormIcons/BlockEyeIcon';
import { EyeIcon } from '../../icons/FormIcons/EyeIcon';
import useToggle from '../../hooks/useToggle';
import { useAlert } from '../../context/AlertContext';
import FranchisesService from '../../services/franchises/franchisesServices';
import UsersService from '../../services/users/UserServices';

const franchisesService = new FranchisesService();
const usersService = new UsersService();

export default function RegisterCard() {
    const [validFranchiseCodes, setValidFranchiseCodes] = useState([]);
    const [validEmails, setValidEmails] = useState([]);
    const [validCI, setValidCI] = useState([]);
    const [changeType, setChangeType] = useToggle(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [ci, setCi] = useState("");
    const [password, setPassword] = useState("");
    const [codFranchise, setCodFranchise] = useState("");
    const role = "Employeed";
    const { showAlert } = useAlert();

    useEffect(() => {
        const fetchFranchises = async () => {
            try {
                const { data } = await franchisesService.getAllFranchise();
                setValidFranchiseCodes(data.map(franchise => franchise.codFranchise));
            } catch (error) {
                console.error("Error al obtener las franquicias", error);
                showAlert("Error al cargar las franquicias", "warning");
            }
        };
        fetchFranchises();
    }, [showAlert]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await usersService.getAllUser();
                setValidEmails(data.map(user => user.email));
                setValidCI(data.map(user => user.ci));
            } catch (error) {
                console.error("Error al obtener los usuarios", error);
                showAlert("Error al cargar los usuarios", "error");
            }
        };
        fetchUsers();
    }, [showAlert]);

    const validateForm = () => {
        if (![firstName, lastName, email, ci, password, codFranchise].every(field => field.trim())) {
            showAlert("Todos los campos son obligatorios", "warning");
            return false;
        }

        if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
            showAlert("El nombre y apellido no pueden contener números ni espacios", "warning");
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showAlert("El correo electrónico no es válido", "warning");
            return false;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
            showAlert("La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas y minúsculas", "warning");
            return false;
        }

        if (!validFranchiseCodes.includes(codFranchise)) {
            showAlert("El código de franquicia no es válido", "warning");
            return false;
        }

        if (validEmails.includes(email)) {
            showAlert("El correo ya está registrado", "warning");
            return false;
        }

        if (validCI.includes(ci)) {
            showAlert("La cédula ya está registrada", "warning");
            return false;
        }

        if (!validateEcuadorianCI(ci)) {
            showAlert("La cédula no es válida", "warning");
            return false;
        }

        return true;
    };

    const validateEcuadorianCI = (ci) => {
        if (ci.length !== 10) return false;

        const digits = ci.split('').map(Number);
        const provinceCode = parseInt(ci.substring(0, 2), 10);
        if (provinceCode < 1 || provinceCode > 24) return false;

        if (digits[2] < 0 || digits[2] > 6) return false;

        const coefficients = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        const total = digits.slice(0, 9).reduce((acc, digit, index) => {
            let value = digit * coefficients[index];
            return acc + (value >= 10 ? value - 9 : value);
        }, 0);

        return (10 - (total % 10)) % 10 === digits[9];
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const newUser = {
            firstName,
            lastName,
            email,
            ci,
            password,
            codFranchise,
            role
        };

        try {
            await usersService.postUserSave(newUser);
            showAlert("Datos enviados con éxito", "success");
        } catch (error) {
            showAlert("Error al enviar los datos", "error");
            console.error("Error:", error);
        }
    };

    return (
        <div className='w-[40rem] border border-gray-200 h-auto m-3 bg-white p-2 overflow-hidden shadow-xl rounded-lg'>
            <h1 className="text-[2rem] font-bold m-2">Vamos a Empezar</h1>
            <form className="w-full h-auto grid grid-cols-1 lg:grid-cols-2" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Ingrese su Nombre"
                    name="Nombre"
                    onChangeF={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    clase="text-gray-400 border"
                />
                <Input
                    type="text"
                    placeholder="Ingrese su Apellido"
                    name="Apellido"
                    onChangeF={(e) => setLastName(e.target.value)}
                    value={lastName}
                    clase="text-gray-400 border"
                />
                <Input
                    type="email"
                    placeholder="Ingrese su correo"
                    name="Email"
                    onChangeF={(e) => setEmail(e.target.value)}
                    value={email}
                    clase="text-gray-400 border"
                />
                <Input
                    type="text"
                    placeholder="Ingrese su CI"
                    name="CI"
                    onChangeF={(e) => setCi(e.target.value)}
                    value={ci}
                    clase="text-gray-400 border"
                />
                <Input
                    type={changeType ? "text" : "password"}
                    placeholder="Ingrese su contraseña"
                    name="Contraseña"
                    onChangeF={(e) => setPassword(e.target.value)}
                    value={password}
                    clase="text-gray-400 border"
                    icon={changeType ? <EyeIcon /> : <BlockEyeIcon />}
                    change={setChangeType}
                />
                <Input
                    type="text"
                    placeholder="Código de franquicia"
                    name="Codigo franquicia"
                    onChangeF={(e) => setCodFranchise(e.target.value)}
                    value={codFranchise}
                    clase="text-gray-400 border"
                />
                <Input
                    type="submit"
                    value="Enviar"
                    clase="bg-blue-500 text-white rounded p-2 cursor-pointer"
                />
            </form>
        </div>
    );
}
