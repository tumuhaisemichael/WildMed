<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'db.php';

$response = [
    'success' => false,
    'message' => '',
    'rowCount' => 0,
    'reviews' => []
];

try {
    // Prepare and execute query
    $sql = "SELECT id, name, safari, rating, review, image_path, likes, created_at FROM wildmed_reviews ORDER BY created_at DESC";
    $result = $conn->query($sql);

    if (!$result) {
        throw new Exception("Query failed: " . $conn->error);
    }

    $response['rowCount'] = $result->num_rows;

    if ($response['rowCount'] > 0) {
        while ($row = $result->fetch_assoc()) {
            // Sanitize output data
            $row['name'] = htmlspecialchars_decode($row['name']);
            $row['safari'] = htmlspecialchars_decode($row['safari']);
            $row['review'] = htmlspecialchars_decode($row['review']);
            
            // Ensure likes is never null
            $row['likes'] = $row['likes'] ?? 0;
            
            // Format the date
            $row['created_at'] = date('Y-m-d H:i:s', strtotime($row['created_at']));
            
            $response['reviews'][] = $row;
        }
        $response['success'] = true;
        $response['message'] = 'Reviews fetched successfully.';
    } else {
        $response['success'] = true;
        $response['message'] = 'No reviews found.';
    }

    $result->free();

} catch (Exception $e) {
    $response['message'] = 'Failed to fetch reviews: ' . $e->getMessage();
    http_response_code(500);
    error_log("Get reviews error: " . $e->getMessage());
}

// Close database connection
if (isset($conn)) {
    $conn->close();
}

echo json_encode($response);
?>