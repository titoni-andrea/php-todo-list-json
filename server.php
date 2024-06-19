<?php


if(isset($_POST["name"]) && isset($_POST["last_name"])) {

$contDati = file_get_contents("dati.json");

$students = json_decode($contDati, true);

$nuovoUser = [
    "name" => $_POST("name"),
    "last_name" => $_POST("last_name")

];

$students[] = $nuovoUser;

$studentsJson = json_encode($students);

file_put_contents("dati.json", $studentsJson);

header(`Content-Type: application/json`);

echo $studentsJson;

} 
else {
    $contDati = file_get_contents("dati.json");

    header(`Content-Type: application/json`);

    echo $contDati;
}