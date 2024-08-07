package com.example.Back_End.exception;

// Importa la clase HttpStatus desde el paquete org.springframework.http
import org.springframework.http.HttpStatus;

// Importa la anotación ResponseStatus desde el paquete org.springframework.web.bind.annotation
import org.springframework.web.bind.annotation.ResponseStatus;

// Anota la clase para que devuelva un estado HTTP 404 (Not Found) cuando se lance esta excepción
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
    
    // Declara un identificador único para la serialización de la clase
    private static final long serialVersionUID = 1L;

    // Constructor que recibe un mensaje y lo pasa a la superclase (RuntimeException)
    public ResourceNotFoundException(String message){
        super(message);
    }
}
