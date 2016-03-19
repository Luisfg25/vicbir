<?php
// FUNCION PARA CONECTAR:


	$conexion = mysql_connect ("localhost", "v0011293", "VI51fiporo");
	if (!$conexion)
	{
	die ("No se conecto a la base de datos" . mysql_error());
	}
	else
	{
		echo "te conectaste bien piola. <br>";
	}
	$bd_seleccionada = mysql_select_db ("v0011293_catalogo", $conexion);
	if (!$bd_seleccionada)
	{
	die ("no conecto a la tabla" . mysql_error());
	}
	else
	{
		echo "conecto con tabla. <br>";
	}


?>