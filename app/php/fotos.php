<?php 
include ('conexion.php');

$result = $conn->query("SELECT * FROM productos");

$miArray = array();
 
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        $miArray[] = $rs;   
}
 
$salida = json_encode($myArray);
 
$conn->close();
 
echo($salida); 



?>