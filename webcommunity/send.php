<?

mb_language("Japanese");
mb_internal_encoding("UTF-8");

if(!empty($_REQUEST["email"])){

$to = "event@kurumi-inc.com";
$header = "From: ".$_REQUEST["email"];
$subject = "【参加登録完了】Webクリエイター交流会 in 東京(HPより)";
$body = "";

//本文
if(!empty($_REQUEST["name"])){
    $body .= "名前: ".$_REQUEST["name"]."\n";
}

if(!empty($_REQUEST["kana"])){
    $body .= "かな: ".$_REQUEST["kana"]."\n";
}

if(!empty($_REQUEST["tel"])){
    $body .= "電話番号: ".$_REQUEST["tel"]."\n";
}

$body .= "メールアドレス: ".$_REQUEST["email"]."\n";

if(!empty($_REQUEST["gender"])){
    $body .= "性別: ".$_REQUEST["gender"]."\n";
}

if(!empty($_REQUEST["job"])){
    $body .= "会社名: ".$_REQUEST["job"]."\n";
}

if(!empty($_REQUEST["skill"])){
    $body .= "スキル: ".$_REQUEST["skill"]."\n";
}

if(!empty($_REQUEST["Trigger"])){
    $body .= "きっかけ: ".$_REQUEST["Trigger"]."\n";
}

if(!empty($_REQUEST["invitation"])){
    $body .= "LINEグループ招待: ".$_REQUEST["invitation"]."\n";
}

if(!empty($_REQUEST["permit"])){
    $body .= "検索許可: ".$_REQUEST["permit"]."\n";
}

if(!empty($_REQUEST["lineid"])){
    $body .= "LINE ID: ".$_REQUEST["lineid"]."\n";
}

if(mb_send_mail($to,$subject,$body,$header)){
}

}

exit();

?>