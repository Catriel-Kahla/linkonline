<?php
$host = "localhost";
$usuario = "root";        // Usuario por defecto en XAMPP
$contrasena = "";         // Por defecto vacío en XAMPP
$basedatos = "link_online_bd";

// Crear conexión
$conn = new mysqli($host, $usuario, $contrasena, $basedatos);

// Verificar conexión
if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}

// Opcional: establecer charset UTF-8
$conn->set_charset("utf8mb4");
?>
