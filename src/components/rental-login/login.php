<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
</head>
<body>
  <h2>Login</h2>
  <form action="login_process.php" method="POST">
    <label>Full Name:</label><br>
    <input type="text" name="name" required><br><br>

    <label>Email:</label><br>
    <input type="email" name="email" required><br><br>

    <label>Password:</label><br>
    <input type="password" name="password" required><br><br>

    <button type="submit">Login</button>
  </form>
</body>
</html>
