<?php
session_start();
require 'db_config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

  try {
    $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $stmt->execute([$name, $email, $password]);

    $_SESSION['user_email'] = $email;
    header("Location: dashboard.php");
    exit();
  } catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
  }
}
?>
