<?php
header('Content-Type: application/json');
require_once 'db.php';

$reviews = [];
$sql = "SELECT id, name, safari, rating, review, image_path, likes, created_at FROM reviews ORDER BY created_at DESC";
$result = $conn->query($sql);

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $reviews[] = $row;
    }
    $result->free();
}

$conn->close();
echo json_encode($reviews);
?>
