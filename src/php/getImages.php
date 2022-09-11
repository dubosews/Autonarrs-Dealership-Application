<?php
$stockID = $_post['id'];

$dir = "../img/uploads/$stockID/";
$imageList = scandir($dir);

print($imageList);
?>