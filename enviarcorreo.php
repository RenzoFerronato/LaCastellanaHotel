<?php

require("class.phpmailer.php");
require("class.smtp.php");

// Valores enviados desde el formulario
if ( !isset($_POST["email"]) || !isset($_POST["nombre"]) || !isset($_POST["apellido"]) || !isset($_POST["pais"]) || !isset($_POST["telefono"]) ) {
    die ("Es necesario completar todos los datos del formulario");
}

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$pais = $_POST["pais"];
$telefono = $_POST["telefono"];
$arribo = $_POST["arribo"];
$partida = $_POST["partida"];
$habitaciones = $_POST["habitaciones"];

$email = $_POST["email"];
$asunto = 'Tiene una nueva consulta desde el formulario web!';
$mensaje = $_POST["mensaje"];

// Datos de la cuenta de correo utilizada para enviar vía SMTP
$smtpUsuario = "no-reply@c2001508.ferozo.com";  // Mi cuenta de correo
$smtpClave = "BGcrrpQ1P0";  // Mi contraseña
$smtpHost = "c2001508.ferozo.com";  // Dominio alternativo brindado en el email de alta 

// Email donde se enviaran los datos cargados en el formulario de contacto
$emailDestino = "julian.ferronato@hotmail.com";

$mail = new PHPMailer();

$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 465; 
$mail->SMTPSecure = 'ssl';
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";
//$mail->debug(3);



// VALORES A MODIFICAR //
$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;

$mail->From = $email; // Email desde donde envío el correo.
$mail->FromName = $email;
$mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario

$mail->Subject = "{$asunto}"; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$nombreHtml = nl2br($nombre);
$apellidoHtml = nl2br($apellido);
$paisHtml = nl2br($pais);
$telefonoHtml = nl2br($telefono);
$arriboHtml = nl2br($arribo);
$partidaHtml = nl2br($partida);
$habitacionesHtml = nl2br($habitaciones);

$mail->Body = 
	"Buenas! recibiste la siguiente consulta desde el formulario web <br><br>
	<b>Nombre:</b> {$nombreHtml} <br>
	<b>Apellido:</b> {$apellidoHtml} <br>
	<b>Pais:</b> {$paisHtml} <br>
	<b>Telefono:</b> {$telefonoHtml} <br>
	<b>Arribo:</b> {$arriboHtml} (campo opcional) <br>
	<b>Partida:</b> {$partidaHtmlHtml} (campo opcional) <br>
	<b>Habitaciones:</b> {$habitacionesHtml} (campo opcional) <br><br>

	<b>Mensaje de la consulta:</b> <br>
	{$mensajeHtml} <br> <br> Fin del mensaje enviado.<br>" ; // Texto del email en formato HTML

$mail->AltBody = 
	"Buenas! recibiste la siguiente consulta desde el formulario web \n \nNombre: {nombreHtml} \nApellido: {$apellidoHtml} \nPais: {$paisHtml} \nTelefono: {$telefonoHtml} \nArribo: {$arriboHtml} (campo opcional) \nPartida: {$partidaHtml} (campo opcional) \nHabitaciones: {$habitacionesHtml} (campo opcional) \n\nMensaje de la consulta: \n{$mensajeHtml} \n \n Fin del mensaje enviado.\n";
 // Texto sin formato HTML

// FIN - VALORES A MODIFICAR //
 
$estadoEnvio = $mail->Send(); 
if($estadoEnvio){
    echo '{"status": "200", "mensaje": "OK"}';  // Retorno 200 - OK
} else {
    echo '{"status": "401", "mensaje": "'.$mensaje.'"}'; // Error 401 - Credenciales Invalidas
}

?>