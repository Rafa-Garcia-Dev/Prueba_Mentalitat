<?php

class CConexion {

    public static function ConexionBD (){

        $servidor = "localhost";
        $nombreBaseDatos = "pacientes";
        $usuario = "postgres";
        $contrasenia = "root";

        try{

            $conn = pg_connect("host=$servidor dbname=$nombreBaseDatos user=$usuario password=$contrasenia");
    
        } catch(PDOException $exp){

        echo("No se pudo conectar a la base de datos, $exp");

        }

        return $conn;
    }
}


?>