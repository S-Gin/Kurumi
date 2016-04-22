<?

mb_language("Japanese");
mb_internal_encoding("UTF-8");

if(!empty($_REQUEST["email"])){

$to = "contact@kurumi-inc.com";
$header = "From: ".$_REQUEST["email"];
$subject = "【お問い合わせ】ホームページ無料制作に関して";
$body = "";

//本文
if(!empty($_REQUEST["job"])){
    $body .= "会社名: ".$_REQUEST["job"]."\n";
}

if(!empty($_REQUEST["hp"])){
    $body .= "ホームページURL: ".$_REQUEST["hp"]."\n";
}

if(!empty($_REQUEST["skill"])){
    $body .= "職種: ".$_REQUEST["skill"]."\n";
}

if(!empty($_REQUEST["name"])){
    $body .= "担当者名: ".$_REQUEST["name"]."\n";
}

if(!empty($_REQUEST["kana"])){
    $body .= "ふりがな: ".$_REQUEST["kana"]."\n";
}

if(!empty($_REQUEST["tel"])){
    $body .= "電話番号: ".$_REQUEST["tel"]."\n";
}

if(!empty($_REQUEST["job"])){
    $body .= "メールアドレス: ".$_REQUEST["email"]."\n";
}

if(!empty($_REQUEST["permit"])){
    $body .= "「詳細・条件」全て了承でしょうか。: ".$_REQUEST["permit"]."\n";
}

if(!empty($_REQUEST["site"])){
    $body .= "参考サイト: ".$_REQUEST["site"]."\n";
}

if(!empty($_REQUEST["demand"])){
    $body .= "要望: ".$_REQUEST["demand"]."\n";
}

if(mb_send_mail($to,$subject,$body,$header)){
}

}

exit();

?>