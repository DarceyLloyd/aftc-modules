<?php

// Simulate wait for a response


$json = file_get_contents('php://input');
// var_dump($j);
// die();
$data = null;
if ($json != null){
    $data = json_decode($json);
}

$base_url = ( isset($_SERVER['HTTPS']) && $_SERVER['HTTPS']=='on' ? 'https' : 'http' ) . '://' .  $_SERVER['HTTP_HOST'];
$url = $base_url . $_SERVER["REQUEST_URI"];




$response = [
    "status" => "1",
    "method" => $_SERVER['REQUEST_METHOD'],
    "requestUrl" => $url,
    "get" => $_GET,
    "post" => $_POST,
    "json" => $json
];


sleep(0.5);

// http_response_code(400);
// die();

header('Content-Type: application/json');
echo json_encode($response);
// echo( file_get_contents("../data/test1.json") );



?>