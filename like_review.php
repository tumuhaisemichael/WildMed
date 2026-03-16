<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

require_once 'db.php';

$response = ['success' => false, 'message' => 'An unknown error occurred.'];

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'OK']);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Accept JSON or form-encoded
        $body = file_get_contents('php://input');
        $data = json_decode($body, true);
        if (!is_array($data)) {
            // parse as form-encoded
            parse_str($body, $data);
        }

        $review_id = isset($data['id']) ? (int)$data['id'] : (isset($_POST['id']) ? (int)$_POST['id'] : 0);

        if ($review_id > 0) {
            // Increase likes and return new count
            $conn->begin_transaction();
            $stmt = $conn->prepare("UPDATE reviews SET likes = likes + 1 WHERE id = ?");
            $stmt->bind_param("i", $review_id);
            if (!$stmt->execute()) {
                throw new Exception('Failed to execute update: ' . $stmt->error);
            }
            $stmt->close();

            // Retrieve new likes count
            $stmt2 = $conn->prepare("SELECT likes FROM reviews WHERE id = ?");
            $stmt2->bind_param("i", $review_id);
            $stmt2->execute();
            $res = $stmt2->get_result();
            $row = $res->fetch_assoc();
            $stmt2->close();

            $conn->commit();

            if ($row) {
                $response['success'] = true;
                $response['message'] = 'Review liked successfully.';
                $response['likes'] = (int)$row['likes'];
            } else {
                $response['message'] = 'Review not found.';
            }
        } else {
            $response['message'] = 'Invalid review ID.';
        }
    } catch (Exception $e) {
        // safely attempt rollback if available
        if (isset($conn)) {
            // suppress any warnings if rollback not possible
            @$conn->rollback();
        }
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
