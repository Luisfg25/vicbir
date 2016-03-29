<?php 

include ('conexion.php');

/** Switch case to Get Action from Controller **/

switch($_GET['action']){
	case 'addphoto';
	add_photo();
	break;
}

function add_photo(){
	$data = json_decode(file_get_contents("php://input"));
	$phototitle = $data-> phototitle;
	$phototext = $data-> phototext;
	$photocontent = $data-> photocontent;

	print_r($data);
	$qry = 'INSERT INTO 'fotos' ('PHOTOTITLE', 'PHOTOTEXT', 'PHOTOCONTENT') VALUES ("'.$phototitle .'" , "'.$phototext .'","'.$photocontent .'" ) ';

	$qry_res = mysql_query($qry);

	if($qry_res){
		$arr = array('msg' => "Foto añadadida Correctamente!", 'error' => '');
		$jsn = json_encode($arr);

	}
	else{
		$arr = array('msg' => "", 'error' => 'Error insertando en la DB');
	$jsn = json_encode($arr);
	}
}

?>