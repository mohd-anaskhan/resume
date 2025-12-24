<?php
// Stop direct access
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: /");
    exit;
}

// Receiver email
$to = "khananas9@gmail.com";

// Sanitize inputs
$name    = htmlspecialchars(trim($_POST["name"] ?? ""));
$email   = filter_var($_POST["email"] ?? "", FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars(trim($_POST["subject"] ?? ""));
$message = htmlspecialchars(trim($_POST["message"] ?? ""));

// Validate required fields
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    die("All fields are required.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email address.");
}

// Email subject
$mailSubject = "Contact Form: " . $subject;

// Email body
$mailBody = "
You have received a new message from your website contact form.

Name: $name
Email: $email
Subject: $subject

Message:
$message
";

// Headers
$headers  = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

// Send email
if (mail($to, $mailSubject, $mailBody, $headers)) {
    // Redirect to thank you page
    header("Location: /thankyou.html");
    exit;
} else {
    echo "Message could not be sent. Please try again later.";
}
