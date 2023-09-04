<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $suggestion = $_POST["suggestion"];
    $to = "theaskews08@gmail.com";
    $subject = "New Suggestion";
    $message = "Suggestion: " . $suggestion;

    mail($to, $subject, $message);

    header("Location: index.html");
    exit();
  }
?>
