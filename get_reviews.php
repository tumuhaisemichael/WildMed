<?php
header('Content-Type: application/json');
require_once 'db.php';

$response = [
    'success' => false,
    'message' => '',
    'rowCount' => 0,
    'reviews' => []
];

try {
    $sql = "SELECT id, name, safari, rating, review, image_path, likes, created_at FROM reviews ORDER BY created_at DESC";
    $result = $conn->query($sql);

    $response['rowCount'] = $result->num_rows;

    while ($row = $result->fetch_assoc()) {
        $response['reviews'][] = $row;
    }

    $response['success'] = true;
    $result->free();

} catch (mysqli_sql_exception $e) {
    $response['message'] = 'Failed to fetch reviews: ' . $e->getMessage();
    http_response_code(500);
}

if ($conn) {
    $conn->close();
}

echo json_encode($response);
?>
