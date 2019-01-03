<?php
header('Access-Control-Allow-Origin: *');
if(empty($_POST['your_name'])  		||
   empty($_POST['your_email']) 		||
   empty($_POST['your_message'])	||
   !filter_var($_POST['your_email'], FILTER_VALIDATE_EMAIL))
   {
    echo "No arguments Provided!";
    http_response_code(404);
    return false;
   }

$name = $_POST['your_name'];
$email_address = $_POST['your_email'];
$message = $_POST['your_message'];

// Create the email and send the message
$to = 'support@proapp.tech'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "From: support@proapp.tech\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address" . "\r\n";
$headers .= 'Cc: sahilbathla1@gmail.com' . "\r\n";
mail($to,$email_subject,$email_body,$headers);
return true;
?>