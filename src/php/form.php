<?php 

	
$nameError = "";
$emailError = "";
$subjectError = "";
$messageError = "";
$success = "";

	
	if(isset($_POST['submit']))
	{
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];	

	if(empty($name)||empty($visitor_email)||empty($subject))
	{
		$nameError = "All fields are required";
		echo $nameError;
?>

<script>
	window.location = "index.html#contact";
		exit;
	
</script>

<?php
	}
	else{
	$email_from = $visitor_email;
	$email_subject = 'New website enquiry';
	$email_body = "You have received a new website enquiry from Jack Applications\n".
		"From: $name \n".
		"Email Address $visitor_email \n".
		"Subject $subject \n".
		"Enquiry $message \n".
		
		$to = "projects@jackapplications.com";
		$headers = "From: $email_from \r\n";
?>



<?php
	
	if(mail($to,$email_subject,$email_body,$headers)){
		?>

<script>


	alert("Thanks for your enquiry, a member of our team will be in touch soon!");
	window.location = "index.html";
</script>
<?php
exit;		
}
	else{
	
	?>
<script>
	alert("Sorry, something went wrong there, please try again");
	window.location = "index.html";
</script>
<?php
	}
	}
	}
?><!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
</body>
</html>

