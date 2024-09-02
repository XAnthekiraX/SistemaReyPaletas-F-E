const express = require('express'); // Importa el módulo Express para crear el servidor web
const cors = require('cors'); // Importa el módulo CORS para permitir solicitudes desde otros orígenes
const multer = require('multer'); // Importa Multer para manejar la subida de archivos
const path = require('path'); // Importa el módulo Path para manejar rutas de archivos
const fs = require('fs'); // Importa el módulo FS para interactuar con el sistema de archivos

const app = express(); // Crea una instancia de una aplicación Express

// Configura CORS para permitir solicitudes desde el origen específico de tu frontend
app.use(cors({
    origin: 'http://localhost:5173', // Reemplaza esto con la URL de tu frontend
}));


// Servir archivos estáticos desde la carpeta 'public/images'
app.use('/images', express.static(path.join(__dirname, '../frontend/react/public/images')));


// Configuración de almacenamiento de Multer para subir archivos
const storage = multer.diskStorage({
    // Define la carpeta de destino para los archivos subidos
    destination: (req, file, cb) => {
        const dir = '../Front-End/public/images/products'; // Ruta donde se guardarán las imágenes subidas
        // Si la carpeta no existe, créala
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true }); // Crea la carpeta si no existe
        }
        cb(null, dir); // Pasa la ruta de destino a Multer
    },
    // Define el nombre del archivo cuando se guarda
    filename: (req, file, cb) => {
        // Usa la fecha actual y la extensión del archivo original para crear un nombre único
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage }); // Crea un objeto Multer con la configuración de almacenamiento

// Ruta para manejar la subida de imágenes
app.post('/upload', upload.single('image'), (req, res) => {
    // Verifica si se ha subido un archivo
    if (!req.file) {
        return res.status(400).send({ message: 'No se ha subido ninguna imagen.' }); // Responde con un error si no hay archivo
    }

    const imagePath = req.file.path; // Obtiene la ruta del archivo subido

    // Responde con un mensaje de éxito y detalles del archivo
    res.json({
        message: 'Imagen subida correctamente',
        file: {
            originalname: req.file.originalname, // Nombre original del archivo
            filename: req.file.filename, // Nombre del archivo después de ser guardado
            path: req.file.path // Ruta completa del archivo guardado
        }
    });
});

// Ruta para eliminar una imagen
app.delete('/delete/:filename', (req, res) => {
    const filename = req.params.filename; // Obtiene el nombre del archivo desde los parámetros de la URL
    const filePath = path.join(__dirname, '../frontend/react/public/images', filename); // Construye la ruta completa del archivo

    fs.unlink(filePath, (err) => {
        // Si ocurre un error al eliminar el archivo, responde con un mensaje de error
        if (err) {
            console.error(`Error al eliminar el archivo ${filename}:`, err);
            return res.status(500).send({ message: 'Error al eliminar la imagen.' });
        }
        // Si la eliminación es exitosa, responde con un mensaje de éxito
        res.json({ message: 'Imagen eliminada correctamente' });
    });
});

// Inicia el servidor en el puerto especificado
const PORT = process.env.PORT || 3001; // Usa el puerto de la variable de entorno o 3001 por defecto
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`); // Mensaje de confirmación al iniciar el servidor
});
