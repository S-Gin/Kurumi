<?

mb_language("Japanese");
mb_internal_encoding("UTF-8");

if(!empty($_REQUEST["email"])){

$to = "recruit@kurumi-inc.com";
$header = "From: ".$_REQUEST["email"];
$subject = "LP 応募";
$body = "";

//本文
if(!empty($_REQUEST["name"])){
    $body .= "名前: ".$_REQUEST["name"]."\n";
}

if(!empty($_REQUEST["tel"])){
    $body .= "電話番号: ".$_REQUEST["tel"]."\n";
}

$body .= "メールアドレス: ".$_REQUEST["email"]."\n";

if(!empty($_REQUEST["job"])){
    $body .= "応募職種: ".$_REQUEST["job"]."\n";
}

if(!empty($_REQUEST["skill"])){
    $body .= "スキル: ".$_REQUEST["skill"]."\n";
}

if(!empty($_REQUEST["state"])){
    $body .= "現在の状態: ".$_REQUEST["state"]."\n";
}

if(!empty($_REQUEST["sns1"])){
    $body .= "facebook: ".$_REQUEST["sns1"]."\n";
}

if(!empty($_REQUEST["sns2"])){
    $body .= "twitter: ".$_REQUEST["sns2"]."\n";
}

if(!empty($_REQUEST["sns3"])){
    $body .= "google+: ".$_REQUEST["sns3"]."\n";
}

if(!empty($_REQUEST["pr"])){
    $body .= "志望動機・PR: ".$_REQUEST["pr"]."\n";
}

if(!empty($_REQUEST["pr"])){
    $body .= "履歴書・ポートフォリオ: ".$_REQUEST["portfolio"]."\n";
}

if(mb_send_mail($to,$subject,$body,$header)){
}

}

exit();

?>