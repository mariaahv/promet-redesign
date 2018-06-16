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
     $experiencia      = filter_var($_POST["experiencia"], FILTER_SANITIZE_STRING);
     $email    = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
     $ciudad    = filter_var($_POST["ciudad"], FILTER_SANITIZE_EMAIL);
     $consulta     = filter_var($_POST["consulta"], FILTER_SANITIZE_STRING);

     //email body
     $message_body = $message."\r\n\r\nNombres: ".$nombres. "\r\nEmail: ".$email."\r\nTeléfono: ". $telefono."\r\nciudad: ". $ciudad."\r\nexperiencia: ". $experiencia."\r\nMensaje: " .$consulta;

     //proceed with PHP email.
     $headers = 'From: '.$email. "\r\n" .
     'Reply-To: '.$email.'' . "\r\n" .
     'X-Mailer: PHP/' . phpversion();

     $send_mail = mail($to_email, $email, $message_body, $headers);

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


 ini_set("SMTP","mail.escuelactec.com");
	ini_set("smtp_port","localhost");
	ini_set('sendmail_from', 'info@escuelactec.com');

	//variables para los campos de texto
	$nombre = strip_tags($_POST["nombre"]);
	$apellidos = strip_tags($_POST["apellidos"]);
	$mail = strip_tags($_POST["correo"]);
	$mensaje = strip_tags($_POST["comentario"]);

	//variables para los datos del archivo
	$nameFile = $_FILES['archivo']['name'];
	$sizeFile = $_FILES['archivo']['size'];
	$typeFile = $_FILES['archivo']['type'];
	$tempFile = $_FILES["archivo"]["tmp_name"];
	$fecha= time();
	$fechaFormato = date("j/n/Y",$fecha);

	$correoDestino = "info@escuelactec.com";

	//asunto del correo
	$asunto = "Enviado por " . $name . " ". $apellido;


 	// -> mensaje en formato Multipart MIME
	$cabecera = "MIME-VERSION: 1.0\r\n";
	$cabecera .= "Content-type: multipart/mixed;";
	//$cabecera .="boundary='=P=A=L=A=B=R=A=Q=U=E=G=U=S=T=E=N='"
	$cabecera .="boundary=\"=C=T=E=C=\"\r\n";
	$cabecera .= "From: {$mail}";

	//Primera parte del cuerpo del mensaje
	$cuerpo = "--=C=T=E=C=\r\n";
	$cuerpo .= "Content-type: text/plain";
	$cuerpo .= "charset=utf-8\r\n";
	$cuerpo .= "Content-Transfer-Encoding: 8bit\r\n";
	$cuerpo .= "\r\n"; // línea vacía
	$cuerpo .= "Correo enviado por: " . $name . " ". $apellido;
	$cuerpo .= " con fecha: " . $fechaFormato . "\r\n";
	$cuerpo .= "Email: " . $mail . "\r\n";
	$cuerpo .= "Mensaje: " . $mensaje . "\r\n";
	$cuerpo .= "\r\n";// línea vacía

 	// -> segunda parte del mensaje (archivo adjunto)
        //    -> encabezado de la parte
    $cuerpo .= "--=C=T=E=C=\r\n";
    $cuerpo .= "Content-Type: application/octet-stream; ";
    $cuerpo .= "name=" . $nameFile . "\r\n";
    $cuerpo .= "Content-Transfer-Encoding: base64\r\n";
    $cuerpo .= "Content-Disposition: attachment; ";
    $cuerpo .= "filename=" . $nameFile . "\r\n";
    $cuerpo .= "\r\n"; // línea vacía

    $fp = fopen($tempFile, "rb");
    $file = fread($fp, $sizeFile);
	$file = chunk_split(base64_encode($file));

    $cuerpo .= "$file\r\n";
    $cuerpo .= "\r\n"; // línea vacía
    // Delimitador de final del mensaje.
    $cuerpo .= "--=C=T=E=C=--\r\n";

	//Enviar el correo
	if(mail($correoDestino, $asunto, $cuerpo, $cabecera)){
		echo "Correo enviado";
	}else{
		echo "Error de envio";
	}

?>
