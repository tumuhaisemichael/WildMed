<?php
header('Content-Type: application/json');
require_once 'db.php';

$response = ['success' => false, 'message' => 'An unknown error occurred.'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        $review_id = isset($data['id']) ? (int)$data['id'] : 0;

        if ($review_id > 0) {
            $stmt = $conn->prepare("UPDATE reviews SET likes = likes + 1 WHERE id = ?");
            $stmt->bind_param("i", $review_id);

            if ($stmt->execute()) {
                if ($stmt->affected_rows > 0) {
                    $response['success'] = true;
                    $response['message'] = 'Review liked successfully.';
                } else {
                    $response['message'] = 'Review not found.';
                }
            } else {
                $response['message'] = 'Failed to like review: ' . $stmt->error;
            }

            $stmt->close();
        } else {
            $response['message'] = 'Invalid review ID.';
        }
    } catch (mysqli_sql_exception $e) {
        $response['message'] = 'Database error: ' . $e->getMessage();
        http_response_code(500);
    }
} else {
    $response['message'] = 'Invalid request method.';
}

if (isset($conn)) {
    $conn->close();
}

echo json_encode($response);
?>
