<?php
// Report all mysqli errors as exceptions
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$servername = "153.92.7.151";
$username = "u612858265_Wildmedug";
$password = "Wildmedug@1.";
$dbname = "u612858265_Reviews";
$port = 3306;

try {
    $conn = new mysqli($servername, $username, $password, $dbname, $port);
    $conn->set_charset("utf8mb4");
} catch (mysqli_sql_exception $e) {
    header('Content-Type: application/json');
    http_response_code(500); // Internal Server Error
    echo json_encode([
        'success' => false,
        'message' => 'Database connection failed: ' . $e->getMessage()
    ]);
    exit();
}
?>
