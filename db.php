<?php
$servername = "153.92.7.151";
$username = "u612858265_Wildmedug";
$password = "Wildmedug@1.";
$dbname = "u612858265_Reviews";
$port = 3306;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
