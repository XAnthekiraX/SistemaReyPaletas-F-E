import { useState } from 'react'; // Importación de useState para el manejo de estados en el componente
import { InputLog } from './InputLog'; // Importación del componente InputLog
import UsersService from '../../services/users/UserServices'; // Importación del servicio de usuarios
import PropTypes from 'prop-types';
import { BlockEyeIcon, EyeIcon } from '../../images/icons/Icons';

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

export default function RegisterCard() {
  // Estados para manejar los datos de entrada y mensajes de aviso
  const [changeType, setChangeType] = useState(false); // Estado para mostrar mensajes de advertencia o éxito
  const [aviso, setAviso] = useState(""); // Estado para mostrar mensajes de advertencia o éxito
  const [firstName, setFirstName] = useState(""); // Estado para el primer nombre
  const [lastName, setLastName] = useState(""); // Estado para el apellido
  const [email, setEmail] = useState(""); // Estado para el correo electrónico
  const [ci, setCi] = useState(""); // Estado para el número de identificación (CI)
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [codFranchise, setCodFranchise] = useState("");
  const role = "Employeed";

  // Función para manejar la acción de registro del usuario
  const saveUser = (e) => {
    e.preventDefault(); // Previene la acción predeterminada del formulario (envío de datos)

    // Crear un objeto `user` con los datos ingresados por el usuario
    const user = {
      codFranchise,
      firstName,
      ci,
      lastName,
      email,
      password,
      role
    };

    // Validar que todos los campos requeridos estén completos
    if (!user.codFranchise || !user.firstName || !user.ci || !user.lastName || !user.email || !user.password || !user.role) {
      setAviso('Todos los campos son necesarios'); // Muestra un mensaje de error si falta algún campo
      return; // Detener la ejecución si faltan datos
    }

    // Validación de que el CI contiene solo números
    const ciRegex = /^\d+$/;
    if (!ciRegex.test(user.ci)) {
      setAviso('El CI debe contener solo números'); // Muestra un mensaje de error si el CI no es válido
      return; // Detener la ejecución si el CI no es válido
    }

    // Validación de que el correo electrónico tiene un formato correcto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      setAviso('El correo electrónico no es válido'); // Muestra un mensaje de error si el correo no es válido
      return; // Detener la ejecución si el correo no es válido
    }

    // Instancia del servicio de usuarios
    const userService = new UsersService();

    // Envío de los datos del usuario al servidor mediante una solicitud POST
    userService.postUserSave(user)
      .then(() => {
        // Si la solicitud es Usuario Registrado Exitosamentesa, limpiar el mensaje de aviso
        setAviso('Usuario Registrado Exitosamente');
      })
      .catch(error => {
        // Manejo de errores en la solicitud
        if (error.response) {
          // Error con respuesta del servidor
          setAviso('Error:', error.response.data); // Muestra el mensaje de error del servidor
          setAviso('Status:', error.response.status); // Muestra el código de estado HTTP
          setAviso('Headers:', error.response.headers); // Muestra las cabeceras de la respuesta
          setAviso("Correo o contraseña ya registrado"); // Muestra un mensaje si el correo o la contraseña ya están registrados
        } else if (error.request) {
          // Error de red o falta de respuesta del servidor
          setAviso('Error de red', error.request); // Muestra el error de la solicitud
        } else {
          // Otro tipo de error
          setAviso('error'); // Muestra un mensaje de error general
        }
      });
  };

  // Componente para mostrar alertas (mensajes de aviso)


  function renderAviso() {
    if (aviso === "") {
      return <h1></h1>;
    } else if (aviso === "Usuario Registrado Exitosamente") {
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

  const handleChangeType = () => {

    setChangeType(prevState => !prevState)
  }

  return (
    <div className='w-full h-auto border m-3 bg-white p-2 overflow-hidden shadow-xl rounded-lg'>
      <h1 className="text-[2rem] font-bold m-2"> Vamos a Empezar</h1>
      {renderAviso()}
      {/* Formulario de registro */}
      <form className="w-full h-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Campos del formulario con el componente InputLog */}
        <InputLog type='text' placeholder='Ingrese su Nombre' name='Nombre' onChangeF={(e) => setFirstName(e.target.value)} value={firstName} clase=" text-gray-400 border" />
        <InputLog type='text' placeholder='Ingrese su Apellido' name='Apellido' onChangeF={(e) => setLastName(e.target.value)} value={lastName} clase="text-gray-400 border" />
        <InputLog type='text' placeholder='Ingrese su correo' name='Email' onChangeF={(e) => setEmail(e.target.value)} value={email} clase="text-gray-400 border" />
        <InputLog type='text' placeholder='Ingrese su Ci' name='CI' onChangeF={(e) => setCi(e.target.value)} value={ci} clase="text-gray-400 border" />
        <InputLog type={`${changeType ? 'password' : 'text'}`} icon={changeType? <EyeIcon/> : <BlockEyeIcon/>} change={handleChangeType}  placeholder='Ingrese su contraseña' onChangeF={(e) => setPassword(e.target.value)} value={password} name='Contraseña' clase="text-gray-400 border" />
        <InputLog type='text' placeholder='Codigo de franquicia ' onChangeF={(e) => setCodFranchise(e.target.value)} value={codFranchise} name='Codigo franquicia' clase="text-gray-400 border" />
        <button type='submit' className='border p-4 rounded-lg bg-blue-400  lg:col-span-2 mx-4' onClick={(e) => saveUser(e)}>Registarse</button>
      </form>
    </div>
  );
}
