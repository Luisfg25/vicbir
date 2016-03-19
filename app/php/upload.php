<?php
if(isset($_FILES['file'])){
	$errors=array();
	$file_name = $_FILES['file']['name'];
    $file_size =$_FILES['file']['size'];
    $file_tmp =$_FILES['file']['tmp_name'];
    $file_type=$_FILES['file']['type'];   
    $file_ext = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
    $extensions = array("jpeg","jpg","png");    

    if(in_array($file_ext, $extensions) === false){
    	$errors[] = "Extension invalida.Inserte foto JPG o PNG";
    }
    if($file_size > 2097152){
        $errors[]='File size cannot exceed 2 MB';
    }
    else{
        print_r($errors);
    }

}else{
	$errors = array();
	$errors[]="No se encontro imagen";
	print_r($errors);
}



?>