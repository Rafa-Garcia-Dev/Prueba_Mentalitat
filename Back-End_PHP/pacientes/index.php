<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once("conexion.php");
$conexionBD=CConexion::ConexionBD();


if (isset($_GET["consultar"])){
    $sqlpacientes = pg_query($conexionBD,"SELECT * FROM pacientes WHERE id=".$_GET["consultar"]);
    if(pg_num_rows($sqlpacientes) > 0){
        $empleaados = pg_fetch_all($sqlpacientes);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}


if (isset($_GET["borrar"])){
    $sqlpacientes = pg_query($conexionBD,"DELETE FROM pacientes WHERE id=".$_GET["borrar"]);
    if($sqlpacientes){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}


if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    $tipodoc=$data->tipodoc;
    $documento=$data->documento;
    $nombre=$data->nombre;
    $apellido=$data->apellido;
    $sexo=$data->sexo;
        if(($tipodoc!="")&&($documento!="")&&($nombre!="")&&($apellido!="")&&($sexo!="")){
            
    $sqlpacientes = pg_query($conexionBD,"INSERT INTO pacientes(tipodoc,documento,nombre,apellido,sexo) VALUES('$tipodoc','$documento','$nombre','$apellido','$sexo') ");
    echo json_encode(["success"=>1]);
        }
    exit();
}

if(isset($_GET["actualizar"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["actualizar"];
    $tipodoc=$data->tipodoc;
    $documento=$data->documento;
    $nombre=$data->nombre;
    $apellido=$data->apellido;
    $sexo=$data->sexo;
    $sqlpacientes = pg_query($conexionBD,"UPDATE pacientes SET tipodoc='$tipodoc',documento='$documento',nombre='$nombre',apellido='$apellido',sexo='$sexo' WHERE id='$id'");
    echo json_encode(["success"=>1]);
    exit();
}


$query = "SELECT * FROM pacientes ";
$sqlpacientes = pg_query($conexionBD,$query);
    if(pg_num_rows($sqlpacientes)>0){
        $empleaados = pg_fetch_all($sqlpacientes);
        echo json_encode($empleaados);
    }
    else{ echo json_encode([["success"=>0]]); }

?>


