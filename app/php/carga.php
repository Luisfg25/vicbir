<?php
//FUNCIONES PARA SUBIR LOS DATOS:
	include ("conexion.php");

	$title = $_POST['title'];
	$noticia = $_POST['noticia'];
	$imagen = $_FILES['imagen']['name'];
	$ruta = $_FILES ['imagen']['tmp_name'];
	$destino = "img/".$imagen;
	copy ($ruta, $destino);

	
if($_FILES['imagen']['type'] == "image/jpg" || $_FILES['imagen']['type'] == "image/png" || $_FILES['imagen']['type'] == "image/gif" || $_FILES['imagen']['type'] == "image/jpeg"){

$q = "INSERT INTO productos (TITULO, FOTO, TEXTO) VALUES ('$title', '$destino', '$noticia')";
		$rs = mysql_query($q);
		if($rs == false) {
			echo '<p>Error al insertar los campos en la tabla.</p>';
		}else{
			echo '<p>Los datos se han insertado correctamente.</p>';
		}
}else{
	echo "no es un archivo valido";
}

	foreach ($_FILES["imagen"] as $clave => $valor) 
	{
		echo "Propiedad: $clave  ---- Valor: $valor<br/>";
	}
	
?>