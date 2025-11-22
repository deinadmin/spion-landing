<?php
// Prevent CORS issues
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents("php://input"), true);

$name = $input['name'] ?? '';
$email = $input['email'] ?? '';
$message = $input['message'] ?? '';

// Basic validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["error" => "Bitte füllen Sie alle Felder aus."]);
    exit;
}

// Email configuration
$to = "hi@spion.fun";
$subject = "Neue Nachricht von Spion Kontaktformular";

// HTML Email Template
$email_content = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px; }
        .header { background-color: #000; color: #fff; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }
        .content { background-color: #fff; padding: 20px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
        .value { margin-top: 5px; font-size: 16px; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #999; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>Neue Kontaktanfrage</h2>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Name</div>
                <div class='value'>" . htmlspecialchars($name) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Email</div>
                <div class='value'><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></div>
            </div>
            <div class='field'>
                <div class='label'>Nachricht</div>
                <div class='value'>" . nl2br(htmlspecialchars($message)) . "</div>
            </div>
        </div>
        <div class='footer'>
            Gesendet von der Spion Landing Page
        </div>
    </div>
</body>
</html>
";

// Headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Spion Website <noreply@spion.fun>" . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

// Send email
if (mail($to, $subject, $email_content, $headers)) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Nachricht erfolgreich gesendet."]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Fehler beim Senden der Email."]);
}
?>
