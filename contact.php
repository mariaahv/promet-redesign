<?php
if($_POST)
{
     $to_email       = "promet@promet.com.pe"; //Recipient email, Replace with own email here
     
     //check if its an ajax request, exit if not
     if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
         
         $output = json_encode(array( //create JSON data
             'type'=>'error', 
             'text' => 'Sorry Request must be Ajax POST'
         ));
         die($output); //exit script outputting json data
     } 
     
     //Sanitize input data using PHP filter_var().
     $nombres      = filter_var($_POST["nombres"], FILTER_SANITIZE_STRING);
     $telefono      = filter_var($_POST["telefono"], FILTER_SANITIZE_STRING);
     $asunto      = filter_var($_POST["asunto"], FILTER_SANITIZE_STRING);
     $email    = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
     $consulta     = filter_var($_POST["consulta"], FILTER_SANITIZE_STRING);          
     
     //email body
     $message_body = $message."\r\n\r\nNombres: ".$nombres. "\r\nEmail: ".$email."\r\nTeléfono: ". $telefono. "\r\nMensaje: " .$consulta;
     
     //proceed with PHP email.
     $headers = 'From: '.$email. "\r\n" .
     'Reply-To: '.$email.'' . "\r\n" .
     'X-Mailer: PHP/' . phpversion();     
	 
     $send_mail = mail($to_email, $asunto, $message_body, $headers);
     
     if(!$send_mail)
     {
         //If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
         $output = json_encode(array('type'=>'error', 'text' => 'No se pudo enviar el email! Por favor pruebe otra vez.'));
         die($output);
     }else{
         $output = json_encode(array('type'=>'message', 'text' => 'Hola '.$nombres.', gracias por contactarnos.'));
         die($output);
     }
}
?>