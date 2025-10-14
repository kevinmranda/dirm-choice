<?php
$host = "localhost";
$dbname = "your_database";
$username = "your_db_user";
$password = "your_db_password";

try {
  $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
  die("Connection failed: " . $e->getMessage());
}
?>
