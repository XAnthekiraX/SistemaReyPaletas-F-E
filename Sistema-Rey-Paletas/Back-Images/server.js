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

// Servir archivos estáticos desde la carpeta 'public/images/products'
app.use('/images', express.static(path.join(__dirname, '../Front-End/public/images/products')));

// Configuración de almacenamiento de Multer para subir archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = '../Front-End/public/images/products'; // Ruta donde se guardarán las imágenes subidas
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true }); // Crea la carpeta si no existe
        }
        cb(null, dir); // Pasa la ruta de destino a Multer
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nombre único para el archivo
    },
});

const upload = multer({ storage }); // Crea un objeto Multer con la configuración de almacenamiento

// Ruta para manejar la subida de imágenes
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: 'No se ha subido ninguna imagen.' });
    }

    res.json({
        message: 'Imagen subida correctamente',
        file: {
            originalname: req.file.originalname,
            filename: req.file.filename,
            path: req.file.path
        }
    });
});

// Ruta para eliminar una imagen
app.delete('/delete/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../Front-End/public/images/products', filename); // Ajusta la ruta

    try {
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(`Error al eliminar el archivo ${filename}:`, err);
                return res.status(500).send({ message: 'Error al eliminar la imagen.' });
            }
            res.json({ message: 'Imagen eliminada correctamente' });
        });
    } catch (error) {
        console.error(`Error al procesar la solicitud de eliminación:`, error);
        res.status(500).send({ message: 'Error al procesar la solicitud de eliminación.' });
    }
});


// Inicia el servidor en el puerto especificado
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
