<?php 

$phone = $_POST['user_phone'];
// $name = $_POST['user_name'];
// $email = $_POST['user_email'];
$token = '959756329:AAHHFj-zyCNUW4_Fjdry9Y2nC65-aFJThpo';
$chat_id = '-397199560';
$arr = array(
	// "Name: " => $name,
	"Phone: " => $phone,
	// "E-mail: " => $emai
);

foreach ($arr as $key => $value) {
	$txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

header('location: index.html');

?>

<!-- https://api.telegram.org/bot959756329:AAHHFj-zyCNUW4_Fjdry9Y2nC65-aFJThpo/getUpdates -->