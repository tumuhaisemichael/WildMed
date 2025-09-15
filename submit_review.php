<?php
header('Content-Type: application/json');
require_once 'db.php';

$response = ['success' => false, 'message' => 'An unknown error occurred.'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $name = isset($_POST['name']) ? trim($_POST['name']) : '';
        $email = isset($_POST['email']) ? trim($_POST['email']) : '';
        $safari = isset($_POST['safari']) ? trim($_POST['safari']) : '';
        $rating = isset($_POST['rating']) ? (int)$_POST['rating'] : 0;
        $review_text = isset($_POST['review']) ? trim($_POST['review']) : '';

        // Sanitize inputs
        $name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);
        $safari = htmlspecialchars($safari, ENT_QUOTES, 'UTF-8');
        $review_text = htmlspecialchars($review_text, ENT_QUOTES, 'UTF-8');

        if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($safari) || $rating === 0 || empty($review_text)) {
            $response['message'] = 'Please fill in all required fields with valid data.';
        } else {
            $image_path = null;
            if (isset($_FILES['photos']) && $_FILES['photos']['error'] === UPLOAD_ERR_OK) {
                $upload_dir = 'uploads/';
                $file_extension = pathinfo($_FILES['photos']['name'], PATHINFO_EXTENSION);
                $file_name = uniqid('img_', true) . '.' . $file_extension;
                $target_file = $upload_dir . $file_name;

                if (move_uploaded_file($_FILES['photos']['tmp_name'], $target_file)) {
                    $image_path = $target_file;
                }
            }

            $stmt = $conn->prepare("INSERT INTO reviews (name, email, safari, rating, review, image_path) VALUES (?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("sssiss", $name, $email, $safari, $rating, $review_text, $image_path);

            if ($stmt->execute()) {
                $response['success'] = true;
                $response['message'] = 'Review submitted successfully.';
            } else {
                $response['message'] = 'Failed to save review: ' . $stmt->error;
            }

            $stmt->close();
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
