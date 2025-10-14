<?php
session_start();
if (!isset($_SESSION['user_email'])) {
  header("Location: login.php");
  exit();
}
?>
<!DOCTYPE html>
<html>
<head>
  <title>Dashboard</title>
</head>
<body>
  <h2>Welcome to the Dashboard</h2>
  <p>You are logged in as: <?php echo $_SESSION['user_email']; ?></p>
</body>
</html>
