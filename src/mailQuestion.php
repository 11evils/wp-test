<?php

$recepient = "tomservis@yandex.ru";
$siteName = "супер-сантехники.рф";

$phone = trim($_POST["questionPhone"]);
$message = "Посетитель оставил свой номер телефона для заявки: $phone";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>