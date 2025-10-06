<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'db.php';

$response = ['success' => false, 'message' => 'An unknown error occurred.'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Retrieve and sanitize POST data
        $name = isset($_POST['name']) ? trim($_POST['name']) : '';
        $email = isset($_POST['email']) ? trim($_POST['email']) : '';
        $safari = isset($_POST['safari']) ? trim($_POST['safari']) : '';
        $rating = isset($_POST['rating']) ? (int)$_POST['rating'] : 0;
        $review_text = isset($_POST['review']) ? trim($_POST['review']) : '';

        // Validate required fields
        if (empty($name)) {
            $response['message'] = 'Name is required.';
        } elseif (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $response['message'] = 'Valid email address is required.';
        } elseif (empty($safari)) {
            $response['message'] = 'Safari package selection is required.';
        } elseif ($rating < 1 || $rating > 5) {
            $response['message'] = 'Please select a rating between 1 and 5 stars.';
        } elseif (empty($review_text)) {
            $response['message'] = 'Review text is required.';
        } else {
            // Sanitize inputs for database storage
            $name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
            $email = filter_var($email, FILTER_SANITIZE_EMAIL);
            $safari = htmlspecialchars($safari, ENT_QUOTES, 'UTF-8');
            $review_text = htmlspecialchars($review_text, ENT_QUOTES, 'UTF-8');

            // Handle file upload
            $image_path = null;
            if (isset($_FILES['photos']) && $_FILES['photos']['error'] === UPLOAD_ERR_OK) {
                $upload_dir = 'uploads/';
                
                // Create upload directory if it doesn't exist
                if (!is_dir($upload_dir)) {
                    if (!mkdir($upload_dir, 0755, true)) {
                        $response['message'] = 'Failed to create upload directory.';
                        echo json_encode($response);
                        exit();
                    }
                }

                $allowed_types = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
                $file_extension = strtolower(pathinfo($_FILES['photos']['name'], PATHINFO_EXTENSION));
                
                if (!in_array($file_extension, $allowed_types)) {
                    $response['message'] = 'Invalid file type. Please upload JPG, PNG, GIF, or WebP images only.';
                    echo json_encode($response);
                    exit();
                }

                // Check file size (5MB max)
                if ($_FILES['photos']['size'] > 5 * 1024 * 1024) {
                    $response['message'] = 'File too large. Please upload images smaller than 5MB.';
                    echo json_encode($response);
                    exit();
                }

                $file_name = uniqid('img_', true) . '.' . $file_extension;
                $target_file = $upload_dir . $file_name;

                if (move_uploaded_file($_FILES['photos']['tmp_name'], $target_file)) {
                    $image_path = $target_file;
                } else {
                    $response['message'] = 'Failed to upload image.';
                    echo json_encode($response);
                    exit();
                }
            }

            // Insert review into database
            $stmt = $conn->prepare("INSERT INTO wildmed_reviews (name, email, safari, rating, review, image_path, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())");
            
            if (!$stmt) {
                $response['message'] = 'Database prepare error: ' . $conn->error;
            } else {
                $stmt->bind_param("sssiss", $name, $email, $safari, $rating, $review_text, $image_path);

                if ($stmt->execute()) {
                    $response['success'] = true;
                    $response['message'] = 'Review submitted successfully! Thank you for sharing your experience.';
                } else {
                    $response['message'] = 'Failed to save review: ' . $stmt->error;
                }

                $stmt->close();
            }
        }
    } catch (Exception $e) {
        $response['message'] = 'Database error: ' . $e->getMessage();
        http_response_code(500);
    }
} else {
    $response['message'] = 'Invalid request method. Only POST requests are allowed.';
    http_response_code(405);
}

// Close database connection
if (isset($conn)) {
    $conn->close();
}

echo json_encode($response);
?>