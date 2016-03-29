<?php
 
/****** Database Details *********/
 
$host = "localhost"; 
$user = "v0011293"; 
$pass = "VI51fiporo"; 
$database = "catalogo";
$con = mysql_connect($host,$user,$pass);
 
if (!$con) {
die('Could not connect: ' . mysql_error());
}
 
//echo 'Connected successfully'; 
 
mysql_select_db($database,$con);
 
/*******************************/
 
?>