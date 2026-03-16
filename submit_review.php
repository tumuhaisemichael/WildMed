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

            // Handle file upload (support single or multiple files; store all successful uploads)
            $image_paths = [];
            if (isset($_FILES['photos'])) {
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

                // Normalize file info to handle both single and multiple uploads
                $fileInfos = [];
                if (is_array($_FILES['photos']['name'])) {
                    // multiple files
                    foreach ($_FILES['photos']['name'] as $i => $fname) {
                        $fileInfos[] = [
                            'name' => $fname,
                            'type' => $_FILES['photos']['type'][$i],
                            'tmp_name' => $_FILES['photos']['tmp_name'][$i],
                            'error' => $_FILES['photos']['error'][$i],
                            'size' => $_FILES['photos']['size'][$i]
                        ];
                    }
                } else {
                    // single file
                    $fileInfos[] = $_FILES['photos'];
                }

                // Process uploads, keep all successful
                foreach ($fileInfos as $file) {
                    if ($file['error'] !== UPLOAD_ERR_OK) {
                        continue; // skip this file
                    }

                    $file_extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
                    if (!in_array($file_extension, $allowed_types)) {
                        continue; // skip invalid type
                    }

                    // Check file size (5MB max)
                    if ($file['size'] > 5 * 1024 * 1024) {
                        continue; // skip too large
                    }

                    $file_name = uniqid('img_', true) . '.' . $file_extension;
                    $target_file = $upload_dir . $file_name;

                    if (move_uploaded_file($file['tmp_name'], $target_file)) {
                        // store relative path so clients can load it
                        $image_paths[] = $target_file;
                    }
                }

                if (empty($image_paths) && !empty($fileInfos)) {
                    // No valid uploaded image found or all uploads failed; log for debugging
                    error_log('No valid uploaded image found or all uploads failed.');
                }
            }

            // Insert review into database; store image paths as JSON array in image_path column
            $stmt = $conn->prepare("INSERT INTO reviews (name, email, safari, rating, review, image_path, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())");
            
            if (!$stmt) {
                $response['message'] = 'Database prepare error: ' . $conn->error;
            } else {
                // bind image path as JSON string (empty array if none) to avoid binding issues
                $bindImagePath = !empty($image_paths) ? json_encode(array_values($image_paths)) : json_encode([]);
                $stmt->bind_param("sssiss", $name, $email, $safari, $rating, $review_text, $bindImagePath);

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