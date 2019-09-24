<?php 

$data = '{\"message\" : \"Hello ' . htmlspecialchars($_GET["hour"]) . '!\"}';
header('Content-Type: application/json');
echo json_encode($data);
