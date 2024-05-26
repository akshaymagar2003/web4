<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: *");

// Allow the GET method
header("Access-Control-Allow-Methods: GET");

// Set the content type to JSON
header("Content-Type: application/json");

// Define the data
$data = array(
    array("start" => 1, "end" => 50, "rate" => 3.50),
    array("start" => 51, "end" => 150, "rate" => 4.00),
    array("start" => 151, "end" => 250, "rate" => 5.20),
    array("start" => 251, "end" => 999999, "rate" => 6.50)
);

// Output the data as JSON
echo json_encode($data);
?>
